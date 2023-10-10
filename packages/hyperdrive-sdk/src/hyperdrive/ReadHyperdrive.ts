import { Address } from "abitype";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import {
  BlockTag,
  ContractEvent,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
} from "src/contract/Contract";
import { IReadHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { IReadHyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
import { LP_ASSET_ID } from "src/lp/assetId";
import { decodeAssetFromTransferSingleEventData } from "src/pool/decodeAssetFromTransferSingleEventData";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ClosedLong, Long } from "src/longs/types";
import { ClosedLpShares } from "src/lp/ClosedLpShares";
import { RedeemedWithdrawalShares } from "src/withdrawalShares/RedeemedWithdrawalShares";
import { ClosedShort, OpenShort } from "src/shorts/types";
import { INetwork } from "src/network/Network";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { getCheckpointId } from "src/pool/getCheckpointId";
import { WITHDRAW_SHARES_ASSET_ID } from "src/withdrawalShares/assetId";
import { AssetType } from "src/pool/parseAssetType";

export interface ReadHyperdriveOptions {
  contract: IReadHyperdriveContract;
  mathContract: IReadHyperdriveMathContract;
  network: INetwork;
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
  getFixedRate(options?: ContractReadOptions): Promise<bigint>;

  /**
   * This function retrieves the market liquidity by using the following formula:
   * marketLiquidity = lpSharePrice * effectiveShareReserves - longsOutstanding
   */
  getLiquidity(options?: ContractReadOptions): Promise<bigint>;

  /**
   * Calculates the total trading volume in bonds given a block window.
   * @param options.fromBlock - The start block, defaults to "earliest"
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the total amount of bonds traded
   */
  getTradingVolume(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<bigint>;

  /**
   * Gets the current price of a bond in the pool.
   */
  getLongPrice(options?: ContractReadOptions): Promise<bigint>;

  /**
   * Gets the active longs opened by a specific user.
   */
  getOpenLongs({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<Long[]>;

  /**
   * Gets the active shorts opened by a specific user.
   */
  getOpenShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<OpenShort[]>;

  /**
   * Gets the inactive longs opened by a specific user.
   */
  getClosedLongs({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLong[]>;

  /**
   * Gets the inactive shorts opened by a specific user.
   */
  getClosedShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedShort[]>;

  /**
   * Gets the maximum amount of bonds a user can open a short for.
   */
  getMaxShort(options?: ContractReadOptions): Promise<bigint>;

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
  getLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Gets the amount of closed LP shares a user has.
   */
  getClosedLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLpShares[]>;

  /**
   * Gets the amount of withdrawal shares a user has.
   */
  getWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Gets the amount of redeemed withdrawal shares a user has.
   */
  getRedeemedWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<RedeemedWithdrawalShares[]>;

  /**
   * Predicts the amount of base asset a user will receive when closing a long.
   */
  previewCloseLong({
    maturityTime,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base asset a user will receive when closing a short.
   */
  previewCloseShort({
    maturityTime,
    shortAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of bonds a user will receive when opening a long.
   */
  previewOpenLong({
    baseAmount,
    minBondAmountOut,
    minSharePrice,
    destination,
    asUnderlying,
    options,
  }: {
    baseAmount: bigint;
    minBondAmountOut: bigint;
    minSharePrice: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<{ maturityTime: bigint; bondProceeds: bigint }>;

  /**
   * Predicts the amount of base asset it will cost to open a short.
   */
  previewOpenShort({
    amountOfBondsToShort,
    maxBaseAmountIn,
    minSharePrice,
    destination,
    asUnderlying,
    options,
  }: {
    amountOfBondsToShort: bigint;
    maxBaseAmountIn: bigint;
    minSharePrice: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<{ maturityTime: bigint; traderDeposit: bigint }>;

  /**
   * Predicts the amount of LP shares a user will receive when adding liquidity.
   */
  previewAddLiquidity({
    contribution,
    minAPR,
    maxAPR,
    destination,
    asUnderlying,
    options,
  }: {
    contribution: bigint;
    minAPR: bigint;
    maxAPR: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base asset and withdrawlshares a user will receive when removing liquidity.
   */
  previewRemoveLiquidity({
    lpSharesIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    lpSharesIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<{ baseAmountOut: bigint; withdrawalSharesOut: bigint }>;

  /**
   * Predicts the amount of base asset and redeemed shares a user will receive when redeeming withdrawal shares.
   */
  previewRedeemWithdrawalShares({
    withdrawalSharesIn,
    minBaseAmountOutPerShare,
    destination,
    asUnderlying,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minBaseAmountOutPerShare: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<{ baseAmountOut: bigint; sharesRedeemed: bigint }>;

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
      timestamp: bigint;
      eventName: "OpenLong" | "CloseLong";
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
      timestamp: bigint;
      eventName: "OpenShort" | "CloseShort";
    }[]
  >;
}

const MAX_ITERATIONS = 7n;
export class ReadHyperdrive implements IReadHyperdrive {
  protected readonly contract: IReadHyperdriveContract;
  protected readonly mathContract: IReadHyperdriveMathContract;
  protected readonly network: INetwork;

  /**
   * @hidden
   */
  constructor({ contract, mathContract, network }: ReadHyperdriveOptions) {
    this.contract = contract;
    this.mathContract = mathContract;
    this.network = network;
  }

  async getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    const [poolConfig] = await this.contract.read("getPoolConfig", [], options);
    return poolConfig;
  }

  async getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    const [poolInfo] = await this.contract.read("getPoolInfo", [], options);
    return poolInfo;
  }

  async getFixedRate(options?: ContractReadOptions): Promise<bigint> {
    const { positionDuration, initialSharePrice, timeStretch } =
      await this.getPoolConfig(options);
    const { shareReserves, bondReserves, shareAdjustment } =
      await this.getPoolInfo(options);
    const [apr] = await this.mathContract.read(
      "calculateAPRFromReserves",
      [
        calculateEffectiveShareReserves(shareReserves, shareAdjustment),
        bondReserves,
        initialSharePrice,
        positionDuration,
        timeStretch,
      ],
      options,
    );

    return apr;
  }

  async getLiquidity(options?: ContractReadOptions): Promise<bigint> {
    const { lpSharePrice, shareReserves, longsOutstanding, shareAdjustment } =
      await this.getPoolInfo(options);

    const liquidity = calculateLiquidity(
      lpSharePrice,
      calculateEffectiveShareReserves(shareReserves, shareAdjustment),
      longsOutstanding,
    );

    return liquidity;
  }

  async getTradingVolume(options?: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<bigint> {
    const { fromBlock = "earliest", toBlock = "latest" } = options || {};
    const openLongEvents = await this.getOpenLongEvents({
      fromBlock,
      toBlock,
    });
    const openShortEvents = await this.getOpenShortEvents({
      fromBlock,
      toBlock,
    });

    const totalVolume =
      sumBigInt(openLongEvents.map((event) => event.args.bondAmount)) +
      sumBigInt(openShortEvents.map((event) => event.args.bondAmount));

    return totalVolume;
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
  async getLongPrice(options?: ContractReadOptions): Promise<bigint> {
    const { initialSharePrice, timeStretch } = await this.getPoolConfig(
      options,
    );
    const { shareReserves, bondReserves, shareAdjustment } =
      await this.getPoolInfo(options);

    const [spotPrice] = await this.mathContract.read(
      "calculateSpotPrice",
      [
        calculateEffectiveShareReserves(shareReserves, shareAdjustment),
        bondReserves,
        initialSharePrice,
        timeStretch,
      ],
      options,
    );
    return spotPrice;
  }

  async getOpenLongEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">,
  ): Promise<ContractEvent<typeof HyperdriveABI, "OpenLong">[]> {
    return this.contract.getEvents("OpenLong", options);
  }

  async getOpenShortEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">,
  ): Promise<ContractEvent<typeof HyperdriveABI, "OpenShort">[]> {
    return this.contract.getEvents("OpenShort", options);
  }

  async getLongEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseLong">,
  ): Promise<
    {
      trader: Address;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      timestamp: bigint;
      eventName: "OpenLong" | "CloseLong";
    }[]
  > {
    const openLongEvents = await this.contract.getEvents("OpenLong", options);
    const closeLongEvents = await this.contract.getEvents("CloseLong", options);
    const decodedOpenLongEvents = openLongEvents.map((event) => ({
      ...event,
      data: decodeAssetFromTransferSingleEventData(event.data as `0x${string}`),
    }));
    const decodedCloseLongEvents = closeLongEvents.map((event) => ({
      ...event,
      data: decodeAssetFromTransferSingleEventData(event.data as `0x${string}`),
    }));

    const allEvents = [...decodedOpenLongEvents, ...decodedCloseLongEvents]
      .sort((a, b) => Number(a.data.timestamp - b.data.timestamp))
      .map((event) => {
        const { data, args, eventName } = event;
        const { timestamp } = data;
        const { trader, assetId, bondAmount, baseAmount } = args;
        return {
          trader,
          assetId,
          bondAmount,
          baseAmount,
          timestamp,
          eventName,
        };
      });

    return allEvents;
  }

  async getShortEvents(
    options?:
      | ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">
      | ContractGetEventsOptions<typeof HyperdriveABI, "CloseShort">,
  ): Promise<
    {
      trader: Address;
      assetId: bigint;
      bondAmount: bigint;
      baseAmount: bigint;
      timestamp: bigint;
      eventName: "OpenShort" | "CloseShort";
    }[]
  > {
    const openShortEvents = await this.contract.getEvents("OpenShort", options);
    const closeShortEvents = await this.contract.getEvents(
      "CloseShort",
      options,
    );
    const decodedOpenShortEvents = openShortEvents.map((event) => ({
      ...event,
      data: decodeAssetFromTransferSingleEventData(event.data as `0x${string}`),
    }));
    const decodedCloseShortEvents = closeShortEvents.map((event) => ({
      ...event,
      data: decodeAssetFromTransferSingleEventData(event.data as `0x${string}`),
    }));

    const allEvents = [...decodedOpenShortEvents, ...decodedCloseShortEvents]
      .sort((a, b) => Number(a.data.timestamp - b.data.timestamp))
      .map((event) => {
        const { data, args, eventName, transactionHash } = event;
        const { timestamp } = data;
        const { trader, assetId, bondAmount, baseAmount } = args;
        return {
          trader,
          assetId,
          bondAmount,
          baseAmount,
          timestamp,
          eventName,
        };
      });

    return allEvents;
  }

  private async getTransferSingleEvents({
    filter,
    fromBlock,
    toBlock,
  }: ContractGetEventsOptions<typeof HyperdriveABI, "TransferSingle">) {
    return this.contract.getEvents("TransferSingle", {
      fromBlock,
      toBlock,
      filter,
    });
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
  }): Promise<Long[]> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const openLongEvents = await this.contract.getEvents("OpenLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const totalBasePaidByAssetId = mapValues(
      groupBy(openLongEvents, (event) => event.args.assetId.toString()),
      (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
    );

    const closeLongEvents = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const totalBaseReceivedByAssetId = mapValues(
      groupBy(closeLongEvents, (event) => event.args.assetId.toString()),
      (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
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
    ).filter(
      (transferSingleEvent) =>
        decodeAssetFromTransferSingleEventData(
          transferSingleEvent.data as `0x${string}`,
        ).assetType === "LONG",
    );

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
  }): Promise<OpenShort[]> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const closeShortEvents = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const amountReceivedByAssetId = mapValues(
      groupBy(closeShortEvents, (event) => event.args.assetId.toString()),
      (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
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

    for (const { args: eventData, data: eventLog } of transferOutEvents) {
      const assetId = eventData.id.toString();

      if (closedShortsById[assetId]) {
        closedShortsById[assetId].bondAmount += eventData.value;
        continue;
      }

      closedShortsById[assetId] = {
        hyperdriveAddress: this.contract.address,
        assetId: eventData.id,
        bondAmount: eventData.value ?? 0n,
        baseAmountReceived: amountReceivedByAssetId[assetId] ?? 0n,
        maturity: decodeAssetFromTransferSingleEventData(
          eventLog as `0x${string}`,
        ).timestamp,
        //Can we use this of closedTimestamp?
        closedTimestamp: decodeAssetFromTransferSingleEventData(
          eventLog as `0x${string}`,
        ).timestamp,
      };
    }

    const openShortEvents = await this.contract.getEvents("OpenShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const amountPaidByAssetId = mapValues(
      groupBy(openShortEvents, (event) => event.args.assetId),
      (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
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

    for (const { data: eventLog, args: eventData } of transferInEvents) {
      const assetId = eventData.id.toString();

      if (openShortsById[assetId]) {
        openShortsById[assetId].bondAmount += eventData.value;
        continue;
      }

      const netAmountPaid =
        (amountPaidByAssetId[assetId] ?? 0n) -
        (amountReceivedByAssetId[assetId] ?? 0n);

      openShortsById[assetId] = {
        hyperdriveAddress: this.contract.address,
        assetId: eventData.id,
        bondAmount:
          eventData.value - (closedShortsById[assetId]?.bondAmount ?? 0n),
        baseAmountPaid: netAmountPaid > 0n ? netAmountPaid : 0n,
        openedTimestamp: decodeAssetFromTransferSingleEventData(
          eventLog as `0x${string}`,
        ).timestamp,
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
  }): Promise<ClosedLong[]> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const closedLongs = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const closedLongsById = mapValues(
      groupBy(closedLongs, (event) => event.args.assetId.toString()),
      (events): ClosedLong => {
        const assetId = events[0].args.assetId;
        const decoded = decodeAssetFromTransferSingleEventData(
          events[0].data as `0x${string}`,
        );
        return {
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.args.bondAmount)),
          baseAmount: sumBigInt(events.map((event) => event.args.baseAmount)),
          baseAmountPaid: 0n, // TODO: Remove this field, this is copy/paste from @hyperdrive/queries
          maturity: decoded.timestamp,
          closedTimestamp: decodeAssetFromTransferSingleEventData(
            events[0].data as `0x${string}`,
          ).timestamp,
        };
      },
    );
    return Object.values(closedLongsById).filter((long) => long.bondAmount);
  }

  async getClosedShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedShort[]> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";
    const closedShorts = await this.contract.getEvents("CloseShort", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const closedShortsById = mapValues(
      groupBy(closedShorts, (event) => event.args.assetId.toString()),
      (events) => {
        const assetId = events[0].args.assetId;
        const decoded = decodeAssetFromTransferSingleEventData(
          events[0].data as `0x${string}`,
        );
        return {
          hyperdriveAddress: this.contract.address,
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.args.bondAmount)),
          baseAmountReceived: sumBigInt(
            events.map((event) => event.args.baseAmount),
          ),
          maturity: decoded.timestamp,
          closedTimestamp: decodeAssetFromTransferSingleEventData(
            events[0].data as `0x${string}`,
          ).timestamp,
        };
      },
    );
    return Object.values(closedShortsById).filter((short) => short.bondAmount);
  }

  async getMaxShort(options?: ContractReadOptions): Promise<bigint> {
    const {
      minimumShareReserves,
      initialSharePrice,
      timeStretch,
      fees,
      checkpointDuration,
    } = await this.getPoolConfig(options);
    const {
      shareReserves,
      bondReserves,
      longsOutstanding,
      sharePrice,
      shareAdjustment,
      longExposure,
    } = await this.getPoolInfo(options);
    const { timestamp: blockTimestamp } = await this.network.getBlock(options);

    const checkpointId = getCheckpointId(blockTimestamp, checkpointDuration);
    const [{ longExposure: checkpointLongExposure }] = await this.contract.read(
      "getCheckpoint",
      [checkpointId],
    );

    const [maxBondsOut] = await this.mathContract.read(
      "calculateMaxShort",
      [
        {
          shareReserves,
          shareAdjustment,
          bondReserves,
          longsOutstanding,
          timeStretch,
          sharePrice,
          initialSharePrice,
          minimumShareReserves,
          longExposure,
          curveFee: fees.curve,
          governanceFee: fees.governance,
        },
        checkpointLongExposure,
        MAX_ITERATIONS,
      ],
      options,
    );
    return maxBondsOut;
  }

  async getMaxLong(options?: ContractReadOptions): Promise<{
    maxBaseIn: bigint;
    maxBondsOut: bigint;
  }> {
    const {
      minimumShareReserves,
      initialSharePrice,
      timeStretch,
      checkpointDuration,
      fees,
    } = await this.getPoolConfig(options);
    const {
      shareReserves,
      bondReserves,
      longsOutstanding,
      sharePrice,
      longExposure,
      shareAdjustment,
    } = await this.getPoolInfo(options);

    const { timestamp: blockTimestamp } = await this.network.getBlock(options);

    const checkpointId = getCheckpointId(blockTimestamp, checkpointDuration);
    const [{ longExposure: checkpointLongExposure }] = await this.contract.read(
      "getCheckpoint",
      [checkpointId],
    );

    const [maxBaseIn, maxBondsOut] = await this.mathContract.read(
      "calculateMaxLong",
      [
        {
          shareReserves,
          shareAdjustment,
          bondReserves,
          longsOutstanding,
          timeStretch,
          sharePrice,
          initialSharePrice,
          minimumShareReserves,
          longExposure,
          curveFee: fees.curve,
          governanceFee: fees.governance,
        },
        checkpointLongExposure,
        MAX_ITERATIONS,
      ],
      options,
    );

    return {
      maxBaseIn,
      maxBondsOut,
    };
  }

  async getLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const [lpShares] = await this.contract.read(
      "balanceOf",
      [LP_ASSET_ID, account],
      options,
    );
    return lpShares;
  }

  async getClosedLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLpShares[]> {
    const removeLiquidityEvents = await this.contract.getEvents(
      "RemoveLiquidity",
      {
        filter: { provider: account },
        ...options,
      },
    );
    return removeLiquidityEvents.map(({ data, args }) => {
      const { baseAmount, lpAmount, withdrawalShareAmount } = args;
      return {
        hyperdriveAddress: this.contract.address,
        lpAmount,
        baseAmount,
        withdrawalShareAmount,
        closedTimestamp: decodeAssetFromTransferSingleEventData(
          data as `0x${string}`,
        ).timestamp,
      };
    });
  }

  async getWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const [balanceOf] = await this.contract.read(
      "balanceOf",
      [WITHDRAW_SHARES_ASSET_ID, account],
      options,
    );
    return balanceOf;
  }

  async getRedeemedWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<RedeemedWithdrawalShares[]> {
    const redeemedWithdrawalShareEvents = await this.contract.getEvents(
      "RedeemWithdrawalShares",
      {
        filter: { provider: account },
        ...options,
      },
    );

    return Promise.all(
      redeemedWithdrawalShareEvents.map(async ({ data, args }) => {
        const { withdrawalShareAmount, baseAmount } = args;
        return {
          hyperdriveAddress: this.contract.address,
          withdrawalShareAmount,
          baseAmount,
          timestamp: decodeAssetFromTransferSingleEventData(
            data as `0x${string}`,
          ).timestamp,
        };
      }),
    );
  }

  async previewOpenLong({
    baseAmount,
    minBondAmountOut,
    minSharePrice,
    destination,
    asUnderlying,
    options,
  }: {
    baseAmount: bigint;
    minBondAmountOut: bigint;
    minSharePrice: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<{ maturityTime: bigint; bondProceeds: bigint }> {
    const [maturityTime, bondProceeds] = await this.contract.simulateWrite(
      "openLong",
      [baseAmount, minBondAmountOut, minSharePrice, destination, asUnderlying],
      options,
    );
    return { maturityTime, bondProceeds };
  }

  async previewOpenShort({
    amountOfBondsToShort,
    maxBaseAmountIn,
    minSharePrice,
    destination,
    asUnderlying,
    options,
  }: {
    amountOfBondsToShort: bigint;
    maxBaseAmountIn: bigint;
    minSharePrice: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<{ maturityTime: bigint; traderDeposit: bigint }> {
    const [maturityTime, traderDeposit] = await this.contract.simulateWrite(
      "openShort",
      [
        amountOfBondsToShort,
        maxBaseAmountIn,
        minSharePrice,
        destination,
        asUnderlying,
      ],
      options,
    );
    return { maturityTime, traderDeposit };
  }

  async previewCloseLong({
    maturityTime,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<bigint> {
    const [closeLong] = await this.contract.simulateWrite(
      "closeLong",
      [maturityTime, bondAmountIn, minBaseAmountOut, destination, asUnderlying],
      options,
    );
    return closeLong;
  }

  async previewCloseShort({
    maturityTime,
    shortAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<bigint> {
    const [closeShort] = await this.contract.simulateWrite(
      "closeShort",
      [
        maturityTime,
        shortAmountIn,
        minBaseAmountOut,
        destination,
        asUnderlying,
      ],
      options,
    );
    return closeShort;
  }

  async previewAddLiquidity({
    contribution,
    minAPR,
    maxAPR,
    destination,
    asUnderlying,
    options,
  }: {
    contribution: bigint;
    minAPR: bigint;
    maxAPR: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<bigint> {
    const [lpShares] = await this.contract.simulateWrite(
      "addLiquidity",
      [contribution, minAPR, maxAPR, destination, asUnderlying],
      options,
    );
    return lpShares;
  }

  async previewRemoveLiquidity({
    lpSharesIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    lpSharesIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<{ baseAmountOut: bigint; withdrawalSharesOut: bigint }> {
    const [baseAmountOut, withdrawalSharesOut] =
      await this.contract.simulateWrite(
        "removeLiquidity",
        [lpSharesIn, minBaseAmountOut, destination, asUnderlying],
        options,
      );
    return { baseAmountOut, withdrawalSharesOut };
  }

  async previewRedeemWithdrawalShares({
    withdrawalSharesIn,
    minBaseAmountOutPerShare,
    destination,
    asUnderlying,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minBaseAmountOutPerShare: bigint;
    destination: Address;
    asUnderlying: boolean;
    options?: ContractWriteOptions;
  }): Promise<{ baseAmountOut: bigint; sharesRedeemed: bigint }> {
    const [baseAmountOut, sharesRedeemed] = await this.contract.simulateWrite(
      "redeemWithdrawalShares",
      [withdrawalSharesIn, minBaseAmountOutPerShare, destination, asUnderlying],
      options,
    );
    return { baseAmountOut, sharesRedeemed };
  }
}
