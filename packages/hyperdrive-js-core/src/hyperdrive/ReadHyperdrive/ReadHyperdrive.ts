import {
  Block,
  BlockTag,
  CachedReadContract,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  Event,
} from "@delvtech/evm-client";
import { Address } from "abitype";
import * as dnum from "dnum";
import { assertNever } from "src/base/assertNever";
import { convertBigIntsToStrings } from "src/base/convertBigIntsToStrings";
import { convertSecondsToYearFraction } from "src/base/convertSecondsToYearFraction";
import { MAX_UINT256 } from "src/base/numbers";
import { sumBigInt } from "src/base/sumBigInt";
import { getBlockFromReadOptions } from "src/evm-client/utils/getBlockFromReadOptions";
import { getBlockOrThrow } from "src/evm-client/utils/getBlockOrThrow";
import { HyperdriveAbi, hyperdriveAbi } from "src/hyperdrive/abi";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { calculateAprFromPrice } from "src/hyperdrive/utils/calculateAprFromPrice";
import { convertBaseToShares } from "src/hyperdrive/utils/convertBaseToShares";
import { convertSharesToBase } from "src/hyperdrive/utils/convertSharesToBase";
import { hyperwasm } from "src/hyperwasm";
import { ClosedLong, Long } from "src/longs/types";
import { ClosedLpShares } from "src/lp/ClosedLpShares";
import { LP_ASSET_ID } from "src/lp/assetId";
import { ReadContractModelOptions, ReadModel } from "src/model/ReadModel";
import { Checkpoint, CheckpointEvent } from "src/pool/Checkpoint";
import { MarketState } from "src/pool/MarketState";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { getCheckpointId } from "src/pool/getCheckpointId";
import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";
import { ClosedShort, OpenShort } from "src/shorts/types";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadEth } from "src/token/eth/ReadEth";
import { RedeemedWithdrawalShares } from "src/withdrawalShares/RedeemedWithdrawalShares";
import { WITHDRAW_SHARES_ASSET_ID } from "src/withdrawalShares/assetId";

export interface ReadHyperdriveOptions extends ReadContractModelOptions {}

export class ReadHyperdrive extends ReadModel {
  readonly contract: CachedReadContract<HyperdriveAbi>;

