import {
  Address,
  Block,
  BlockTag,
  ContractEvent,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  MergeKeys,
  ReadContract,
} from "@delvtech/drift";
import { HyperdriveSdkError } from "src/HyperdriveSdkError";
import { assertNever } from "src/base/assertNever";
import { calculateAprFromPrice } from "src/base/calculateAprFromPrice";
import { MAX_UINT256, NULL_BYTES, SECONDS_PER_YEAR } from "src/base/constants";
import { ReadContractClientOptions } from "src/drift/ContractClient";
import { ReadClient } from "src/drift/ReadClient";
import { getBlockOrThrow } from "src/drift/getBlockOrThrow";
import { fixed } from "src/fixed-point";
import { HyperdriveAbi, hyperdriveAbi } from "src/hyperdrive/abi";
import { decodeAssetFromTransferSingleEventData } from "src/hyperdrive/assetId/decodeAssetFromTransferSingleEventData";
import { getCheckpointTime } from "src/hyperdrive/checkpoint/getCheckpointTime";
import {
  Checkpoint,
  CheckpointEvent,
  GetCheckpointParams,
  GetCheckpointTimeParams,
} from "src/hyperdrive/checkpoint/types";
import { MAX_ITERATIONS } from "src/hyperdrive/constants";
import {
  ClosedLong,
  Long,
  OpenLongPositionReceivedWithoutDetails,
} from "src/hyperdrive/longs/types";
import { ClosedLpShares } from "src/hyperdrive/lp/ClosedLpShares";
import { LP_ASSET_ID } from "src/hyperdrive/lp/assetId";
import { calculateShortAccruedYield } from "src/hyperdrive/shorts/calculateShortAccruedYield";
import { ClosedShort, OpenShort } from "src/hyperdrive/shorts/types";
import { MarketState, PoolConfig, PoolInfo } from "src/hyperdrive/types";
import { RedeemedWithdrawalShares } from "src/hyperdrive/withdrawalShares/RedeemedWithdrawalShares";
import { WITHDRAW_SHARES_ASSET_ID } from "src/hyperdrive/withdrawalShares/assetId";
import { hyperwasm } from "src/hyperwasm";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadEth } from "src/token/eth/ReadEth";

export interface ReadHyperdriveOptions extends ReadContractClientOptions {}

export class ReadHyperdrive extends ReadClient {
  readonly address: Address;
  readonly contract: ReadContract<HyperdriveAbi>;

  /**
   * @hidden
   */
  constructor({
    debugName = "Hyperdrive",
    address,
    cache,
    cacheNamespace,
    drift,
    ...rest
  }: ReadHyperdriveOptions) {
    super({ debugName, drift, ...rest });
    this.address = address;
    this.contract = this.drift.contract({
      abi: hyperdriveAbi,
      address,
      cache,
      cacheNamespace,
    });
  }

  async getKind(): Promise<string> {
    return this.contract.read("kind");
  }

