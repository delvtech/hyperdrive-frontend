import { Address } from "abitype";
import {
  Event,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  Network,
} from "@delvtech/evm-client";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import { IReadHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { ReturnType } from "src/base/ReturnType";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
import { LP_ASSET_ID } from "src/lp/assetId";
import { decodeAssetFromTransferSingleEventData } from "src/pool/decodeAssetFromTransferSingleEventData";
import { ClosedLong, Long } from "src/longs/types";
import { ClosedLpShares } from "src/lp/ClosedLpShares";
import { RedeemedWithdrawalShares } from "src/withdrawalShares/RedeemedWithdrawalShares";
import { ClosedShort, OpenShort } from "src/shorts/types";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { getCheckpointId } from "src/pool/getCheckpointId";
import { WITHDRAW_SHARES_ASSET_ID } from "src/withdrawalShares/assetId";
import { Checkpoint, CheckpointEvent } from "src/pool/Checkpoint";
import { MarketState } from "src/pool/MarketState";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { BlockTag } from "viem";
import * as dnum from "dnum";
import { MAX_UINT256, ZERO_ADDRESS } from "src/base/numbers";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";
import { convertBigIntsToStrings } from "src/base/convertBigIntsToStrings";
import { hyperwasm } from "src/hyperwasm";
import { getBlockOrThrow } from "src/evm-client/getBlockOrThrow";

const HyperdriveABI = IHyperdrive.abi;

export interface ReadHyperdriveOptions {
  contract: IReadHyperdriveContract;
  network: Network;
}

export interface IReadHyperdrive {
  /**
   * Gets the pool's configuration parameters
   */
  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig>;

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   */
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo>;

  /**
   * Gets the pool's fixed APR, i.e. the fixed rate a user locks in when they
   * open a long.
   */
  getSpotRate(options?: ContractReadOptions): Promise<bigint>;

  /**
   * This function retrieves the market liquidity by using the following formula:
   * marketLiquidity = lpSharePrice * effectiveShareReserves - longsOutstanding
   *
   * TODO: We need a better way to get the baseToken.decimals() without the
   * caller having to provide them.
   */
  getLiquidity(args: {
    decimals?: number;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * This  returns the LP APY using the following formula for continuous compounding:
   * r = rate of return
   * p_0 = from lpSharePrice
   * p_1 = to lpSharePrice
   * t = term length in fractions of a year
   * r = ln(p_1 / p_0) / t
   */
  getLpApy(args: {
    fromBlock?: bigint;
    toBlock?: bigint;
  }): Promise<{ lpApy: number }>;

  getCheckpoint(args: {
    checkpointId: bigint;
    options?: ContractReadOptions;
  }): Promise<Checkpoint>;

  getCheckpointExposure(args: {
    checkpointId: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  getCheckpointEvents({
    fromBlock,
    toBlock,
  }: {
    fromBlock?: bigint;
    toBlock?: bigint;
  }): Promise<CheckpointEvent[]>;

  /**
   *
   * This function retrieves the market state. This is helpful for retrieving general market state statistics, such as whether the market has been paused.
   */
  getMarketState(options?: ContractReadOptions): Promise<MarketState>;

  /**
   * Gets the yield accrued on an amount of bonds shorted in a given checkpoint.
   * Note that shorts stop accruing yield once they reach maturity.
   * @param checkpointId - The checkpoint the short was opened in
   * @param bondAmount - The number of bonds shorted
   * @param decimals
   * @param options
   */
  getShortAccruedYield({
    checkpointId,
    bondAmount,
    decimals,
    options,
  }: {
    checkpointId: bigint;
    bondAmount: bigint;
    decimals: number;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Calculates the total trading volume in bonds given a block window.
   * @param options.fromBlock - The start block, defaults to "earliest"
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the total amount of bonds traded
   */
  getTradingVolume(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<{
    totalVolume: bigint;
    longVolume: bigint;
    shortVolume: bigint;
  }>;

  /**
   * Gets the current price of a bond in the pool.
   */
  getLongPrice(options?: ContractReadOptions): Promise<bigint>;

  /**
   * Gets the active longs opened by a specific user.
   */
  getOpenLongs(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<Long[]>;

  /**
   * Gets the active shorts opened by a specific user.
   */
  getOpenShorts(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<OpenShort[]>;

  /**
   * Gets the closed longs by a specific user.
   */
  getClosedLongs(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLong[]>;

  /**
   * Gets the inactive shorts opened by a specific user.
   */
  getClosedShorts(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedShort[]>;

  /**
   * Gets the maximum amount of bonds a user can open a short for.
   */
  getMaxShort(options?: ContractReadOptions): Promise<{
    maxBaseIn: bigint;
    maxBondsOut: bigint;
  }>;

  /**
   * Gets the maximum amount of bonds a user can open a long for.
   */
  getMaxLong(options?: ContractReadOptions): Promise<{
    maxBaseIn: bigint;
    maxBondsOut: bigint;
  }>;

  /**
   * Gets the amount of LP shares a user has.
   */
  getLpShares(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
  getLpSharesTotalSupply(args?: {
    options?: ContractReadOptions;
  }): Promise<bigint>;
  /**
   * Gets the amount of closed LP shares a user has.
   */
  getClosedLpShares(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLpShares[]>;

  /**
   * Gets the amount of withdrawal shares a user has.
   */
  getWithdrawalShares(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Gets the amount of redeemed withdrawal shares a user has.
   */
  getRedeemedWithdrawalShares(args: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<RedeemedWithdrawalShares[]>;

  /**
   * Predicts the amount of base asset a user will receive when closing a long.
   */
  previewCloseLong(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base asset a user will receive when closing a short.
   */
  previewCloseShort(args: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of bonds a user will receive when opening a long.
   */
  previewOpenLong(args: {
    baseAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<{ maturityTime: bigint; bondProceeds: bigint }>;

  /**
   * Predicts the amount of base asset it will cost to open a short.
   */
  previewOpenShort(args: {
    amountOfBondsToShort: bigint;
    options?: ContractReadOptions;
  }): Promise<{ maturityTime: bigint; traderDeposit: bigint }>;

  /**
   * Predicts the amount of LP shares a user will receive when adding liquidity.
   */
  previewAddLiquidity(args: {
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base asset and withdrawlshares a user will receive when removing liquidity.
   */
  previewRemoveLiquidity(args: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options: ContractWriteOptions;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }>;

  /**
   * Predicts the amount of base asset and redeemed shares a user will receive when redeeming withdrawal shares.
   */
  previewRedeemWithdrawalShares(args: {
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options: ContractWriteOptions;
  }): Promise<{ proceeds: bigint; withdrawalSharesRedeemed: bigint }>;

  getLongEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseLong">,
  ): Promise<
    {
      trader: Address;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      eventName: "OpenLong" | "CloseLong";
      blockNumber: bigint | undefined;
    }[]
  >;
  getShortEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseShort">,
  ): Promise<
    {
      trader: Address;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      eventName: "OpenShort" | "CloseShort";
      blockNumber: bigint | undefined;
    }[]
  >;

  getLpEvents(): Promise<
    {
      trader: Address;
      baseAmount: bigint;
      eventName: "AddLiquidity" | "RemoveLiquidity" | "RedeemWithdrawalShares";
      blockNumber: bigint | undefined;
    }[]
  >;
}

export class ReadHyperdrive implements IReadHyperdrive {
  protected readonly contract: IReadHyperdriveContract;
  protected readonly network: Network;

  /**
   * @hidden
   */
  constructor({ contract, network }: ReadHyperdriveOptions) {
    this.contract = contract;
    this.network = network;
  }

  getCheckpoint({
    checkpointId,
    options,
  }: {
    checkpointId: bigint;
    options?: ContractReadOptions | undefined;
  }): ReturnType<IReadHyperdrive, "getCheckpoint"> {
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
    options?: ContractReadOptions | undefined;
  }): ReturnType<IReadHyperdrive, "getCheckpointExposure"> {
    return this.contract.read(
      "getCheckpointExposure",
      { _checkpointTime: checkpointId },
      options,
    );
  }

  getMarketState(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getMarketState"> {
    return this.contract.read("getMarketState", undefined, options);
  }

  getPoolConfig(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getPoolConfig"> {
    return this.contract.read("getPoolConfig", undefined, options);
  }

  getPoolInfo(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getPoolInfo"> {
    return this.contract.read("getPoolInfo", undefined, options);
  }

  async getSpotRate(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getSpotRate"> {
    const config = await this.getPoolConfig(options);
    const info = await this.getPoolInfo(options);

    const aprString = await hyperwasm.getSpotRate(
      convertBigIntsToStrings(info),
      convertBigIntsToStrings(config),
    );

    return BigInt(aprString);
  }

  async getLiquidity({
    decimals = 18,
    options,
  }: {
    decimals?: number;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getLiquidity"> {
    const { lpSharePrice, shareReserves, longsOutstanding, shareAdjustment } =
      await this.getPoolInfo(options);

    const liquidity = calculateLiquidity({
      lpSharePrice,
      shareReserves: calculateEffectiveShareReserves({
        shareReserves,
        shareAdjustment,
      }),
      longsOutstanding,
      decimals,
    });

    return liquidity;
  }

  async getShortAccruedYield({
    checkpointId,
    bondAmount,
    decimals,
    options,
  }: {
    checkpointId: bigint;
    bondAmount: bigint;
    decimals: number;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getShortAccruedYield"> {
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

  async getTradingVolume(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): ReturnType<IReadHyperdrive, "getTradingVolume"> {
    const { fromBlock = "earliest", toBlock = "latest" } = options || {};
    const openLongEvents = await this.getOpenLongEvents({
      fromBlock,
      toBlock,
    });
    const openShortEvents = await this.getOpenShortEvents({
      fromBlock,
      toBlock,
    });

    const longVolume = sumBigInt(
      openLongEvents.map((event) => event.args.bondAmount),
    );

    const shortVolume = sumBigInt(
      openShortEvents.map((event) => event.args.bondAmount),
    );
    return {
      totalVolume: longVolume + shortVolume,
      longVolume,
      shortVolume: shortVolume,
    };
  }

  /**
   * Gets the spot price of a long
   * {@label Get Long Price}
   * @param options - The read options
   * @returns the spot price of a long
   * ```ts
   *   const longPrice = await readHyperdrive.getLongPrice();
   * ```
   *
   */
  async getLongPrice(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getLongPrice"> {
    const poolConfig = await this.getPoolConfig(options);
    const poolInfo = await this.getPoolInfo(options);

    const spotPrice = hyperwasm.getSpotPrice(
      convertBigIntsToStrings(poolInfo),
      convertBigIntsToStrings(poolConfig),
    );

    return BigInt(spotPrice);
  }

  private async getOpenLongEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">,
  ): Promise<Event<typeof HyperdriveABI, "OpenLong">[]> {
    return this.contract.getEvents("OpenLong", options);
  }

  private async getOpenShortEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">,
  ): Promise<Event<typeof HyperdriveABI, "OpenShort">[]> {
    return this.contract.getEvents("OpenShort", options);
  }

  async getLongEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseLong">,
  ): ReturnType<IReadHyperdrive, "getLongEvents"> {
    const openLongEvents = await this.contract.getEvents("OpenLong", options);
    const closeLongEvents = await this.contract.getEvents("CloseLong", options);
    return [...openLongEvents, ...closeLongEvents].map(
      ({ args, eventName, blockNumber }) => {
        return {
          trader: args.trader,
          assetId: args.assetId,
          bondAmount: args.bondAmount,
          baseAmount: args.baseAmount,
          eventName,
          blockNumber,
        };
      },
    );
  }

  async getShortEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseShort">,
  ): ReturnType<IReadHyperdrive, "getShortEvents"> {
    const openShortEvents = await this.contract.getEvents("OpenShort", options);
    const closeShortEvents = await this.contract.getEvents(
      "CloseShort",
      options,
    );
    return [...openShortEvents, ...closeShortEvents].map(
      ({ args, eventName, blockNumber }) => ({
        trader: args.trader,
        assetId: args.assetId,
        bondAmount: args.bondAmount,
        baseAmount: args.baseAmount,
        eventName,
        blockNumber,
      }),
    );
  }
  async getLpEvents(): ReturnType<IReadHyperdrive, "getLpEvents"> {
    const addLiquidtyEvents = await this.contract.getEvents("AddLiquidity");
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
    );
    const redeemWithdrawalSharesEvents = await this.contract.getEvents(
      "RedeemWithdrawalShares",
    );
    return Promise.all(
      [
        ...addLiquidtyEvents,
        ...removeLiquidityEvents,
        ...redeemWithdrawalSharesEvents,
      ].map(async ({ args, eventName, blockNumber }) => ({
        trader: args.provider,
        baseAmount: args.baseAmount,
        eventName,
        blockNumber,
      })),
    );
  }

  async getLpApy({
    fromBlock,
    toBlock,
  }: {
    fromBlock: bigint;
    toBlock: bigint;
  }): ReturnType<IReadHyperdrive, "getLpApy"> {
    const { positionDuration } = await this.getPoolConfig();

    const checkpointEvents = await this.getCheckpointEvents({
      fromBlock,
      toBlock,
    });
    const startingCheckpoint = checkpointEvents[0];
    const endingCheckpoint = checkpointEvents[checkpointEvents.length - 1];
    const days = positionDuration / (24n * 60n * 60n);
    const yearFraction = dnum.div([days, 18], [365n, 18]);
    const toOverFromSharePrice = dnum.div(
      [endingCheckpoint.args.lpSharePrice, 18],
      [startingCheckpoint.args.lpSharePrice, 18],
    );

    const valueToLog = dnum.div(toOverFromSharePrice, yearFraction);
    const lpApy = Math.log(Number(valueToLog[0]));
    return { lpApy };
  }

  private async getTransferSingleEvents({
    filter,
    fromBlock,
    toBlock,
  }: ContractGetEventsOptions<typeof HyperdriveABI, "TransferSingle">) {
    return this.contract.getEvents("TransferSingle", {
      filter,
      fromBlock,
      toBlock,
    });
  }

  async getCheckpointEvents({
    fromBlock,
    toBlock,
  }: {
    fromBlock?: bigint;
    toBlock?: bigint;
  }): ReturnType<IReadHyperdrive, "getCheckpointEvents"> {
    const checkPointEvents = await this.contract.getEvents("CreateCheckpoint", {
      fromBlock,
      toBlock,
    });
    return checkPointEvents;
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
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getOpenLongs"> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const openLongEvents = await this.contract.getEvents("OpenLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    // Paid base
    const totalBasePaidByAssetId = mapValues(
      groupBy(openLongEvents, (event) => event.args.assetId.toString()),
      (events) => {
        const baseAmounts = events.map((event) => {
          const { vaultShareAmount, asBase, baseAmount } = event.args;
          return calculateBaseAmount({ vaultShareAmount, asBase, baseAmount });
        });

        return sumBigInt(baseAmounts);
      },
    );

    const closeLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const totalBaseReceivedByAssetId = mapValues(
      groupBy(closeLongEvents, (event) => event.args.assetId.toString()),
      (events) => {
        const baseAmounts = events.map((event) => {
          const { vaultShareAmount, asBase, baseAmount } = event.args;
          return calculateBaseAmount({ vaultShareAmount, asBase, baseAmount });
        });
        return sumBigInt(baseAmounts);
      },
    );

    const longsMintedOrReceived = (
      await this.getTransferSingleEvents({
        filter: { to: account },
        fromBlock,
        toBlock,
      })
    ).filter(
      (transferSingleEvent) =>
        decodeAssetFromTransferSingleEventData(
          transferSingleEvent.data as `0x${string}`,
        ).assetType === "LONG",
    );

    const longsMintedOrReceivedById = mapValues(
      groupBy(longsMintedOrReceived, (event) => event.args.id),
      (events): Long => {
        const assetId = events[0].args.id;
        const decoded = decodeAssetFromTransferSingleEventData(
          events[0].data as `0x${string}`,
        );
        return {
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.args.value)),
          baseAmountPaid: totalBasePaidByAssetId[assetId.toString()],
          maturity: decoded.timestamp,
        };
      },
    );

    const longsRedeemedOrSent = (
      await this.getTransferSingleEvents({
        filter: { from: account },
        fromBlock,
        toBlock,
      })
    ).filter((transferSingleEvent) => {
      return (
        decodeAssetFromTransferSingleEventData(
          transferSingleEvent.data as `0x${string}`,
        ).assetType === "LONG"
      );
    });

    const longsRedeemedOrSentById = mapValues(
      groupBy(longsRedeemedOrSent, (event) => event.args.id),
      (events): Long => {
        const assetId = events[0].args.id;
        const decoded = decodeAssetFromTransferSingleEventData(
          events[0].data as `0x${string}`,
        );
        return {
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.args.value)),
          baseAmountPaid: totalBaseReceivedByAssetId[assetId.toString()],
          maturity: decoded.timestamp,
        };
      },
    );

    const openLongsById = mapValues(
      longsMintedOrReceivedById,
      (long, key): Long => {
        const matchingExit = longsRedeemedOrSentById[key];
        if (matchingExit) {
          const newBondAmount = long.bondAmount - matchingExit.bondAmount;
          const newBaseAmountPaid =
            long.baseAmountPaid - matchingExit.baseAmountPaid;
          return {
            ...long,
            bondAmount: newBondAmount,
            baseAmountPaid: newBaseAmountPaid,
          };
        }
        return long;
      },
    );

    return Object.values(openLongsById).filter((long) => long.bondAmount);
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
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getOpenShorts"> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const { checkpointDuration } = await this.getPoolConfig(options);

    const closeShortEvents = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    // convert this to a promise object that converts shares to baseAmount
    const totalBaseReceivedByAssetId = mapValues(
      groupBy(closeShortEvents, (event) => event.args.assetId.toString()),
      (events) => {
        const baseAmounts = events.map((event) => {
          const { asBase, baseAmount, vaultShareAmount } = event.args;
          return calculateBaseAmount({
            asBase,
            baseAmount,
            vaultShareAmount,
          });
        });
        return sumBigInt(baseAmounts);
      },
    );

    const transferOutEvents = (
      await this.getTransferSingleEvents({
        filter: { from: account },
        fromBlock,
        toBlock,
      })
    ).filter(
      ({ data }) =>
        decodeAssetFromTransferSingleEventData(data as `0x${string}`)
          .assetType === "SHORT",
    );

    const closedShortsById: Record<string, ClosedShort> = {};

    for (const {
      args: eventData,
      data: eventLog,
      blockNumber,
    } of transferOutEvents) {
      const assetId = eventData.id.toString();

      if (closedShortsById[assetId]) {
        closedShortsById[assetId].bondAmount += eventData.value;
        continue;
      }

      const { timestamp } = await getBlockOrThrow(this.network, {
        blockNumber,
      });
      closedShortsById[assetId] = {
        hyperdriveAddress: this.contract.address,
        assetId: eventData.id,
        bondAmount: eventData.value ?? 0n,
        checkpointId: getCheckpointId(timestamp, checkpointDuration),
        baseAmountReceived: totalBaseReceivedByAssetId[assetId] ?? 0n,
        maturity: decodeAssetFromTransferSingleEventData(
          eventLog as `0x${string}`,
        ).timestamp,
        closedTimestamp: timestamp,
      };
    }

    const openShortEvents = await this.contract.getEvents("OpenShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    // Openning a short total cost
    const totalBasePaidByAssetId = mapValues(
      groupBy(openShortEvents, (event) => event.args.assetId.toString()),
      (events) => {
        const baseAmounts = events.map((event) => {
          const { asBase, baseAmount, vaultShareAmount } = event.args;
          return calculateBaseAmount({ asBase, baseAmount, vaultShareAmount });
        });
        return sumBigInt(baseAmounts);
      },
    );

    const transferInEvents = (
      await this.getTransferSingleEvents({
        filter: { to: account },
        fromBlock,
        toBlock,
      })
    ).filter(
      ({ data: eventLog }) =>
        decodeAssetFromTransferSingleEventData(eventLog as `0x{$string}`)
          .assetType === "SHORT",
    );

    const openShortsById: Record<string, OpenShort> = {};

    for (const {
      data: eventLog,
      args: eventData,
      blockNumber,
    } of transferInEvents) {
      const assetId = eventData.id.toString();
      const { timestamp } = await getBlockOrThrow(this.network, {
        blockNumber,
      });

      if (openShortsById[assetId]) {
        openShortsById[assetId].bondAmount += eventData.value;
        continue;
      }

      const netAmountPaid =
        (totalBasePaidByAssetId[assetId] ?? 0n) -
        (totalBaseReceivedByAssetId[assetId] ?? 0n);

      openShortsById[assetId] = {
        hyperdriveAddress: this.contract.address,
        assetId: eventData.id,
        checkpointId: getCheckpointId(timestamp, checkpointDuration),
        bondAmount:
          eventData.value - (closedShortsById[assetId]?.bondAmount ?? 0n),
        baseAmountPaid: netAmountPaid > 0n ? netAmountPaid : 0n,
        openedTimestamp: timestamp,
        maturity: decodeAssetFromTransferSingleEventData(
          eventLog as `0x${string}`,
        ).timestamp,
      };
    }

    return Object.values(openShortsById).filter((short) => short.bondAmount);
  }

  async getClosedLongs({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getClosedLongs"> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const closedLongs = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const closedLongsList: ClosedLong[] = await Promise.all(
      closedLongs.map(async (event) => {
        const assetId = event.args.assetId;

        const { vaultShareAmount, asBase, baseAmount } = event.args;
        const finalBaseAmount = calculateBaseAmount({
          vaultShareAmount,
          asBase,
          baseAmount,
        });

        return {
          assetId,
          bondAmount: event.args.bondAmount,
          baseAmount: finalBaseAmount,
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

  async getClosedShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getClosedShorts"> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";
    const closedShorts = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const { checkpointDuration } = await this.getPoolConfig(options);
    const closedShortsList: ClosedShort[] = await Promise.all(
      closedShorts.map(async (event) => {
        const { assetId, maturityTime } = event.args;
        const { timestamp } = await getBlockOrThrow(this.network, {
          blockNumber: event.blockNumber,
        });

        const { vaultShareAmount, asBase, baseAmount } = event.args;
        const finalBaseAmount = calculateBaseAmount({
          vaultShareAmount,
          asBase,
          baseAmount,
        });

        return {
          hyperdriveAddress: this.contract.address,
          assetId,
          bondAmount: event.args.bondAmount,
          baseAmountReceived: finalBaseAmount,
          maturity: maturityTime,
          closedTimestamp: timestamp,
          checkpointId: getCheckpointId(timestamp, checkpointDuration),
        };
      }),
    );

    return closedShortsList.filter((short) => short.bondAmount);
  }

  async getMaxShort(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getMaxShort"> {
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
    const { vaultSharePrice: openSharePrice } = await this.getCheckpoint({
      checkpointId,
    });

    const stringifiedPoolInfo = convertBigIntsToStrings(poolInfo);
    const stringifiedPoolConfig = convertBigIntsToStrings(poolConfig);

    const maxBondsOut = hyperwasm.getMaxShort(
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
    );

    return {
      maxBondsOut: BigInt(maxBondsOut),
      maxBaseIn: BigInt(maxBaseIn),
    };
  }

  async getMaxLong(
    options?: ContractReadOptions,
  ): ReturnType<IReadHyperdrive, "getMaxLong"> {
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

    const maxBaseIn = hyperwasm.getMaxLong(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      MAX_UINT256.toString(),
      checkpointExposure.toString(),
    );
    const maxBondsOut = hyperwasm.calcOpenLong(
      stringifiedPoolInfo,
      stringifiedPoolConfig,
      maxBaseIn,
    );

    return {
      maxBaseIn: BigInt(maxBaseIn),
      maxBondsOut: BigInt(maxBondsOut),
    };
  }

  getLpSharesTotalSupply(args?: {
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getLpSharesTotalSupply"> {
    return this.contract.read(
      "totalSupply",
      { id: LP_ASSET_ID },
      args?.options,
    );
  }

  getLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getLpShares"> {
    return this.contract.read(
      "balanceOf",
      { tokenId: LP_ASSET_ID, owner: account },
      options,
    );
  }

  async getClosedLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getClosedLpShares"> {
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      {
        filter: { provider: account },
        ...options,
      },
    );
    return Promise.all(
      removeLiquidityEvents.map(async ({ blockNumber, args }) => {
        const { lpAmount, withdrawalShareAmount, lpSharePrice } = args;
        // Get the value of the lp shares by multiplying by the lp share price
        // in the event, this saves us looking up pool info
        const finalBaseAmount = dnum.multiply(
          [lpAmount, 18],
          [lpSharePrice, 18],
        )[0];

        return {
          hyperdriveAddress: this.contract.address,
          lpAmount,
          baseAmount: finalBaseAmount,
          withdrawalShareAmount,
          closedTimestamp: (
            await getBlockOrThrow(this.network, {
              blockNumber,
            })
          ).timestamp,
        };
      }),
    );
  }

  getWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getWithdrawalShares"> {
    return this.contract.read(
      "balanceOf",
      { tokenId: WITHDRAW_SHARES_ASSET_ID, owner: account },
      options,
    );
  }

  async getRedeemedWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): ReturnType<IReadHyperdrive, "getRedeemedWithdrawalShares"> {
    const redeemedWithdrawalShareEvents = await this.contract.getEvents(
      "RedeemWithdrawalShares",
      {
        filter: { provider: account },
        ...options,
      },
    );

    return Promise.all(
      redeemedWithdrawalShareEvents.map(async ({ blockNumber, args }) => {
        const { withdrawalShareAmount, baseAmount, asBase, vaultShareAmount } =
          args;

        const finalBaseAmount = calculateBaseAmount({
          vaultShareAmount,
          asBase,
          baseAmount,
        });
        return {
          hyperdriveAddress: this.contract.address,
          withdrawalShareAmount,
          baseAmount: finalBaseAmount,
          redeemedTimestamp: (
            await getBlockOrThrow(this.network, { blockNumber })
          ).timestamp,
        };
      }),
    );
  }

  async previewOpenLong({
    baseAmount,
    options,
  }: Parameters<IReadHyperdrive["previewOpenLong"]>[0]): ReturnType<
    IReadHyperdrive,
    "previewOpenLong"
  > {
    const config = await this.getPoolConfig(options);
    const info = await this.getPoolInfo(options);

    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      config.checkpointDuration,
    );

    const bondProceeds = await hyperwasm.calcOpenLong(
      convertBigIntsToStrings(info),
      convertBigIntsToStrings(config),
      baseAmount.toString(),
    );

    return {
      maturityTime: checkpointId + config.positionDuration,
      bondProceeds: BigInt(bondProceeds),
    };
  }

  async previewOpenShort({
    amountOfBondsToShort,
    options,
  }: Parameters<IReadHyperdrive["previewOpenShort"]>[0]): ReturnType<
    IReadHyperdrive,
    "previewOpenShort"
  > {
    const config = await this.getPoolConfig(options);
    const info = await this.getPoolInfo(options);

    const { timestamp: blockTimestamp } = await getBlockOrThrow(
      this.network,
      options,
    );
    const checkpointId = getCheckpointId(
      blockTimestamp,
      config.checkpointDuration,
    );

    const baseDepositAmount = await hyperwasm.calcOpenShort(
      convertBigIntsToStrings(info),
      convertBigIntsToStrings(config),
      amountOfBondsToShort.toString(),
    );

    return {
      maturityTime: checkpointId + config.positionDuration,
      traderDeposit: BigInt(baseDepositAmount),
    };
  }

  previewCloseLong({
    maturityTime,
    bondAmountIn,
    minAmountOut,
    destination,
    asBase,
    extraData = ZERO_ADDRESS,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadHyperdrive, "previewCloseLong"> {
    return this.contract.simulateWrite(
      "closeLong",
      {
        _maturityTime: maturityTime,
        _bondAmount: bondAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  previewCloseShort({
    maturityTime,
    shortAmountIn,
    minAmountOut,
    destination,
    asBase,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadHyperdrive, "previewCloseShort"> {
    return this.contract.simulateWrite(
      "closeShort",
      {
        _maturityTime: maturityTime,
        _bondAmount: shortAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  previewAddLiquidity({
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
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadHyperdrive, "previewAddLiquidity"> {
    return this.contract.simulateWrite(
      "addLiquidity",
      {
        _contribution: contribution,
        _minLpSharePrice: minLpSharePrice,
        _minApr: minAPR,
        _maxApr: maxAPR,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

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
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadHyperdrive, "previewRemoveLiquidity"> {
    const { proceeds, withdrawalShares } = await this.contract.simulateWrite(
      "removeLiquidity",
      {
        _lpShares: lpSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      options,
    );

    return {
      proceeds,
      withdrawalShares,
    };
  }

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
    destination: Address;
    asBase: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadHyperdrive, "previewRedeemWithdrawalShares"> {
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
      proceeds,
      withdrawalSharesRedeemed,
    };
  }
}

function calculateBaseAmount({
  vaultShareAmount,
  asBase,
  baseAmount,
}: {
  vaultShareAmount: bigint;
  asBase: boolean;
  baseAmount: bigint;
}): bigint {
  // If you paid in base, no need to convert anything
  if (asBase) {
    return baseAmount;
  }

  // Get the vault share price at the time you opened the position
  // so we can convert your shares paid into their base value
  const vaultSharePrice = dnum.div([baseAmount, 18], [vaultShareAmount, 18])[0];
  return dnum.multiply([vaultSharePrice, 18], [vaultShareAmount, 18])[0];
}