  /**
   * @hidden
   */
  constructor({
    name = "Hyperdrive",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadHyperdriveOptions) {
    super({ contractFactory, name, network });
    this.contract = contractFactory({
      abi: hyperdriveAbi,
      address,
      cache,
      namespace,
    });
  }

  async getVersion(): Promise<string> {
    return this.contract.read("version");
  }

  /**
   * Returns the base token of the pool.
   *
   * @privateRemarks
   * The default implementation supports ERC20 and ETH base tokens. If
   * the address returned by the contract is not the ETH address, it is assumed
   * to be an ERC20 token.
   */
  async getBaseToken(): Promise<ReadErc20 | ReadEth> {
    const address = await this.contract.read("baseToken");
    return address === ReadEth.address
      ? new ReadEth({
          contractFactory: this.contractFactory,
          network: this.network,
        })
      : new ReadErc20({
          address,
          contractFactory: this.contractFactory,
          namespace: this.contract.namespace,
          network: this.network,
        });
  }

  /**
   * Returns the share token of the pool.
   *
   * @privateRemarks
   * The share token is assumed to be an ERC20 token. This can be overwritten
   * in instances of Hyperdrive to return custom tokens.
   */
  async getSharesToken(): Promise<ReadErc20> {
    const address = await this.contract.read("vaultSharesToken");
    return new ReadErc20({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  getDecimals(): Promise<number> {
    return this.contract.read("decimals");
  }

  /**
   * Convert an amount of shares to base tokens using the current vault share price.
   */
  protected async convertToBase({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const { vaultSharePrice } = await this.getPoolInfo(options);
    const decimals = await this.getDecimals();
    return dnum.multiply(
      [sharesAmount, decimals],
      [vaultSharePrice, decimals],
    )[0];
  }

  /**
   * Convert an amount of base tokens to shares using the current vault share price.
   */
  protected async convertToShares({
    baseAmount,
    options,
  }: {
    baseAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const { vaultSharePrice } = await this.getPoolInfo(options);
    const decimals = await this.getDecimals();
    return dnum.divide([baseAmount, decimals], [vaultSharePrice, decimals])[0];
  }

  async getInitializationBlock(): Promise<Block> {
    const events = await this.contract.getEvents("Initialize");

    if (!events.length || events[0].blockNumber === undefined) {
      throw new Error("Pool has not been initialized, no block found.");
    }
    const blockNumber = events[0].blockNumber;

    return getBlockOrThrow(this.network, { blockNumber });
  }

  /**
   * Get a standardized variable rate using vault share prices from checkpoints in
   * the last `timeRange` seconds.
   *
   * Note: This function will throw an error if the pool was deployed within the
   * last `timeRange` seconds.
   *
   * See Agent0 for calculation:
   * https://github.com/delvtech/agent0/blob/854e9392e09898e65aeed0040c5e648c8d3d1380/src/agent0/ethpy/hyperdrive/interface/read_interface.py#L421
   *
   * @param timeRange The time range (in seconds) to use to calculate the variable
   * rate to look for checkpoints.
   */
  async getYieldSourceRate({
    blockRange,
  }: {
    blockRange: bigint;
  }): Promise<bigint> {
    // Attempt to fetch the blocks first to fail early if the block is not found
    const currentBlock = await getBlockOrThrow(this.network);
    const startBlockNumber = currentBlock.blockNumber! - blockRange;
    const startBlock = await getBlockOrThrow(this.network, {
      blockNumber: startBlockNumber,
    });

    // validate the time range
    const { blockNumber: initializationBlock } =
      await this.getInitializationBlock();
    if (initializationBlock && startBlockNumber < initializationBlock) {
      throw new Error(
        `Unable to calculate yield source APY. Attempted to fetch data from block ${startBlockNumber}, but the pool was initilized at block ${initializationBlock}.`,
      );
    }

    // Get the info from fromBlock to get the starting vault share price
    const { vaultSharePrice: startVaultSharePrice } = await this.getPoolInfo({
      blockNumber: startBlockNumber,
    });

    // Get the current vaultSharePrice from the latest pool info
    const { vaultSharePrice: currentVaultSharePrice } =
      await this.getPoolInfo();

    const timeRange = currentBlock.timestamp - startBlock.timestamp;

    // Calculate the annualized rate of return
    // using dnum for division here, as dividing two 18-decimals numbers causes
    // problems, (ie: rateOfReturn is 0 when using normal js division operator)
    const decimals = await this.getDecimals();
    const rateOfReturn = dnum.divide(
      [currentVaultSharePrice - startVaultSharePrice, decimals],
      [startVaultSharePrice, decimals],
    )[0];
    const annualizedRateOfReturn =
      (rateOfReturn * BigInt(60 * 60 * 24 * 365)) / timeRange;

    return annualizedRateOfReturn;
  }

  getCheckpoint({
    checkpointId,
    options,
  }: {
    checkpointId: bigint;
    options?: ContractReadOptions;
  }): Promise<Checkpoint> {
    return this.contract.read(
      "getCheckpoint",
      { _checkpointTime: checkpointId },
      options,
    );
  }

  getCheckpointExposure({
    checkpointId,
    options,
  }: {
    checkpointId: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "getCheckpointExposure",
      { _checkpointTime: checkpointId },
      options,
    );
  }

  /**
   *
   * This function retrieves the market state. This is helpful for retrieving
   * general market state statistics, such as whether the market has been
   * paused.
   */
  getMarketState(options?: ContractReadOptions): Promise<MarketState> {
    return this.contract.read("getMarketState", undefined, options);
  }

  /**
   * Gets the pool's configuration parameters
   */
  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", undefined, options);
  }

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   */
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", undefined, options);
  }

  /**
   * Gets the pool's fixed APR, i.e. the fixed rate a user locks in when they
   * open a long.
   */
  async getSpotRate(options?: ContractReadOptions): Promise<bigint> {
    const config = await this.getPoolConfig(options);
    const info = await this.getPoolInfo(options);

    const aprString = hyperwasm.spotRate(
      convertBigIntsToStrings(info),
      convertBigIntsToStrings(config),
    );

    return BigInt(aprString);
  }

  /**
   * Gets the implied variable rate of opening a short.
   */
  async getImpliedRate({
    bondAmount,
    timestamp,
    variableApy,
    options,
  }: {
    bondAmount: bigint;
    timestamp: bigint;
    // TODO: Get this from sdk instead
    variableApy: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const checkpointId = getCheckpointId(
      timestamp,
      poolConfig.checkpointDuration,
    );
    const { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      checkpointId,
    });

    const impliedRateString = hyperwasm.calcImpliedRate(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
      bondAmount.toString(),
      openVaultSharePrice.toString(),
      variableApy.toString(),
    );

    return BigInt(impliedRateString);
  }

  /**
   * Gets the market liquidity available for trading and removing LP.
   */
  async getIdleLiquidity(options?: ContractReadOptions): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const liquidityString = hyperwasm.idleShareReservesInBase(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
    );

    return BigInt(liquidityString);
  }

  /**
   * Gets the total present value of the pool.
   * @param options
   * @returns
   */
  async getPresentValue(options?: ContractReadOptions): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const liquidityString = hyperwasm.presentValue(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
      Math.floor(Date.now() / 1000).toString(),
    );

    return BigInt(liquidityString);
  }

  /**
   * Gets the yield accrued on an amount of bonds shorted in a given checkpoint.
   * Note that shorts stop accruing yield once they reach maturity.
   * @param checkpointId - The checkpoint the short was opened in
   * @param bondAmount - The number of bonds shorted
   * @param decimals
   * @param options
   */
  async getShortAccruedYield({
    checkpointId,
    bondAmount,
    decimals,
    options,
  }: {
    checkpointId: bigint;
    bondAmount: bigint;
    // TODO: Remove `decimals` param and just use this.getDecimals() internally
    decimals: number;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    // Get the vault share price when the short was opened
    const checkpoint = await this.getCheckpoint({ checkpointId });

    const { checkpointDuration, positionDuration } = await this.getPoolConfig();
    const isCheckpointMature =
      checkpointId + positionDuration <
      getCheckpointId(
        (await getBlockOrThrow(this.network)).timestamp,
        checkpointDuration,
      );

    // If the short is mature, get the vault share price at maturity
    let finalSharePrice;
    if (isCheckpointMature) {
      const checkpointAtMaturity = await this.getCheckpoint({
        checkpointId: checkpointId + positionDuration,
      });
      finalSharePrice = checkpointAtMaturity.vaultSharePrice;
    } else {
      // Otherwise get the current vault share price
      const poolInfo = await this.getPoolInfo(options);
      finalSharePrice = poolInfo.vaultSharePrice;
    }

    const accruedYield = calculateShortAccruedYield({
      fromSharePrice: checkpoint.vaultSharePrice,
      toSharePrice: finalSharePrice,
      bondAmount,
      decimals,
    });
    return accruedYield;
  }

  /**
   * Calculates the total trading volume in bonds given a block window.
   * @param options.fromBlock - The start block, defaults to "earliest"
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the total amount of bonds traded
   */
  async getTradingVolume(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<{
    totalVolume: bigint;
    longVolume: bigint;
    shortVolume: bigint;
  }> {
    const { fromBlock, toBlock } = options || {};
    const openLongEvents = await this.getOpenLongEvents({
      fromBlock,
      toBlock,
    });
    const closeLongEvents = await this.getClosedLongEvents({
      fromBlock,
      toBlock,
    });
    const openShortEvents = await this.getOpenShortEvents({
      fromBlock,
      toBlock,
    });
    const closeShortEvents = await this.getClosedShortEvents({
      fromBlock,
      toBlock,
    });

    const openLongVolume = sumBigInt(
      openLongEvents.map((event) => event.args.bondAmount),
    );
    const closeLongVolume = sumBigInt(
      closeLongEvents.map((event) => event.args.bondAmount),
    );

    const openShortVolume = sumBigInt(
      openShortEvents.map((event) => event.args.bondAmount),
    );
    const closeShortVolume = sumBigInt(
      closeShortEvents.map((event) => event.args.bondAmount),
    );
    return {
      totalVolume:
        openLongVolume + closeLongVolume + openShortVolume + closeShortVolume,
      longVolume: openLongVolume + closeLongVolume,
      shortVolume: openShortVolume + closeShortVolume,
    };
  }

  /**
   * Gets the spot price of a long
   * @param options - The read options
   * @returns the spot price of a long
   */
  async getLongPrice(options?: ContractReadOptions): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const spotPrice = hyperwasm.spotPrice(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
    );

    return BigInt(spotPrice);
  }

  private async getOpenLongEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "OpenLong">,
  ): Promise<Event<HyperdriveAbi, "OpenLong">[]> {
    return this.contract.getEvents("OpenLong", options);
  }

  private async getClosedLongEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "CloseLong">,
  ): Promise<Event<HyperdriveAbi, "CloseLong">[]> {
    return this.contract.getEvents("CloseLong", options);
  }

  private async getOpenShortEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "OpenShort">,
  ): Promise<Event<HyperdriveAbi, "OpenShort">[]> {
    return this.contract.getEvents("OpenShort", options);
  }

