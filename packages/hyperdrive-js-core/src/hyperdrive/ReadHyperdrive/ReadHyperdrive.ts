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
import { MergeKeys } from "src/base/types";
import { getCheckpointTime } from "src/checkpoint/getCheckpointTime";
import {
  Checkpoint,
  CheckpointEvent,
  GetCheckpointParams,
  GetCheckpointTimeParams,
} from "src/checkpoint/types";
import { getBlockFromReadOptions } from "src/evm-client/utils/getBlockFromReadOptions";
import { getBlockOrThrow } from "src/evm-client/utils/getBlockOrThrow";
import { HyperdriveAbi, hyperdriveAbi } from "src/hyperdrive/abi";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { calculateAprFromPrice } from "src/hyperdrive/utils/calculateAprFromPrice";
import { convertSharesToBase } from "src/hyperdrive/utils/convertSharesToBase";
import { hyperwasm } from "src/hyperwasm";
import { ClosedLong, Long } from "src/longs/types";
import { ClosedLpShares } from "src/lp/ClosedLpShares";
import { LP_ASSET_ID } from "src/lp/assetId";
import { ReadContractModelOptions, ReadModel } from "src/model/ReadModel";
import { MarketState } from "src/pool/MarketState";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { decodeAssetFromTransferSingleEventData } from "src/pool/decodeAssetFromTransferSingleEventData";
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

  /**
   * Get the checkpoint time for a given timestamp or block number, defaulting
   * to the latest block.
   * @returns The time of the checkpoint.
   */
  getCheckpointTime(params: GetCheckpointTimeParams = {}): Promise<bigint> {
    return this._getCheckpointTime(params);
  }

  /**
   * A protected version of {@linkcode ReadHyperdrive.getCheckpointTime} with
   * more relaxed types to streamline internal usage. The public API ensures
   * only one of `timestamp` or `blockNumber` is provided to avoid ambiguity,
   * but this function allows both to be provided, in which case `timestamp`
   * will take precedence.
   */
  protected async _getCheckpointTime({
    timestamp,
    blockNumber,
    options,
  }: MergeKeys<GetCheckpointTimeParams> = {}): Promise<bigint> {
    const { checkpointDuration } = await this.getPoolConfig(options);

    // If no timestamp is provided, use the timestamp from the the given block
    // number, or the latest block if no block number is provided
    if (timestamp === undefined) {
      const block = await getBlockOrThrow(this.network, { blockNumber });
      timestamp = block.timestamp;
    }

    return getCheckpointTime(timestamp, checkpointDuration);
  }

  async getCheckpoint({
    checkpointTime,
    timestamp,
    blockNumber,
    options,
  }: GetCheckpointParams = {}): Promise<Checkpoint> {
    if (checkpointTime === undefined) {
      checkpointTime = await this._getCheckpointTime({
        timestamp,
        blockNumber,
        options,
      });
    }

    const {
      lastWeightedSpotPriceUpdateTime,
      vaultSharePrice,
      weightedSpotPrice,
    } = await this.contract.read(
      "getCheckpoint",
      { _checkpointTime: checkpointTime },
      options,
    );

    return {
      checkpointTime,
      lastWeightedSpotPriceUpdateTime,
      vaultSharePrice,
      weightedSpotPrice,
    };
  }

  async getCheckpointExposure({
    checkpointTime,
    blockNumber,
    timestamp,
    options,
  }: GetCheckpointParams = {}): Promise<bigint> {
    if (checkpointTime === undefined) {
      checkpointTime = await this._getCheckpointTime({
        blockNumber,
        timestamp,
      });
    }

    return this.contract.read(
      "getCheckpointExposure",
      { _checkpointTime: checkpointTime },
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
  async getFixedApr(options?: ContractReadOptions): Promise<bigint> {
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

    // The vault share price at the time the current checkpoint was minted is
    // the most accurate, however if there is no current checkpoint we should
    // just use the current vualt share price.
    let { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      timestamp,
    });
    if (!openVaultSharePrice) {
      openVaultSharePrice = (await this.getPoolInfo()).vaultSharePrice;
    }

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
   * @param checkpointTime - The checkpoint the short was opened in
   * @param bondAmount - The number of bonds shorted
   * @param decimals
   * @param options
   */
  async getShortAccruedYield({
    checkpointTime,
    bondAmount,
    options,
  }: {
    checkpointTime: bigint;
    bondAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const { positionDuration } = await this.getPoolConfig(options);
    const maturityTime = checkpointTime + positionDuration;
    const latestCheckpointTime = await this.getCheckpointTime({ options });
    const isMatured = maturityTime < latestCheckpointTime;

    // If the short is mature, get the vault share price at maturity
    let finalSharePrice;
    if (isMatured) {
      const checkpointAtMaturity = await this.getCheckpoint({
        checkpointTime: maturityTime,
        options,
      });
      finalSharePrice = checkpointAtMaturity.vaultSharePrice;
    } else {
      // Otherwise get the current vault share price
      const poolInfo = await this.getPoolInfo(options);
      finalSharePrice = poolInfo.vaultSharePrice;
    }

    // Get the vault share price when the short was opened
    const { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      checkpointTime,
      options,
    });

    return calculateShortAccruedYield({
      fromSharePrice: openVaultSharePrice,
      toSharePrice: finalSharePrice,
      bondAmount,
      decimals: await this.getDecimals(),
    });
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
    const checkpointEvents = await this.getCheckpointEvents({
      fromBlock,
      toBlock,
    });

    if (!checkpointEvents.length) {
      return { lpApy: 0 };
    }

    // The starting lp share price comes from the first checkpoint in our events
    const {
      args: { checkpointTime: startTime, lpSharePrice: startingLpSharePrice },
    } = checkpointEvents[0];

    let {
      args: { checkpointTime: endTime, lpSharePrice: endingLpSharePrice },
    } = checkpointEvents[checkpointEvents.length - 1];

    const endingBlock = await getBlockOrThrow(this.network, {
      blockNumber: toBlock,
    });

    // If the toBlock lands on a checkpoint, we can use the lp share price
    // from the event. Otherwise, we get the price at the toBlock
    if (endTime < endingBlock.timestamp) {
      endTime = endingBlock.timestamp;
      const { lpSharePrice } = await this.getPoolInfo({
        blockNumber: toBlock,
      });
      endingLpSharePrice = lpSharePrice;
    }

    const lpApy = calculateLpApy({
      startingLpSharePrice,
      endingLpSharePrice,
      timeFrame: endTime - startTime,
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

  async getAllOpenLongs({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{ id: bigint; value: bigint; from: `0x${string}` }[]> {
    const toBlock = getBlockFromReadOptions(options);

    const allTransferSingleEvents = await this.contract.getEvents(
      "TransferSingle",
      {
        filter: { to: account },
        toBlock,
      },
    );
    const allLongEvents = allTransferSingleEvents.filter((event) => {
      const { assetType } = decodeAssetFromTransferSingleEventData(
        event.data as `0x${string}`,
      );
      return assetType === "LONG";
    });

    const closedLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      toBlock,
    });

    const allLongEventsFiltered = allLongEvents.filter((event) => {
      return !closedLongEvents.some(
        (closedLong) => closedLong.args.assetId === event.args.id,
      );
    });
    const combinedOpenLongs: {
      id: bigint;
      value: bigint;
      from: `0x${string}`;
    }[] = [];
    allLongEventsFiltered.forEach((event) => {
      const index = combinedOpenLongs.findIndex(
        (long) => long.id === event.args.id,
      );
      if (index === -1) {
        combinedOpenLongs.push({
          id: event.args.id,
          value: event.args.value,
          from: event.args.from,
        });
      } else {
        combinedOpenLongs[index].value += event.args.value;
      }
    });
    return combinedOpenLongs.map((event) => {
      return {
        id: event.id,
        value: event.value,
        from: event.from,
      };
    });
  }

  async getOpenLongDetails({
    assetId,
  }: {
    assetId: bigint;
  }): Promise<Long | undefined> {
    const decimals = await this.getDecimals();
    const openLongEvent = await this.contract.getEvents("OpenLong", {
      filter: { assetId: assetId },
    });

    if (!openLongEvent) {
      return undefined;
    }
    const long: Long = {
      assetId: openLongEvent[0].args.assetId,
      maturity: openLongEvent[0].args.maturityTime,
      baseAmountPaid: 0n,
      bondAmount: 0n,
    };
    const baseAmount = openLongEvent[0].args.asBase
      ? openLongEvent[0].args.amount
      : convertSharesToBase({
          sharesAmount: openLongEvent[0].args.amount,
          vaultSharePrice: openLongEvent[0].args.vaultSharePrice,
          decimals,
        });
    return {
      ...long,
      baseAmountPaid: long.baseAmountPaid - baseAmount,
      bondAmount: long.bondAmount - openLongEvent[0].args.bondAmount,
    };
  }

  /**
   * @deprecated Use ReadHyperdrive.getAllLongs instead to retrieve all longs opened or received by a user.
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

    const decimals = await this.getDecimals();
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
        checkpointTime: getCheckpointTime(timestamp, checkpointDuration),
        // The openedTimestamp will always reflect the latest short, if you open
        // twice in the same checkpoint
        openedTimestamp: timestamp,
        baseAmountPaid: 0n,
        bondAmount: 0n,
        baseProceeds: 0n,
        fixedRatePaid: 0n,
      };

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
          checkpointTime: getCheckpointTime(timestamp, checkpointDuration),
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
    const checkpointExposure = await this.getCheckpointExposure({ options });
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      options,
    });

    const stringifiedPoolInfo = convertBigIntsToStrings(poolInfo);
    const stringifiedPoolConfig = convertBigIntsToStrings(poolConfig);

    const maxBondsOut = BigInt(
      hyperwasm.maxShort(
        stringifiedPoolInfo,
        stringifiedPoolConfig,
        MAX_UINT256.toString(),
        openSharePrice.toString(),
        checkpointExposure.toString(),
      ),
    );
    const maxBaseIn = BigInt(
      hyperwasm.calcOpenShort(
        stringifiedPoolInfo,
        stringifiedPoolConfig,
        maxBondsOut.toString(),
        openSharePrice.toString(),
      ),
    );
    const maxSharesIn = await this.convertToShares({
      baseAmount: maxBaseIn,
      options,
    });

    return {
      maxBaseIn,
      maxSharesIn,
      maxBondsOut,
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
    const checkpointExposure = await this.getCheckpointExposure({ options });

    const stringifiedPoolInfo = convertBigIntsToStrings(poolInfo);
    const stringifiedPoolConfig = convertBigIntsToStrings(poolConfig);

    const maxBaseIn = BigInt(
      hyperwasm.maxLong(
        stringifiedPoolInfo,
        stringifiedPoolConfig,
        MAX_UINT256.toString(),
        checkpointExposure.toString(),
      ),
    );

    const maxSharesIn = await this.convertToShares({
      baseAmount: maxBaseIn,
      options,
    });

    const maxBondsOut = BigInt(
      hyperwasm.calcOpenLong(
        stringifiedPoolInfo,
        stringifiedPoolConfig,
        maxBaseIn.toString(),
      ),
    );

    return {
      maxBaseIn,
      maxSharesIn,
      maxBondsOut,
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

    if (!lpShareBalance) {
      return {
        lpShareBalance,
        baseAmountPaid,
        baseValue: 0n,
        sharesValue: 0n,
      };
    }

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

    // Note: we don't pass in the options here because we want the current
    // prices that were used in the previewRemoveLiquidity call.
    const proceedsBaseValue = await this.convertToBase({
      sharesAmount: proceeds,
    });

    // convert the withdrawal shares into base using lpSharePrice
    const { lpSharePrice } = await this.getPoolInfo();
    const withdrawalSharesBaseValue = dnum.multiply(
      [lpSharePrice, decimals],
      [withdrawalShares, decimals],
    )[0];
    const withdrawalSharesSharesValue = await this.convertToShares({
      baseAmount: withdrawalSharesBaseValue,
    });

    return {
      lpShareBalance,
      baseAmountPaid,
      baseValue: proceedsBaseValue + withdrawalSharesBaseValue,
      sharesValue: proceeds + withdrawalSharesSharesValue,
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
        lpShareBalance += event.args.lpAmount;
        baseAmountPaid += baseAmount;
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
        lpShareBalance -= event.args.lpAmount;
        baseAmountPaid -= baseAmount;
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
    const checkpointTime = await this.getCheckpointTime({ options });

    // calcOpenLong only accepts base, so if the user is depositing shares we
    // need to convert that value to base before we can preview the trade for them
    let depositAmountConvertedToBase = amountIn;
    if (!asBase) {
      depositAmountConvertedToBase = await this.convertToBase({
        sharesAmount: amountIn,
        options,
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
      [BigInt(1e18) - spotPriceAfterOpen, 18],
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
      maturityTime: checkpointTime + poolConfig.positionDuration,
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
    const latestCheckpoint = await this.getCheckpoint({ options });

    const baseDepositAmount = BigInt(
      hyperwasm.calcOpenShort(
        convertBigIntsToStrings(poolInfo),
        convertBigIntsToStrings(poolConfig),
        amountOfBondsToShort.toString(),
        latestCheckpoint.vaultSharePrice.toString(),
      ),
    );

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
      [BigInt(1e18) - spotPriceAfterOpen, 18],
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
      ),
    );

    if (asBase) {
      return {
        maturityTime:
          latestCheckpoint.checkpointTime + poolConfig.positionDuration,
        traderDeposit: baseDepositAmount,
        spotPriceAfterOpen,
        spotRateAfterOpen,
        curveFee: curveFeeInBase,
      };
    }

    return {
      maturityTime:
        latestCheckpoint.checkpointTime + poolConfig.positionDuration,
      traderDeposit: await this.convertToShares({
        baseAmount: baseDepositAmount,
        options,
      }),
      spotPriceAfterOpen,
      spotRateAfterOpen,
      curveFee: await this.convertToShares({
        baseAmount: curveFeeInBase,
        options,
      }),
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
  }): Promise<{ amountOut: bigint; flatPlusCurveFee: bigint }> {
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
    const flatPlusCurveFee = flatFeeInShares + curveFeeInShares;

    const amountOutInShares = BigInt(
      hyperwasm.calcCloseLong(
        convertBigIntsToStrings(info),
        convertBigIntsToStrings(config),
        bondAmountIn.toString(),
        maturityTime.toString(),
        currentTime.toString(),
      ),
    );

    if (!asBase) {
      return {
        amountOut: amountOutInShares,
        flatPlusCurveFee,
      };
    }

    return {
      amountOut: await this.convertToBase({
        sharesAmount: amountOutInShares,
        options,
      }),
      flatPlusCurveFee: await this.convertToBase({
        sharesAmount: flatPlusCurveFee,
        options,
      }),
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
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      options,
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
    const flatPlusCurveFee = flatFeeInShares + curveFeeInShares;

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

    if (!asBase) {
      return {
        amountOut: amountOutInShares,
        flatPlusCurveFee,
      };
    }

    return {
      amountOut: await this.convertToBase({
        sharesAmount: amountOutInShares,
        options,
      }),
      flatPlusCurveFee: await this.convertToBase({
        sharesAmount: flatPlusCurveFee,
        options,
      }),
    };
  }

  /**
   * Predicts the amount of LP shares a user will receive when adding liquidity.
   */
  async previewAddLiquidity({
    contribution,
    minAPR,
    minLpSharePrice,
    maxAPR,
    asBase,
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
    const decimals = await this.getDecimals();
    const lpSharesOutInBase = dnum.multiply(
      [lpSharesOut, decimals],
      [poolInfo.lpSharePrice, decimals],
    )[0];
    const valueOfLpShares = asBase
      ? lpSharesOutInBase
      : await this.convertToShares({
          baseAmount: lpSharesOutInBase,
          options,
        });

    return {
      lpSharesOut,
      slippagePaid: contribution - valueOfLpShares,
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

    return {
      asBase,
      baseProceeds: asBase
        ? proceeds
        : await this.convertToBase({ sharesAmount: proceeds }),
      sharesProceeds: asBase
        ? await this.convertToShares({ baseAmount: proceeds })
        : proceeds,
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
  startingLpSharePrice,
  endingLpSharePrice,
  timeFrame,
}: {
  startingLpSharePrice: bigint;
  endingLpSharePrice: bigint;
  timeFrame: bigint;
}): number {
  const priceRatio = dnum.toNumber(
    dnum.div([endingLpSharePrice, 18], [startingLpSharePrice, 18]),
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