  async getVersion(): Promise<{
    major: number;
    minor: number;
    patch: number;
    string: string;
  }> {
    const string = await this.contract.read("version");
    const [major, minor, patch] = string
      .replace(/^\D*/, "")
      .split(".")
      .map((num) => parseInt(num));

    return {
      major,
      minor,
      patch,
      string,
    };
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
          drift: this.drift,
        })
      : new ReadErc20({
          address,
          drift: this.drift,
          cache: this.contract.cache,
          cacheNamespace: this.contract.cacheNamespace,
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
      drift: this.drift,
      cache: this.contract.cache,
      cacheNamespace: this.contract.cacheNamespace,
    });
  }

  getDecimals(): Promise<number> {
    return this.contract.read("decimals");
  }

  /**
   * Convert an amount of shares to base tokens using the current vault share price.
   */
  async convertToBase({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "convertToBase",
      {
        _shareAmount: sharesAmount,
      },
      options,
    );
  }

  /**
   * Convert an amount of base tokens to shares using the current vault share price.
   */
  async convertToShares({
    baseAmount,
    options,
  }: {
    baseAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "convertToShares",
      {
        _baseAmount: baseAmount,
      },
      options,
    );
  }

  async getInitializationBlock(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<Block> {
    const events = await this.contract.getEvents("Initialize", options);

    if (!events.length || events[0].blockNumber === undefined) {
      throw new HyperdriveSdkError(
        "Pool has not been initialized, no block found.",
      );
    }
    const blockNumber = events[0].blockNumber;

    return getBlockOrThrow(this.drift, { blockNumber });
  }

  /**
   * Get a standardized variable rate using vault share prices from blocks in
   * the last `timeRange` seconds.
   *
   * Note: This function will throw an error if the pool was deployed within the
   * last `timeRange` seconds.
   *
   * See Agent0 for calculation:
   * https://github.com/delvtech/agent0/blob/854e9392e09898e65aeed0040c5e648c8d3d1380/src/agent0/ethpy/hyperdrive/interface/read_interface.py#L421
   *
   * @param blockRange The block range (in blocks) to use to calculate the variable rate.
   */
  async getYieldSourceRate({
    blockRange,
    options,
  }: {
    blockRange: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const currentBlock = await getBlockOrThrow(this.drift, options);
    // Clamp the start block to the pool's initialization block if the
    // blockRange is too big.
    let startBlockNumber = currentBlock.blockNumber! - blockRange;
    const { blockNumber: initializationBlock } =
      await this.getInitializationBlock();
    if (initializationBlock && initializationBlock > startBlockNumber) {
      startBlockNumber = initializationBlock;
    }

    // NOTE: Cloudchain will throw an error if the block number is too far back
    // in history.
    const startBlock = await getBlockOrThrow(this.drift, {
      blockNumber: startBlockNumber,
    });

    // Get the info from fromBlock to get the starting vault share price
    const { vaultSharePrice: startVaultSharePrice } = await this.getPoolInfo({
      block: startBlockNumber,
    });

    // Get the current vaultSharePrice from the latest pool info
    const { vaultSharePrice: currentVaultSharePrice } =
      await this.getPoolInfo(options);

    const timeFrame = currentBlock.timestamp - startBlock.timestamp; // bigint

    const vaultApy = calculateApyFromPrice({
      startPrice: startVaultSharePrice,
      endPrice: currentVaultSharePrice,
      timeFrame,
    });

    return vaultApy;
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
   * A protected version of `ReadHyperdrive.getCheckpointTime` with
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

    // If no timestamp is provided, try to get one from the block number
    if (timestamp === undefined) {
      // Default to the block from read options
      const getBlockOptions = blockNumber ? { blockNumber } : options;
      const block = await getBlockOrThrow(this.drift, getBlockOptions);
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
        options,
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
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    return hyperwasm.spotRate({ poolConfig, poolInfo });
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
    // just use the current vault share price.
    let { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      timestamp,
    });
    if (!openVaultSharePrice) {
      openVaultSharePrice = (await this.getPoolInfo()).vaultSharePrice;
    }

    return hyperwasm.calcImpliedRate({
      poolInfo,
      poolConfig,
      bondAmount,
      openVaultSharePrice,
      variableApy,
    });
  }

  /**
   * Gets the market liquidity available for trading and removing LP.
   */
  async getIdleLiquidity(options?: ContractReadOptions): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    return hyperwasm.idleShareReservesInBase({ poolInfo, poolConfig });
  }

  /**
   * Gets the total present value of the pool in base.
   * @param options
   * @returns
   */
  async getPresentValue(options?: ContractReadOptions): Promise<bigint> {
    //  presentValueInShares 33997119981629446n
    //  Start block: {blockNumber: 20486359n, timestamp: 1723150091n}
    //  Start vault share price: 1015896019620210959n
    //  Current vault share price: 1017273050693203130n
    //  Time frame: 1203624n
    //  Vault APY: 36128140020150719n
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const presentValueInShares = hyperwasm.presentValue({
      poolInfo,
      poolConfig,
      currentTime: BigInt(Date.now()) / 1000n,
    });

    return this.convertToBase({
      sharesAmount: presentValueInShares,
      options,
    });
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
    // Get the vault share price when the short was opened
    let { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      checkpointTime,
      options,
    });

    const { positionDuration } = await this.getPoolConfig(options);
    const maturityTime = checkpointTime + positionDuration;
    const latestCheckpointTime = await this.getCheckpointTime({ options });
    const isMatured = latestCheckpointTime >= maturityTime;

    // If the short is mature, get the vault share price at maturity
    let endingVaultSharePrice;
    if (isMatured) {
      const checkpointAtMaturity = await this.getCheckpoint({
        checkpointTime: maturityTime,
        options,
      });
      endingVaultSharePrice = checkpointAtMaturity.vaultSharePrice;
    } else {
      // Otherwise get the current vault share price
      const poolInfo = await this.getPoolInfo(options);
      endingVaultSharePrice = poolInfo.vaultSharePrice;
      // Also check if the latest checkpoint was minted
      const checkpointIsMinted = openVaultSharePrice != 0n;
      // If not, this tx will mint it and set its vaultSharePrice
      if (!checkpointIsMinted) {
        openVaultSharePrice = poolInfo.vaultSharePrice;
      }
    }

    return calculateShortAccruedYield({
      openVaultSharePrice,
      endingVaultSharePrice,
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
    const longEvents = await this.getLongEvents({
      fromBlock,
      toBlock,
    });
    const shortEvents = await this.getShortEvents({
      fromBlock,
      toBlock,
    });

    const longVolume = longEvents.reduce(
      (sum, { bondAmount }) => sum + bondAmount,
      0n,
    );
    const shortVolume = shortEvents.reduce(
      (sum, { bondAmount }) => sum + bondAmount,
      0n,
    );
    return {
      longVolume,
      shortVolume,
      totalVolume: longVolume + shortVolume,
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

    return hyperwasm.spotPrice({ poolConfig, poolInfo });
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
    return [...openLongEvents, ...closeLongEvents]
      .map(({ args, eventName, blockNumber, transactionHash }) => {
        const baseAmount = args.asBase
          ? args.amount
          : fixed(args.amount).mul(args.vaultSharePrice).bigint;
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
    return [...openShortEvents, ...closeShortEvents]
      .map(({ args, eventName, blockNumber, transactionHash }) => {
        const baseAmount = args.asBase
          ? args.amount
          : fixed(args.amount).mul(args.vaultSharePrice).bigint;
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
    addLiquidity: ContractEvent<HyperdriveAbi, "AddLiquidity">[];
    removeLiquidity: ContractEvent<HyperdriveAbi, "RemoveLiquidity">[];
    redeemWithdrawalShares: ContractEvent<
      HyperdriveAbi,
      "RedeemWithdrawalShares"
    >[];
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
   *
   * r = (p_1 / p_0) ^ (1 / t) - 1
   */
  async getLpApy({
    fromBlock,
    options,
  }: {
    fromBlock: bigint;
    options?: ContractReadOptions;
  }): Promise<{ lpApy: bigint }> {
    // If the 24 hour rate doesn't exist, assume the pool was initialized less
    // than 24 hours before and try to get the all-time rate until toBlock
    const { blockNumber: initializationBlock } =
      await this.getInitializationBlock();
    if (initializationBlock && initializationBlock > fromBlock) {
      fromBlock = initializationBlock;
    }

    // Attempt to fetch the blocks first to fail early if the block is not found
    const currentBlock = await getBlockOrThrow(this.drift, options);
    const startBlock = await getBlockOrThrow(this.drift, {
      blockNumber: fromBlock,
    });

    // Get the info from fromBlock to get the starting lp share price
    const { lpSharePrice: startLpSharePrice } = await this.getPoolInfo({
      block: fromBlock,
    });

    // Get the current lpSharePrice from the latest pool info
    const { lpSharePrice: currentLpSharePrice } = await this.getPoolInfo();

    const timeFrame = currentBlock.timestamp - startBlock.timestamp;

    const lpApy = calculateApyFromPrice({
      startPrice: startLpSharePrice,
      endPrice: currentLpSharePrice,
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
  }: {
    openLongEvents: ContractEvent<HyperdriveAbi, "OpenLong">[];
    closeLongEvents: ContractEvent<HyperdriveAbi, "CloseLong">[];
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
        : fixed(event.args.amount).mul(event.args.vaultSharePrice).bigint;

      switch (event.eventName) {
        case "OpenLong":
          openLongs[assetId] = {
            ...long,
            baseAmountPaid: long.baseAmountPaid + baseAmount,
            bondAmount: long.bondAmount + event.args.bondAmount,
          };
          return;

        case "CloseLong":
          // If a user closes their whole position, we should remove the whole
          // position since it's basically starting over
          if (event.args.bondAmount === long.bondAmount) {
            delete openLongs[assetId];
          } else {
            // otherwise just subtract the amount of bonds they closed and baseAmount
            // they received back from the running total
            openLongs[assetId] = {
              ...long,
              baseAmountPaid: long.baseAmountPaid - baseAmount,
              bondAmount: long.bondAmount - event.args.bondAmount,
            };
          }
          return;

        default:
          assertNever(event, true);
      }
    });

    return Object.values(openLongs).filter((long) => long.bondAmount);
  }

  // TODO: Rename this to getOpenLongs once this function replaces the existing getOpenLongs
  async getOpenLongPositions({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<OpenLongPositionReceivedWithoutDetails[]> {
    const transfersReceived = await this.contract.getEvents("TransferSingle", {
      filter: { to: account },
      toBlock: options?.block,
    });
    console.log("transfersReceived", transfersReceived.length);

    const transfersSent = await this.contract.getEvents("TransferSingle", {
      filter: { from: account },
      toBlock: options?.block,
    });
    console.log("transfersSent", transfersSent.length);

    const longsReceived = transfersReceived.filter((event) => {
      const { assetType, timestamp, assetPrefix } =
        decodeAssetFromTransferSingleEventData(event.data as `0x${string}`);
      return assetType === "LONG";
    });

    // log the latest event

    const longsSent = transfersSent.filter((event) => {
      const { assetType, timestamp, assetPrefix } =
        decodeAssetFromTransferSingleEventData(event.data as `0x${string}`);
      return assetType === "LONG";
    });

    // Put open and long events in block order. We spread openLongEvents first
    // since you have to open a long before you can close one.
    const orderedLongEvents = [...longsReceived, ...longsSent].sort(
      (a, b) => Number(a.blockNumber) - Number(b.blockNumber),
    );

    const openLongs: Record<string, OpenLongPositionReceivedWithoutDetails> =
      {};

    orderedLongEvents.forEach((event) => {
      const assetId = event.args.id.toString();

      const long: OpenLongPositionReceivedWithoutDetails = openLongs[
        assetId
      ] || {
        assetId: event.args.id,
        maturity: decodeAssetFromTransferSingleEventData(
          event.data as `0x${string}`,
        ).timestamp,
        value: 0n,
      };

      const isLongReceived = event.args.to === account;
      if (isLongReceived) {
        const updatedLong: OpenLongPositionReceivedWithoutDetails = {
          ...long,
          value: long.value + event.args.value,
        };
        openLongs[assetId] = updatedLong;
        return;
      }

      const isLongSent = event.args.from === account;
      if (isLongSent) {
        // If a user closes their whole position, we should remove the whole
        // position since it's basically starting over
        if (event.args.value === long.value) {
          // TODO: Could this be keeping the net from going negative, causing
          // the diff to be inflated since all neg values are swallowed up?
          delete openLongs[assetId];
          return;
        }

        // otherwise just subtract the amount of bonds they closed and baseAmount
        // they received back from the running total
        const updatedLong: OpenLongPositionReceivedWithoutDetails = {
          ...long,
          value: long.value - event.args.value,
        };

        openLongs[assetId] = updatedLong;
      }
    });

    return Object.values(openLongs);
    // return Object.values(openLongs).filter((long) => long.value);
  }

  async getOpenLongDetails({
    assetId,
    account,
    options,
  }: {
    assetId: bigint;
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<Long | undefined> {
    const allLongPositions = await this.getOpenLongPositions({
      account,
      options,
    });
    const longPosition = allLongPositions.find((p) => p.assetId === assetId);

    if (!longPosition) {
      throw new HyperdriveSdkError(
        `No position with asset id: ${assetId} found for account ${account}`,
      );
    }

    const openLongEvents = await this.contract.getEvents("OpenLong", {
      filter: { trader: account, assetId },
    });
    const closeLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account, assetId },
    });

    // Get transfers to zap
    const zapAddress = "0x6662a80a8d2DEA71065Cb38eE8B931dB0105d666";
    const transfersSentToZapContract = await this.contract.getEvents(
      "TransferSingle",
      {
        filter: {
          from: account,
          to: zapAddress,
        },
        toBlock: options?.block,
      },
    );

    // Get zap close events not accounted for
    if (transfersSentToZapContract.length) {
      const accountTransactionHashes = transfersSentToZapContract.map(
        ({ transactionHash }) => transactionHash,
      );

      const allZapClosesInRange = await this.contract.getEvents("CloseLong", {
        filter: {
          trader: zapAddress,
          assetId,
        },
        fromBlock: transfersSentToZapContract[0].blockNumber,
        toBlock: transfersSentToZapContract.at(-1)?.blockNumber,
      });

      // Only return those that were done in the same transaction as the
      // account's transfers
      const zapClosesForAccount = allZapClosesInRange.filter(
        ({ transactionHash }) =>
          accountTransactionHashes.includes(transactionHash as `0x${string}`),
      );

      for (const missingEvent of zapClosesForAccount) {
        closeLongEvents.push(missingEvent);
      }
    }

    // Calculate net values for each open long
    const calculatedLongs = this._calcOpenLongs({
      openLongEvents,
      closeLongEvents,
    });

    // The events were filtered by assetId, so there should only be one long.
    return calculatedLongs[0];
  }
  /**
   * @deprecated Use ReadHyperdrive.getOpenLongPositions and ReadHyperdrive.getOpenLongDetails instead to retrieve all longs opened or received by a user.
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
    const openLongEvents = await this.contract.getEvents("OpenLong", {
      filter: { trader: account },
      toBlock: options?.block,
    });
    const closeLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      toBlock: options?.block,
    });

    return this._calcOpenLongs({
      openLongEvents,
      closeLongEvents,
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
    const { checkpointDuration, positionDuration } =
      await this.getPoolConfig(options);

    const openShortEvents = await this.contract.getEvents("OpenShort", {
      filter: { trader: account },
      toBlock: options?.block,
    });
    const closeShortEvents = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      toBlock: options?.block,
    });

    return this._calcOpenShorts({
      hyperdriveAddress: this.address,
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
    openShortEvents: ContractEvent<typeof hyperdriveAbi, "OpenShort">[];
    closeShortEvents: ContractEvent<typeof hyperdriveAbi, "CloseShort">[];
  }): Promise<OpenShort[]> {
    // Put open and short events in block order. We spread openShortEvents first
    // since you have to open a short before you can close one.
    const orderedShortEvents = [...openShortEvents, ...closeShortEvents].sort(
      (a, b) => Number(a.blockNumber) - Number(b.blockNumber),
    );

    const openShorts: Record<string, OpenShort> = {};

    for (const event of orderedShortEvents) {
      const assetId = event.args.assetId.toString();
      const { timestamp } = await getBlockOrThrow(this.drift, {
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
        : fixed(event.args.amount).mul(event.args.vaultSharePrice).bigint;

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
          assertNever(eventName, true);
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
    const closedLongs = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      toBlock: options?.block,
    });

    const closedLongsList: ClosedLong[] = await Promise.all(
      closedLongs.map(async (event) => {
        const assetId = event.args.assetId;

        const baseAmount = event.args.asBase
          ? event.args.amount
          : fixed(event.args.amount).mul(event.args.vaultSharePrice).bigint;

        return {
          assetId,
          bondAmount: event.args.bondAmount,
          baseAmount,
          baseAmountPaid: 0n, // TODO: Remove this field, this is copy/paste from @hyperdrive/queries
          maturity: event.args.maturityTime,
          closedTimestamp: (
            await getBlockOrThrow(this.drift, {
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
    const closedShorts = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      toBlock: options?.block,
    });

    const { checkpointDuration } = await this.getPoolConfig(options);
    const closedShortsList: ClosedShort[] = await Promise.all(
      closedShorts.map(async (event) => {
        const { assetId, maturityTime } = event.args;
        const { timestamp } = await getBlockOrThrow(this.drift, {
          blockNumber: event.blockNumber,
        });

        const baseAmount = event.args.asBase
          ? event.args.amount
          : fixed(event.args.amount).mul(event.args.vaultSharePrice).bigint;

        return {
          hyperdriveAddress: this.address,
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
  async getMaxShort({
    budget,
    options,
  }: {
    budget: bigint;
    options?: ContractReadOptions;
  }): Promise<{
    maxBaseIn: bigint;
    maxSharesIn: bigint;
    maxBondsOut: bigint;
  }> {
    const poolInfo = await this.getPoolInfo(options);
    const poolConfig = await this.getPoolConfig(options);
    const checkpointExposure = await this.getCheckpointExposure({ options });
    const { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      options,
    });

    const maxBondsOut = hyperwasm.maxShort({
      budget,
      poolInfo,
      poolConfig,
      maxIterations: MAX_ITERATIONS,
      openVaultSharePrice,
      checkpointExposure,
    });

    const maxBaseIn = hyperwasm.calcOpenShort({
      poolInfo,
      poolConfig,
      bondAmount: maxBondsOut,
      openVaultSharePrice,
    });
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

    const maxBaseIn = hyperwasm.maxLong({
      poolInfo,
      poolConfig,
      budget: MAX_UINT256,
      checkpointExposure,
    });

    const maxSharesIn = await this.convertToShares({
      baseAmount: maxBaseIn,
      options,
    });

    const maxBondsOut = hyperwasm.calcOpenLong({
      poolInfo,
      poolConfig,
      baseAmount: maxBaseIn,
    });

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
    // TODO: Remove asBase parameter when we can use hyperwasm to calculate the
    // preview remove liquidity
    asBase,
    options,
  }: {
    asBase: boolean;
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{
    lpShareBalance: bigint;
    baseAmountPaid: bigint;
    baseValue: bigint;
    sharesValue: bigint;
  }> {
    const addLiquidityEvents = await this.contract.getEvents("AddLiquidity", {
      filter: { provider: account },
      toBlock: options?.block,
    });
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      {
        filter: { provider: account },
        toBlock: options?.block,
      },
    );

    const decimals = await this.getDecimals();
    const { lpShareBalance, baseAmountPaid } = this._calcOpenLpPosition({
      addLiquidityEvents,
      removeLiquidityEvents,
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
      asBase,
      destination: account,
    });

    // Note: we don't pass in the options here because we want the current
    // prices that were used in the previewRemoveLiquidity call.
    const proceedsBaseValue = asBase
      ? proceeds
      : await this.convertToBase({
          sharesAmount: proceeds,
        });

    // convert the withdrawal shares into base using lpSharePrice
    const { lpSharePrice } = await this.getPoolInfo();
    const withdrawalSharesBaseValue = fixed(lpSharePrice, decimals).mul(
      withdrawalShares,
      decimals,
    ).bigint;
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
  }: {
    addLiquidityEvents: ContractEvent<typeof hyperdriveAbi, "AddLiquidity">[];
    removeLiquidityEvents: ContractEvent<
      typeof hyperdriveAbi,
      "RemoveLiquidity"
    >[];
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
        : fixed(event.args.amount).mul(event.args.vaultSharePrice).bigint;

      switch (event.eventName) {
        case "AddLiquidity":
          lpShareBalance += event.args.lpAmount;
          baseAmountPaid += baseAmount;
          return;

        case "RemoveLiquidity": {
          lpShareBalance -= event.args.lpAmount;

          // If a user removes all their lp shares, we should zero out
          // baseAmountPaid, since it's basically starting over
          if (lpShareBalance <= 0n) {
            baseAmountPaid = 0n;
          } else {
            // Include the base value of withdrawal shares received when
            // recalculating baseAmountPaid.
            const withdrawalSharesBaseValue = fixed(
              event.args.withdrawalShareAmount,
            ).mul(event.args.lpSharePrice).bigint;
            baseAmountPaid =
              baseAmountPaid - baseAmount - withdrawalSharesBaseValue;
          }
          return;
        }

        default:
          assertNever(event, true);
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
        toBlock: options?.block,
      },
    );
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
          : fixed(args.amount).mul(args.vaultSharePrice).bigint;

        return {
          lpAmount,
          baseAmount,
          withdrawalShareAmount,
          lpSharePrice,
          closedTimestamp: (
            await getBlockOrThrow(this.drift, {
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
        toBlock: options?.block,
      },
    );

    return Promise.all(
      redeemedWithdrawalShareEvents.map(async ({ blockNumber, args }) => {
        const { withdrawalShareAmount, amount, asBase, vaultSharePrice } = args;
        const baseAmount = asBase
          ? args.amount
          : fixed(amount).mul(vaultSharePrice).bigint;

        return {
          hyperdriveAddress: this.address,
          withdrawalShareAmount,
          baseAmount,
          redeemedTimestamp: (
            await getBlockOrThrow(this.drift, { blockNumber })
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

    const spotPriceAfterOpen = hyperwasm.spotPriceAfterLong({
      poolInfo,
      poolConfig,
      baseAmount: depositAmountConvertedToBase,
    });

    const spotRateAfterOpen = hyperwasm.calcAprGivenFixedPrice({
      price: spotPriceAfterOpen,
      positionDuration: poolConfig.positionDuration,
    });

    const bondProceeds = hyperwasm.calcOpenLong({
      poolInfo,
      poolConfig,
      baseAmount: depositAmountConvertedToBase,
    });

    const curveFeeInBonds = hyperwasm.openLongCurveFee({
      poolInfo,
      poolConfig,
      baseAmount: depositAmountConvertedToBase,
    });

    return {
      maturityTime: checkpointTime + poolConfig.positionDuration,
      bondProceeds,
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
    fixedRatePaid: bigint;
  }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const latestCheckpoint = await this.getCheckpoint({ options });
    const accruedYield = await this.getShortAccruedYield({
      checkpointTime: latestCheckpoint.checkpointTime,
      bondAmount: amountOfBondsToShort,
      options,
    });

    const baseDepositAmount = hyperwasm.calcOpenShort({
      poolInfo,
      poolConfig,
      bondAmount: amountOfBondsToShort,
      openVaultSharePrice: latestCheckpoint.vaultSharePrice,
    });

    // Calculation for fixed rate paid. This is the rate the user pays upfront
    // to open a short.
    const fixedTimeRangeInYears = fixed(poolConfig.positionDuration).div(
      SECONDS_PER_YEAR,
    );
    const baseAmountMinusYield = fixed(baseDepositAmount).sub(accruedYield);
    const bondsMinusBaseAmount =
      fixed(amountOfBondsToShort).sub(baseAmountMinusYield);
    const fixedRatePaid = baseAmountMinusYield
      .div(bondsMinusBaseAmount)
      .div(fixedTimeRangeInYears).bigint;

    const spotPriceAfterOpen = hyperwasm.spotPriceAfterShort({
      poolInfo,
      poolConfig,
      bondAmount: amountOfBondsToShort,
    });

    const spotRateAfterOpen = hyperwasm.calcAprGivenFixedPrice({
      price: spotPriceAfterOpen,
      positionDuration: poolConfig.positionDuration,
    });

    const curveFeeInBase = hyperwasm.openShortCurveFee({
      poolInfo,
      poolConfig,
      bondAmount: amountOfBondsToShort,
    });

    if (asBase) {
      return {
        maturityTime:
          latestCheckpoint.checkpointTime + poolConfig.positionDuration,
        traderDeposit: baseDepositAmount,
        spotPriceAfterOpen,
        spotRateAfterOpen,
        curveFee: curveFeeInBase,
        fixedRatePaid,
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
      fixedRatePaid,
    };
  }

  /**
   * Predicts the amount of bonds that can be shorted given a target deposit
   * amount in either base or shares.
   */
  async getShortBondsGivenDeposit({
    amountIn,
    asBase,
    tolerance,
    options,
  }: {
    amountIn: bigint;
    asBase: boolean;
    /**
     * The maximum difference between the target and actual base amount.
     *
     * @default 1e9
     */
    tolerance?: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const latestCheckpoint = await this.getCheckpoint({ options });
    const checkpointExposure = await this.getCheckpointExposure({ options });

    let targetBaseAmount = amountIn;
    if (!asBase) {
      targetBaseAmount = await this.convertToBase({
        sharesAmount: amountIn,
        options,
      });
    }

    const absoluteMaxBondAmount = hyperwasm.absoluteMaxShort({
      poolInfo,
      poolConfig,
      checkpointExposure,
    });

    return hyperwasm.shortBondsGivenDeposit({
      poolInfo,
      poolConfig,
      targetBaseAmount,
      absoluteMaxBondAmount,
      openVaultSharePrice: latestCheckpoint.vaultSharePrice,
      maybeTolerance: tolerance,
    });
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
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const currentTime = BigInt(Math.floor(Date.now() / 1000));

    const flatFeeInShares = hyperwasm.closeLongFlatFee({
      poolInfo,
      poolConfig,
      bondAmount: bondAmountIn,
      maturityTime,
      currentTime,
    });
    const curveFeeInShares = hyperwasm.closeLongCurveFee({
      poolInfo,
      poolConfig,
      bondAmount: bondAmountIn,
      maturityTime,
      currentTime,
    });
    const flatPlusCurveFee = flatFeeInShares + curveFeeInShares;

    const amountOutInShares = hyperwasm.calcCloseLong({
      poolInfo,
      poolConfig,
      bondAmount: bondAmountIn,
      maturityTime,
      currentTime,
    });

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
   * Get a rough estimate of the market value of a short. This can be used to
   * value a position that cannot be fully closed.
   */
  async estimateShortMarketValue({
    maturityTime,
    asBase,
    shortAmountIn,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    // The checkpoint in which this position was opened.
    // This is always maturity time - position duration thanks to mint on demand
    const openCheckpointTimestamp = maturityTime - poolConfig.positionDuration;
    const { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      timestamp: openCheckpointTimestamp,
      options,
    });

    const currentTime = BigInt(Math.floor(Date.now() / 1000));

    // If the position is mature, we use the closing vault share price otherwise
    // use the current vault share price
    let closeVaultSharePrice = poolInfo.vaultSharePrice;
    if (maturityTime <= currentTime) {
      const closingCheckpoint = await this.getCheckpoint({
        timestamp: maturityTime,
        options,
      });
      closeVaultSharePrice = closingCheckpoint.vaultSharePrice;
    }

    const marketEstimateInShares = hyperwasm.calcShortMarketValue({
      poolInfo,
      poolConfig,
      bondAmount: shortAmountIn,
      openVaultSharePrice,
      closeVaultSharePrice,
      maturityTime,
      currentTime,
    });

    if (!asBase) {
      return marketEstimateInShares;
    }

    return this.convertToBase({
      sharesAmount: marketEstimateInShares,
      options,
    });
  }

  /**
   * Predicts the amount of base asset a user will receive when closing a short.
   * If closing the short would result in negative interest, an error will be
   * thrown.
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
  }): Promise<{
    amountOut: bigint;
    flatPlusCurveFee: bigint;
  }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    // The checkpoint in which this position was opened.
    // This is always maturity time - position duration thanks to mint on demand
    const openCheckpointTimestamp = maturityTime - poolConfig.positionDuration;
    const { vaultSharePrice: openVaultSharePrice } = await this.getCheckpoint({
      timestamp: openCheckpointTimestamp,
      options,
    });

    const currentTime = BigInt(Math.floor(Date.now() / 1000));

    // If the position is mature, we use the closing vault share price otherwise
    // use the current vault share price
    let closeVaultSharePrice = poolInfo.vaultSharePrice;
    if (maturityTime <= currentTime) {
      const closingCheckpoint = await this.getCheckpoint({
        timestamp: maturityTime,
        options,
      });
      closeVaultSharePrice = closingCheckpoint.vaultSharePrice;
    }

    const flatFeeInShares = hyperwasm.closeShortFlatFee({
      poolInfo,
      poolConfig,
      bondAmount: shortAmountIn,
      maturityTime,
      currentTime,
    });
    const curveFeeInShares = hyperwasm.closeShortCurveFee({
      poolInfo,
      poolConfig,
      bondAmount: shortAmountIn,
      maturityTime,
      currentTime,
    });
    const flatPlusCurveFee = flatFeeInShares + curveFeeInShares;

    const amountOutInShares = hyperwasm.calcCloseShort({
      poolInfo,
      poolConfig,
      bondAmount: shortAmountIn,
      openVaultSharePrice,
      closeVaultSharePrice,
      maturityTime,
      currentTime,
    });

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
    minApr,
    minLpSharePrice,
    maxApr,
    asBase,
    options,
  }: {
    contribution: bigint;
    minApr: bigint;
    minLpSharePrice: bigint;
    maxApr: bigint;
    destination: `0x${string}`;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const lpSharesOut = hyperwasm.calcAddLiquidity({
      poolInfo,
      poolConfig,
      currentTime,
      contribution,
      asBase,
      minLpSharePrice,
      minApr: minApr,
      maxApr: maxApr,
    });
    const decimals = await this.getDecimals();

    const lpSharesOutInBase = fixed(lpSharesOut, decimals).mul(
      poolInfo.lpSharePrice,
      decimals,
    ).bigint;
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
   * Predicts the amount of base asset and withdrawal shares a user will receive when removing liquidity.
   */
  async previewRemoveLiquidity({
    lpSharesIn,
    minOutputPerShare,
    destination,
    asBase,
    extraData = NULL_BYTES,
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
    extraData = NULL_BYTES,
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
 * This returns the APY using the following formula for continuous compounding:

 * r = rate of return
 * p_0 = start price
 * p_1 = end price
 * t = term length in fractions of a year
 *
 * r = (p_1 / p_0) ^ (1 / t) - 1
 */
function calculateApyFromPrice({
  startPrice,
  endPrice,
  timeFrame, // seconds
}: {
  startPrice: bigint;
  endPrice: bigint;
  timeFrame: bigint;
}): bigint {
  const priceRatio = fixed(endPrice).div(startPrice);
  const yearFraction = fixed(timeFrame).div(SECONDS_PER_YEAR);
  return priceRatio.pow(fixed(1e18).div(yearFraction)).sub(1e18).bigint;
}