  private async getClosedShortEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "CloseShort">,
  ): Promise<Event<HyperdriveAbi, "CloseShort">[]> {
    return this.contract.getEvents("CloseShort", options);
  }
  async getLongEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "OpenLong"> &
      ContractGetEventsOptions<HyperdriveAbi, "CloseLong">,
  ): Promise<
    {
      trader: `0x${string}`;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      eventName: "OpenLong" | "CloseLong";
      blockNumber: bigint | undefined;
      transactionHash: `0x${string}` | undefined;
    }[]
  > {
    const openLongEvents = await this.contract.getEvents("OpenLong", options);
    const closeLongEvents = await this.contract.getEvents("CloseLong", options);
    const decimals = await this.getDecimals();
    return [...openLongEvents, ...closeLongEvents]
      .map(({ args, eventName, blockNumber, transactionHash }) => {
        const baseAmount = args.asBase
          ? args.amount
          : convertSharesToBase({
              sharesAmount: args.amount,
              vaultSharePrice: args.vaultSharePrice,
              decimals,
            });
        return {
          trader: args.trader,
          assetId: args.assetId,
          bondAmount: args.bondAmount,
          baseAmount,
          eventName,
          blockNumber,
          transactionHash,
        };
      })
      .sort((a, b) => Number(a.blockNumber) - Number(b.blockNumber));
  }

  async getShortEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "OpenShort"> &
      ContractGetEventsOptions<HyperdriveAbi, "CloseShort">,
  ): Promise<
    {
      trader: `0x${string}`;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      eventName: "OpenShort" | "CloseShort";
      blockNumber: bigint | undefined;
      transactionHash: `0x${string}` | undefined;
    }[]
  > {
    const openShortEvents = await this.contract.getEvents("OpenShort", options);
    const closeShortEvents = await this.contract.getEvents(
      "CloseShort",
      options,
    );
    const decimals = await this.getDecimals();
    return [...openShortEvents, ...closeShortEvents]
      .map(({ args, eventName, blockNumber, transactionHash }) => {
        const baseAmount = args.asBase
          ? args.amount
          : convertSharesToBase({
              sharesAmount: args.amount,
              vaultSharePrice: args.vaultSharePrice,
              decimals,
            });
        return {
          trader: args.trader,
          assetId: args.assetId,
          bondAmount: args.bondAmount,
          baseAmount,
          eventName,
          blockNumber,
          transactionHash,
        };
      })
      .sort((a, b) => Number(a.blockNumber) - Number(b.blockNumber));
  }

  async getLpEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "AddLiquidity"> &
      ContractGetEventsOptions<HyperdriveAbi, "RemoveLiquidity"> &
      ContractGetEventsOptions<HyperdriveAbi, "RedeemWithdrawalShares">,
  ): Promise<{
    addLiquidity: Event<HyperdriveAbi, "AddLiquidity">[];
    removeLiquidity: Event<HyperdriveAbi, "RemoveLiquidity">[];
    redeemWithdrawalShares: Event<HyperdriveAbi, "RedeemWithdrawalShares">[];
  }> {
    const addLiquidityEvents = await this.contract.getEvents(
      "AddLiquidity",
      options,
    );
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      options,
    );
    const redeemWithdrawalSharesEvents = await this.contract.getEvents(
      "RedeemWithdrawalShares",
      options,
    );

    return {
      addLiquidity: addLiquidityEvents,
      removeLiquidity: removeLiquidityEvents,
      redeemWithdrawalShares: redeemWithdrawalSharesEvents,
    };
  }

  /**
   * This  returns the LP APY using the following formula for continuous compounding:
   * r = rate of return
   * p_0 = from lpSharePrice
   * p_1 = to lpSharePrice
   * t = time frame between p_0 and p_1
   * r = ln(p_1 / p_0) / t
   */
  async getLpApy({
    fromBlock,
    toBlock,
  }: {
    fromBlock: bigint;
    toBlock: bigint;
  }): Promise<{ lpApy: number }> {
    const { checkpointDuration } = await this.getPoolConfig();

    const checkpointEvents = await this.getCheckpointEvents({
      fromBlock,
      toBlock,
    });

    if (!checkpointEvents.length) {
      return { lpApy: 0 };
    }

    // The starting lp share price comes from the first checkpoint in our events
    const {
      args: {
        checkpointTime: startingCheckpointTime,
        lpSharePrice: startingCheckpointLpSharePrice,
      },
    } = checkpointEvents[0];

    // The ending lp share price is either the current checkpoint's lp share
    // price, or the last checkpoint in our events if looking at historical
    // apys.
    const endingCheckpoint = checkpointEvents[checkpointEvents.length - 1];
    const block = await this.network.getBlock();
    const currentCheckpointId = getCheckpointId(
      block?.timestamp as bigint,
      checkpointDuration,
    );
    const endingCheckpointId = getCheckpointId(
      endingCheckpoint.args.checkpointTime,
      checkpointDuration,
    );
    const { lpSharePrice: currentLpSharePrice } = await this.getPoolInfo();
    const endingCheckpointLpSharePrice =
      currentCheckpointId === endingCheckpointId
        ? currentLpSharePrice
        : endingCheckpoint.args.lpSharePrice;

    const timeFrame =
      endingCheckpoint.args.checkpointTime - startingCheckpointTime;

    const lpApy = calculateLpApy({
      startingCheckpointLpSharePrice,
      endingCheckpointLpSharePrice,
      timeFrame,
    });

    return { lpApy };
  }

  async getCheckpointEvents(
    options?: ContractGetEventsOptions<HyperdriveAbi, "CreateCheckpoint">,
  ): Promise<CheckpointEvent[]> {
    const checkPointEvents = await this.contract.getEvents(
      "CreateCheckpoint",
      options,
    );
    return checkPointEvents;
  }

  private _calcOpenLongs({
    openLongEvents,
    closeLongEvents,
    decimals,
  }: {
    openLongEvents: Event<HyperdriveAbi, "OpenLong">[];
    closeLongEvents: Event<HyperdriveAbi, "CloseLong">[];
    decimals: number;
  }): Long[] {
    // Put open and long events in block order. We spread openLongEvents first
    // since you have to open a long before you can close one.
    const orderedLongEvents = [...openLongEvents, ...closeLongEvents].sort(
      (a, b) => Number(a.blockNumber) - Number(b.blockNumber),
    );

    const openLongs: Record<string, Long> = {};

    orderedLongEvents.forEach((event) => {
      const assetId = event.args.assetId.toString();

      const long: Long = openLongs[assetId] || {
        assetId: event.args.assetId,
        maturity: event.args.maturityTime,
        baseAmountPaid: 0n,
        bondAmount: 0n,
      };

      const baseAmount = event.args.asBase
        ? event.args.amount
        : convertSharesToBase({
            sharesAmount: event.args.amount,
            vaultSharePrice: event.args.vaultSharePrice,
            decimals,
          });

      if (event.eventName === "OpenLong") {
        const updatedLong: Long = {
          ...long,
          baseAmountPaid: long.baseAmountPaid + baseAmount,
          bondAmount: long.bondAmount + event.args.bondAmount,
        };
        openLongs[assetId] = updatedLong;
        return;
      }

      if (event.eventName === "CloseLong") {
        // If a user closes their whole position, we should remove the whole
        // position since it's basically starting over
        if (event.args.bondAmount === long.bondAmount) {
          delete openLongs[assetId];
          return;
        }
        // otherwise just subtract the amount of bonds they closed and baseAmount
        // they received back from the running total
        const updatedLong: Long = {
          ...long,
          baseAmountPaid: long.baseAmountPaid - baseAmount,
          bondAmount: long.bondAmount - event.args.bondAmount,
        };
        openLongs[assetId] = updatedLong;
      }
    });

    return Object.values(openLongs).filter((long) => long.bondAmount);
  }

  /**
   * Gets the active longs opened by a specific user.
   * @param account - The user's address
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the active longs opened by a specific user
   */
  async getOpenLongs({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<Long[]> {
    const toBlock = getBlockFromReadOptions(options);

    const openLongEvents = await this.contract.getEvents("OpenLong", {
      filter: { trader: account },
      toBlock,
    });
    const closeLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      toBlock,
    });

    const decimals = await this.getDecimals();

    return this._calcOpenLongs({
      openLongEvents,
      closeLongEvents,
      decimals,
    });
  }

  /**
   * Gets the active shorts opened by a specific user.
   * @param account - The user's address
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the active shorts opened by a specific user
   * */
  async getOpenShorts({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<OpenShort[]> {
    const toBlock = getBlockFromReadOptions(options);

    const { checkpointDuration, positionDuration } =
      await this.getPoolConfig(options);

    const openShortEvents = await this.contract.getEvents("OpenShort", {
      filter: { trader: account },
      toBlock,
    });
    const closeShortEvents = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      toBlock,
    });

    return this._calcOpenShorts({
      hyperdriveAddress: this.contract.address,
      checkpointDuration,
      positionDuration,
      openShortEvents,
      closeShortEvents,
    });
  }

  private async _calcOpenShorts({
    hyperdriveAddress,
    checkpointDuration,
    positionDuration,
    closeShortEvents,
    openShortEvents,
  }: {
    hyperdriveAddress: Address;
    checkpointDuration: bigint;
    positionDuration: bigint;
    openShortEvents: Event<typeof hyperdriveAbi, "OpenShort">[];
    closeShortEvents: Event<typeof hyperdriveAbi, "CloseShort">[];
  }): Promise<OpenShort[]> {
    // Put open and short events in block order. We spread openShortEvents first
    // since you have to open a short before you can close one.
    const orderedShortEvents = [...openShortEvents, ...closeShortEvents].sort(
      (a, b) => Number(a.blockNumber) - Number(b.blockNumber),
    );

    const openShorts: Record<string, OpenShort> = {};

    for (const event of orderedShortEvents) {
      const assetId = event.args.assetId.toString();
      const { timestamp } = await getBlockOrThrow(this.network, {
        blockNumber: event.blockNumber,
      });

      // Create a default empty short that we will update based on the events
      // const short: OpenShort = openShorts[assetId] || {
      openShorts[assetId] = openShorts[assetId] || {
        hyperdriveAddress,
        assetId: event.args.assetId,
        maturity: event.args.maturityTime,
        checkpointId: getCheckpointId(timestamp, checkpointDuration),
        // The openedTimestamp will always reflect the latest short, if you open
        // twice in the same checkpoint
        openedTimestamp: timestamp,
        baseAmountPaid: 0n,
        bondAmount: 0n,
        baseProceeds: 0n,
        fixedRatePaid: 0n,
      };

      const decimals = await this.getDecimals();
      const baseAmount = event.args.asBase
        ? event.args.amount
        : convertSharesToBase({
            sharesAmount: event.args.amount,
            vaultSharePrice: event.args.vaultSharePrice,
            decimals,
          });

      const { eventName } = event;
      switch (eventName) {
        // When you open a short, we add up how much you've paid and your new
        // total bond amount, then update the average price and fixed rate
        // paid
        case "OpenShort":
          openShorts[assetId].baseAmountPaid += baseAmount;
          openShorts[assetId].bondAmount += event.args.bondAmount;
          openShorts[assetId].baseProceeds += event.args.baseProceeds;
          openShorts[assetId].fixedRatePaid = calculateAprFromPrice({
            positionDuration,
            baseAmount: openShorts[assetId].baseProceeds,
            bondAmount: openShorts[assetId].bondAmount,
          });
          continue;

        case "CloseShort": {
          // If a user closes their whole position, we should remove the whole
          // position since it's basically starting over
          if (event.args.bondAmount === openShorts[assetId].bondAmount) {
            delete openShorts[assetId];
            continue;
          }
          // otherwise just subtract the amount of bonds they closed and baseAmount
          // they received back from the running total
          openShorts[assetId].baseAmountPaid -= baseAmount;
          openShorts[assetId].bondAmount -= event.args.bondAmount;
          openShorts[assetId].baseProceeds -= event.args.basePayment;
          openShorts[assetId].fixedRatePaid = calculateAprFromPrice({
            positionDuration,
            baseAmount: openShorts[assetId].baseProceeds,
            bondAmount: openShorts[assetId].bondAmount,
          });
          continue;
        }

        default:
          assertNever(eventName);
      }
    }

    return Object.values(openShorts).filter((short) => short.bondAmount);
  }

  /**
   * Gets the closed longs by a specific user.
   */
  async getClosedLongs({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<ClosedLong[]> {
    const toBlock = getBlockFromReadOptions(options);

    const closedLongs = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      toBlock,
    });

    const decimals = await this.getDecimals();
    const closedLongsList: ClosedLong[] = await Promise.all(
      closedLongs.map(async (event) => {
        const assetId = event.args.assetId;

        const baseAmount = event.args.asBase
          ? event.args.amount
          : convertSharesToBase({
              sharesAmount: event.args.amount,
              vaultSharePrice: event.args.vaultSharePrice,
              decimals,
            });

        return {
          assetId,
          bondAmount: event.args.bondAmount,
          baseAmount,
          baseAmountPaid: 0n, // TODO: Remove this field, this is copy/paste from @hyperdrive/queries
          maturity: event.args.maturityTime,
          closedTimestamp: (
            await getBlockOrThrow(this.network, {
              blockNumber: event.blockNumber,
            })
          ).timestamp,
        };
      }),
    );
    return closedLongsList.filter((long) => long.bondAmount);
  }

  /**
   * Gets the inactive shorts opened by a specific user.
   */
  async getClosedShorts({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<ClosedShort[]> {
    const toBlock = getBlockFromReadOptions(options);
    const closedShorts = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      toBlock,
    });

    const { checkpointDuration } = await this.getPoolConfig(options);
    const decimals = await this.getDecimals();
    const closedShortsList: ClosedShort[] = await Promise.all(
      closedShorts.map(async (event) => {
        const { assetId, maturityTime } = event.args;
        const { timestamp } = await getBlockOrThrow(this.network, {
          blockNumber: event.blockNumber,
        });

        const baseAmount = event.args.asBase
          ? event.args.amount
          : convertSharesToBase({
              sharesAmount: event.args.amount,
              vaultSharePrice: event.args.vaultSharePrice,
              decimals,
            });

        return {
          hyperdriveAddress: this.contract.address,
          assetId,
          bondAmount: event.args.bondAmount,
          baseAmountReceived: baseAmount,
          maturity: maturityTime,
          closedTimestamp: timestamp,
          checkpointId: getCheckpointId(timestamp, checkpointDuration),
        };
      }),
    );

    return closedShortsList.filter((short) => short.bondAmount);
  }

  /**
   * Gets the maximum amount of bonds a user can open a short for.
   */
  async getMaxShort(options?: ContractReadOptions): Promise<{
    maxBaseIn: bigint;
    maxSharesIn: bigint;
    maxBondsOut: bigint;
  }> {
    const poolInfo = await this.getPoolInfo(options);
    const poolConfig = await this.getPoolConfig(options);
    const decimals = await this.getDecimals();

    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      poolConfig.checkpointDuration,
    );
    const checkpointExposure = await this.getCheckpointExposure({
      checkpointId,
      options,
    });
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      checkpointId,
    });

    const stringifiedPoolInfo = convertBigIntsToStrings(poolInfo);
    const stringifiedPoolConfig = convertBigIntsToStrings(poolConfig);

    const maxBondsOut = hyperwasm.maxShort(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      MAX_UINT256.toString(),
      openSharePrice.toString(),
      checkpointExposure.toString(),
    );
    const maxBaseIn = hyperwasm.calcOpenShort(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      maxBondsOut,
      openSharePrice.toString(),
    );
    const maxSharesIn = dnum.divide(
      [BigInt(maxBaseIn), decimals],
      [poolInfo?.vaultSharePrice, decimals],
    )[0];

    return {
      maxBaseIn: BigInt(maxBaseIn),
      maxSharesIn: BigInt(maxSharesIn),
      maxBondsOut: BigInt(maxBondsOut),
    };
  }

  /**
   * Gets the maximum amount of bonds a user can open a long for.
   */
  async getMaxLong(options?: ContractReadOptions): Promise<{
    maxBaseIn: bigint;
    maxSharesIn: bigint;
    maxBondsOut: bigint;
  }> {
    const poolInfo = await this.getPoolInfo(options);
    const poolConfig = await this.getPoolConfig(options);

    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      poolConfig.checkpointDuration,
    );
    const checkpointExposure = await this.getCheckpointExposure({
      checkpointId,
      options,
    });

    const stringifiedPoolInfo = convertBigIntsToStrings(poolInfo);
    const stringifiedPoolConfig = convertBigIntsToStrings(poolConfig);

    const maxBaseIn = hyperwasm.maxLong(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      MAX_UINT256.toString(),
      checkpointExposure.toString(),
    );

    const maxSharesIn = dnum.divide(
      [BigInt(maxBaseIn), 18],
      [poolInfo?.vaultSharePrice, 18],
    )[0];

    const maxBondsOut = hyperwasm.calcOpenLong(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      maxBaseIn,
    );

    return {
      maxBaseIn: BigInt(maxBaseIn),
      maxSharesIn: BigInt(maxSharesIn),
      maxBondsOut: BigInt(maxBondsOut),
    };
  }

  getLpSharesTotalSupply(args?: {
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "totalSupply",
      { tokenId: LP_ASSET_ID },
      args?.options,
    );
  }

  /**
   * Gets the amount of LP shares a user has.
   */
  getLpShares({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "balanceOf",
      { tokenId: LP_ASSET_ID, owner: account },
      options,
    );
  }

  /**
   * Gets a user's current LP position.
   */
  async getOpenLpPosition({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{
    lpShareBalance: bigint;
    baseAmountPaid: bigint;
    baseValue: bigint;
    sharesValue: bigint;
  }> {
    const toBlock = getBlockFromReadOptions(options);
    const addLiquidityEvents = await this.contract.getEvents("AddLiquidity", {
      filter: { provider: account },
      toBlock,
    });
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      {
        filter: { provider: account },
        toBlock,
      },
    );

    const decimals = await this.getDecimals();
    const { lpShareBalance, baseAmountPaid } = this._calcOpenLpPosition({
      addLiquidityEvents,
      removeLiquidityEvents,
      decimals,
    });

    let baseValue = 0n;
    let sharesValue = 0n;
    if (lpShareBalance) {
      // Note: `previewRemoveLiquidity` uses the `simulateWrite` method which
      // simulates the transaction at the current block. This means that the
      // calculated value of the position will always be based on the current
      // state of the pool, even if the lp balance and amount paid were
      // calculated using past events via the block in options.
      const { proceeds, withdrawalShares } = await this.previewRemoveLiquidity({
        lpSharesIn: lpShareBalance,
        minOutputPerShare: 1n,
        asBase: false,
        destination: account,
      });

      // convert the proceeds into base using vaultSharePrice
      // Note: we don't pass in the options here because we want the current
      // prices that were used in the previewRemoveLiquidity call.
      const { vaultSharePrice, lpSharePrice } = await this.getPoolInfo();
      const proceedsBaseValue = dnum.multiply(
        [vaultSharePrice, 18],
        [proceeds, 18],
      );

      // convert the withdrawal shares into base using lpSharePrice
      const withdrawalSharesBaseValue = dnum.multiply(
        [lpSharePrice, 18],
        [withdrawalShares, 18],
      );
      const withdrawalSharesSharesValue = dnum.divide(
        withdrawalSharesBaseValue,
        [vaultSharePrice, 18],
      );

      baseValue = dnum.add(proceedsBaseValue, withdrawalSharesBaseValue)[0];
      sharesValue = dnum.add([proceeds, 18], withdrawalSharesSharesValue)[0];
    }

    return {
      lpShareBalance,
      baseValue,
      sharesValue,
      baseAmountPaid,
    };
  }

  /**
   * Combine the adds and removes in order of block number to get the full
   * transaction history in the order the user executed them
   */
  private _calcOpenLpPosition({
    addLiquidityEvents,
    removeLiquidityEvents,
    decimals,
  }: {
    decimals: number;
    addLiquidityEvents: {
      eventName: "AddLiquidity";
      blockNumber?: bigint;
      args: {
        lpAmount: bigint;
        amount: bigint;
        vaultSharePrice: bigint;
        asBase: boolean;
      };
    }[];
    removeLiquidityEvents: {
      eventName: "RemoveLiquidity";
      blockNumber?: bigint;
      args: {
        lpAmount: bigint;
        amount: bigint;
        vaultSharePrice: bigint;
        asBase: boolean;
      };
    }[];
  }) {
    const combinedEventsInOrder = [
      ...addLiquidityEvents,
      ...removeLiquidityEvents,
    ].sort((a, b) => Number(a.blockNumber) - Number(b.blockNumber));

    let baseAmountPaid = 0n;
    let lpShareBalance = 0n;
    combinedEventsInOrder.forEach((event) => {
      const baseAmount = event.args.asBase
        ? event.args.amount
        : convertSharesToBase({
            sharesAmount: event.args.amount,
            vaultSharePrice: event.args.vaultSharePrice,
            decimals,
          });

      if (event.eventName === "AddLiquidity") {
        lpShareBalance = dnum.add(
          [lpShareBalance, decimals],
          [event.args.lpAmount, decimals],
        )[0];
        baseAmountPaid = dnum.add(
          [baseAmountPaid, decimals],
          [baseAmount, decimals],
        )[0];
      }

      if (event.eventName === "RemoveLiquidity") {
        // If a user removes all their lp shares, we should zero out
        // baseAmountPaid, since it's basically starting over
        if (event.args.lpAmount === lpShareBalance) {
          lpShareBalance = 0n;
          baseAmountPaid = 0n;
          return;
        }
        // otherwise just subtract the amount of lp shares they closed and baseAmount
        // they received back from the running total
        lpShareBalance = dnum.subtract(
          [lpShareBalance, decimals],
          [event.args.lpAmount, decimals],
        )[0];
        baseAmountPaid = dnum.subtract(
          [baseAmountPaid, decimals],
          [baseAmount, decimals],
        )[0];
      }
    });

    return { lpShareBalance, baseAmountPaid };
  }

  /**
   * Gets the amount of closed LP shares a user has.
   */
  async getClosedLpShares({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<ClosedLpShares[]> {
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      {
        filter: { provider: account },
        toBlock: getBlockFromReadOptions(options),
      },
    );
    const decimals = await this.getDecimals();
    return Promise.all(
      removeLiquidityEvents.map(async ({ blockNumber, args }) => {
        const {
          lpAmount,
          withdrawalShareAmount,
          asBase,
          amount,
          lpSharePrice,
        } = args;

        const baseAmount = asBase
          ? amount
          : convertSharesToBase({
              sharesAmount: args.amount,
              vaultSharePrice: args.vaultSharePrice,
              decimals,
            });

        return {
          lpAmount,
          baseAmount,
          withdrawalShareAmount,
          lpSharePrice,
          closedTimestamp: (
            await getBlockOrThrow(this.network, {
              blockNumber,
            })
          ).timestamp,
        };
      }),
    );
  }

  /**
   * Gets the amount of withdrawal shares a user has.
   */
  getWithdrawalShares({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "balanceOf",
      { tokenId: WITHDRAW_SHARES_ASSET_ID, owner: account },
      options,
    );
  }

  /**
   * Gets the amount of redeemed withdrawal shares a user has.
   */
  async getRedeemedWithdrawalShares({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<RedeemedWithdrawalShares[]> {
    const redeemedWithdrawalShareEvents = await this.contract.getEvents(
      "RedeemWithdrawalShares",
      {
        filter: { provider: account },
        toBlock: getBlockFromReadOptions(options),
      },
    );

    const decimals = await this.getDecimals();
    return Promise.all(
      redeemedWithdrawalShareEvents.map(async ({ blockNumber, args }) => {
        const { withdrawalShareAmount, amount, asBase, vaultSharePrice } = args;
        const baseAmount = asBase
          ? args.amount
          : convertSharesToBase({
              sharesAmount: amount,
              vaultSharePrice,
              decimals,
            });

        return {
          hyperdriveAddress: this.contract.address,
          withdrawalShareAmount,
          baseAmount,
          redeemedTimestamp: (
            await getBlockOrThrow(this.network, { blockNumber })
          ).timestamp,
        };
      }),
    );
  }

  /**
   * Predicts the amount of bonds a user will receive when opening a long in
   * either base or shares. The curve fee returned from this function is paid in bonds.
   */
  async previewOpenLong({
    amountIn,
    asBase,
    options,
  }: {
    amountIn: bigint;
    asBase: boolean;
    options?: ContractReadOptions;
  }): Promise<{
    maturityTime: bigint;
    bondProceeds: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      poolConfig.checkpointDuration,
    );

    const decimals = await this.getDecimals();

    // calcOpenLong only accepts base, so if the user is depositing shares we
    // need to convert that value to base before we can preview the trade for them
    let depositAmountConvertedToBase = amountIn;
    if (!asBase) {
      depositAmountConvertedToBase = convertSharesToBase({
        decimals,
        sharesAmount: amountIn,
        vaultSharePrice: poolInfo.vaultSharePrice,
      });
    }

    const spotPriceAfterOpen = BigInt(
      hyperwasm.spotPriceAfterLong(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        depositAmountConvertedToBase.toString(),
      ),
    );

    // See for spot rate calc:
    // https://github.com/delvtech/hyperdrive/blob/main/crates/hyperdrive-math/src/lib.rs#L120
    const termLengthInYearFractions = convertSecondsToYearFraction(
      poolConfig.positionDuration,
    );
    const spotRateAfterOpen = dnum.divide(
      dnum.subtract(dnum.from("1", 18), [spotPriceAfterOpen, 18]),
      dnum.multiply(
        [spotPriceAfterOpen, 18],
        dnum.from(termLengthInYearFractions, 18),
      ),
    )[0];

    const bondProceeds = hyperwasm.calcOpenLong(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
      depositAmountConvertedToBase.toString(),
    );

    const curveFeeInBonds = BigInt(
      hyperwasm.openLongCurveFee(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        depositAmountConvertedToBase.toString(),
      ),
    );

    return {
      maturityTime: checkpointId + poolConfig.positionDuration,
      bondProceeds: BigInt(bondProceeds),
      spotPriceAfterOpen,
      spotRateAfterOpen,
      curveFee: curveFeeInBonds,
    };
  }

  /**
   * Calculates the cost to open a short given the current pool state and the
   * amount of bonds the user wants to short.
   * @param amountOfBondsToShort The number of bonds to short
   * @param asBase If true, the traderDeposit will be in base. If false, the traderDeposit will be in shares
   */
  async previewOpenShort({
    amountOfBondsToShort,
    asBase,
    options,
  }: {
    amountOfBondsToShort: bigint;
    asBase: boolean;
    options?: ContractReadOptions;
  }): Promise<{
    maturityTime: bigint;
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const decimals = await this.getDecimals();
    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      poolConfig.checkpointDuration,
    );
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      checkpointId,
    });

    const baseDepositAmount = BigInt(
      hyperwasm.calcOpenShort(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        amountOfBondsToShort.toString(),
        openSharePrice.toString(),
      ),
    );
    // calcOpenShort only returns the preview in terms of base, so if the user
    // wants to deposit shares we need to convert that value to shares.
    let traderDeposit = baseDepositAmount;
    if (!asBase) {
      traderDeposit = convertBaseToShares({
        decimals,
        vaultSharePrice: poolInfo.vaultSharePrice,
        baseAmount: baseDepositAmount,
      });
    }

    const spotPriceAfterOpen = BigInt(
      hyperwasm.spotPriceAfterShort(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        amountOfBondsToShort.toString(),
      ),
    );

    // See for spot rate calc:
    // https://github.com/delvtech/hyperdrive/blob/main/crates/hyperdrive-math/src/lib.rs#L120
    const termLengthInYearFractions = convertSecondsToYearFraction(
      poolConfig.positionDuration,
    );
    const spotRateAfterOpen = dnum.divide(
      dnum.subtract(dnum.from("1", 18), [spotPriceAfterOpen, 18]),
      dnum.multiply(
        [spotPriceAfterOpen, 18],
        dnum.from(termLengthInYearFractions, 18),
      ),
    )[0];

    const curveFeeInBase = BigInt(
      hyperwasm.openShortCurveFee(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        amountOfBondsToShort.toString(),
        hyperwasm.spotPrice(
          convertBigIntsToStrings(poolInfo),
          convertBigIntsToStrings(poolConfig),
        ),
      ),
    );
    let curveFee = curveFeeInBase;
    if (!asBase) {
      curveFee = convertBaseToShares({
        baseAmount: curveFeeInBase,
        vaultSharePrice: poolInfo.vaultSharePrice,
        decimals,
      });
    }

    return {
      maturityTime: checkpointId + poolConfig.positionDuration,
      traderDeposit,
      spotPriceAfterOpen,
      spotRateAfterOpen,
      curveFee,
    };
  }

  /**
   * Predicts the amount of base asset a user will receive when closing a long.
   */
  async previewCloseLong({
    maturityTime,
    bondAmountIn,
    asBase,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    asBase: boolean;
    options?: ContractReadOptions;
  }): Promise<{ maxAmountOut: bigint; flatPlusCurveFee: bigint }> {
    const config = await this.getPoolConfig(options);
    const info = await this.getPoolInfo(options);
    const currentTime = BigInt(Math.floor(Date.now() / 1000));

    const flatFeeInShares = BigInt(
      hyperwasm.closeLongFlatFee(
        convertBigIntsToStrings(info),
        convertBigIntsToStrings(config),
        bondAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );
    const curveFeeInShares = BigInt(
      hyperwasm.closeLongCurveFee(
        convertBigIntsToStrings(info),
        convertBigIntsToStrings(config),
        bondAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );

    const maxOutInShares = BigInt(
      hyperwasm.calcCloseLong(
        convertBigIntsToStrings(info),
        convertBigIntsToStrings(config),
        bondAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );
    let maxAmountOut = maxOutInShares;
    let flatPlusCurveFee = flatFeeInShares + curveFeeInShares;
    if (asBase) {
      maxAmountOut = convertSharesToBase({
        sharesAmount: maxOutInShares,
        vaultSharePrice: info.vaultSharePrice,
        decimals: await this.getDecimals(),
      });
      flatPlusCurveFee = convertSharesToBase({
        sharesAmount: flatPlusCurveFee,
        vaultSharePrice: info.vaultSharePrice,
        decimals: await this.getDecimals(),
      });
    }

    return {
      maxAmountOut,
      flatPlusCurveFee,
    };
  }

  /**
   * Predicts the amount of base asset a user will receive when closing a short.
   */
  async previewCloseShort({
    maturityTime,
    shortAmountIn,
    asBase,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{ amountOut: bigint; flatPlusCurveFee: bigint }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      poolConfig.checkpointDuration,
    );
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      checkpointId,
    });

    const currentTime = BigInt(Math.floor(Date.now() / 1000));

    const flatFeeInShares = BigInt(
      hyperwasm.closeShortFlatFee(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        shortAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );
    const curveFeeInShares = BigInt(
      hyperwasm.closeShortCurveFee(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        shortAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );

    const amountOutInShares = BigInt(
      hyperwasm.calcCloseShort(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        shortAmountIn.toString(),
        openSharePrice.toString(),
        poolInfo.vaultSharePrice.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );
    let amountOut = amountOutInShares;
    let flatPlusCurveFee = flatFeeInShares + curveFeeInShares;
    if (asBase) {
      amountOut = convertSharesToBase({
        sharesAmount: amountOutInShares,
        vaultSharePrice: poolInfo.vaultSharePrice,
        decimals: await this.getDecimals(),
      });
      flatPlusCurveFee = convertSharesToBase({
        sharesAmount: flatPlusCurveFee,
        vaultSharePrice: poolInfo.vaultSharePrice,
        decimals: await this.getDecimals(),
      });
    }
    return { amountOut, flatPlusCurveFee };
  }

  /**
   * Predicts the amount of LP shares a user will receive when adding liquidity.
   */
  async previewAddLiquidity({
    contribution,
    minAPR,
    minLpSharePrice,
    maxAPR,
    destination,
    asBase,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    destination: `0x${string}`;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const lpSharesOut = BigInt(
      hyperwasm.calcAddLiquidity(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        currentTime.toString(),
        contribution.toString(),
        asBase,
        minLpSharePrice.toString(),
        minAPR.toString(),
        maxAPR.toString(),
      ),
    );
    const { vaultSharePrice, lpSharePrice } = await this.getPoolInfo();
    const decimals = await this.getDecimals();
    const lpSharesOutInBase = dnum.multiply(
      [lpSharesOut, decimals],
      [lpSharePrice, decimals],
    )[0];
    const valueOfLpShares = asBase
      ? lpSharesOutInBase
      : convertBaseToShares({
          baseAmount: lpSharesOutInBase,
          vaultSharePrice,
          decimals,
        });

    const slippagePaid = dnum.subtract(
      [contribution, decimals],
      [valueOfLpShares, decimals],
    )[0];
    return {
      lpSharesOut,
      slippagePaid,
    };
  }

  /**
   * Predicts the amount of base asset and withdrawlshares a user will receive when removing liquidity.
   */
  async previewRemoveLiquidity({
    lpSharesIn,
    minOutputPerShare,
    destination,
    asBase,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }> {
    const { proceeds, withdrawalShares } = await this.contract.simulateWrite(
      "removeLiquidity",
      {
        _lpShares: lpSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        // since this is calling a write method in view mode, we must specify
        // the `from` in order to have an account to preview with
        from: destination,
      },
    );

    return {
      proceeds,
      withdrawalShares,
    };
  }

  /**
   * Predicts the amount of base asset and redeemed shares a user will receive when redeeming withdrawal shares.
   */
  async previewRedeemWithdrawalShares({
    withdrawalSharesIn,
    minOutputPerShare,
    destination,
    asBase,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): Promise<{
    baseProceeds: bigint;
    withdrawalSharesRedeemed: bigint;
    asBase: boolean;
    sharesProceeds: bigint;
  }> {
    const { proceeds, withdrawalSharesRedeemed } =
      await this.contract.simulateWrite(
        "redeemWithdrawalShares",
        {
          _withdrawalShares: withdrawalSharesIn,
          _minOutputPerShare: minOutputPerShare,
          _options: { destination, asBase, extraData },
        },
        options,
      );
    const { vaultSharePrice } = await this.getPoolInfo();
    const decimals = await this.getDecimals();

    const baseProceeds = asBase
      ? proceeds
      : convertSharesToBase({
          sharesAmount: proceeds,
          vaultSharePrice,
          decimals,
        });

    const sharesProceeds = asBase
      ? convertBaseToShares({
          baseAmount: proceeds,
          vaultSharePrice,
          decimals,
        })
      : proceeds;

    return {
      asBase,
      baseProceeds,
      sharesProceeds,
      withdrawalSharesRedeemed,
    };
  }
}

/*
 * This  returns the LP APY using the following formula for continuous compounding:

 * r = rate of return
 * p_0 = from lpSharePrice
 * p_1 = to lpSharePrice
 * t = term length in fractions of a year
 *
 * r = ln(p_1 / p_0) / t
 */
function calculateLpApy({
  startingCheckpointLpSharePrice,
  endingCheckpointLpSharePrice,
  timeFrame,
}: {
  startingCheckpointLpSharePrice: bigint;
  endingCheckpointLpSharePrice: bigint;
  timeFrame: bigint;
}): number {
  const priceRatio = dnum.toNumber(
    dnum.div(
      [endingCheckpointLpSharePrice, 18],
      [startingCheckpointLpSharePrice, 18],
    ),
    18,
  );
  const logOfPriceRatio = dnum.from(Math.log(priceRatio), 18);

  const timeFrameInDays = timeFrame / (24n * 60n * 60n);
  const yearFraction = dnum.div([timeFrameInDays, 18], [365n, 18]);
  const lpApy = Number(
    dnum.format(dnum.div(logOfPriceRatio, yearFraction, 18)),
  );

  return lpApy;
}
