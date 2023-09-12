import {
  ClosedLpShares,
  ClosedShort,
  HyperdriveABI,
  Long,
  OpenShort,
  RedeemedWithdrawalShares,
} from "@hyperdrive/core";
import { Address } from "abitype";
import { format } from "dnum";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import {
  BlockTag,
  ContractGetEventsOptions,
  ContractReadOptions,
} from "src/contract/Contract";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { ReadableHyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
import { WITHDRAW_SHARES_ASSET_ID, LP_ASSET_ID } from "src/lp/constants";
import { decodeAssetFromTransferSingleEventData } from "src/utils/decodeAssetFromTransferSingleEventData";

interface ReadableHyperdriveOptions {
  contract: ReadableHyperdriveContract;
  mathContract: ReadableHyperdriveMathContract;
}

export interface IReadableHyperdrive {
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
   * marketLiquidity = lpSharePrice * shareReserves - longsOutstanding
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
  }): Promise<Long[]>;

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
  getMaxShort(options?: ContractReadOptions): Promise<{
    maxBondsOut: bigint;
    formatted: string;
  }>;

  /**
   * Gets the maximum amount of bonds a user can open a long for.
   */
  getMaxLong(options?: ContractReadOptions): Promise<{
    maxBondsOut: bigint;
    formatted: string;
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
   * Predicts the amount of base asset a user will receive when they close a long.
   */
  previewCloseLong({
    maturityTime,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean | undefined;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base asset a user will receive when they close a short.
   */
  previewCloseShort({
    maturityTime,
    shortAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base a user will receive when they open a long.
   */
  previewOpenLong({
    baseAmount,
    bondAmountOut,
    destination,
    asUnderlying,
  }: {
    baseAmount: bigint;
    bondAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean | undefined;
  }): Promise<bigint>;

  /**
   * Predicts the amount of base a user will receive when they open a short.
   */
  previewOpenShort({
    baseAmount,
    maxBaseAmountIn,
    destination,
    asUnderlying,
  }: {
    baseAmount: bigint;
    maxBaseAmountIn: bigint;
    destination: Address;
    asUnderlying?: boolean;
  }): Promise<bigint>;
}

export class ReadableHyperdrive implements IReadableHyperdrive {
  private readonly contract: ReadableHyperdriveContract;
  private readonly mathContract: ReadableHyperdriveMathContract;

  constructor({ contract, mathContract }: ReadableHyperdriveOptions) {
    this.contract = contract;
    this.mathContract = mathContract;
  }

  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", [], options);
  }

  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", [], options);
  }

  async getFixedRate(options?: ContractReadOptions): Promise<bigint> {
    const { positionDuration, initialSharePrice, timeStretch } =
      await this.getPoolConfig(options);
    const { shareReserves, bondReserves } = await this.getPoolInfo(options);
    const apr = await this.mathContract.read(
      "calculateAPRFromReserves",
      [
        shareReserves,
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
    const { lpSharePrice, shareReserves, longsOutstanding } =
      await this.getPoolInfo(options);

    const liquidity = calculateLiquidity(
      lpSharePrice,
      shareReserves,
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

  async getLongPrice(options?: ContractReadOptions): Promise<bigint> {
    const { initialSharePrice, timeStretch } = await this.getPoolConfig(
      options,
    );
    const { shareReserves, bondReserves } = await this.getPoolInfo(options);

    return this.mathContract.read(
      "calculateSpotPrice",
      [shareReserves, bondReserves, initialSharePrice, timeStretch],
      options,
    );
  }

  private async getOpenLongEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenLong">,
  ) {
    return this.contract.getEvents("OpenLong", options);
  }

  private async getOpenShortEvents(
    options?: ContractGetEventsOptions<typeof HyperdriveABI, "OpenShort">,
  ) {
    return this.contract.getEvents("OpenShort", options);
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
  }): Promise<Long[]> {
    const fromBlock = "earliest";
    const toBlock = options?.blockNumber || options?.blockTag || "latest";

    const closedLongs = await this.contract.getEvents("CloseLong", {
      filter: { trader: account },
      fromBlock,
      toBlock,
    });

    const closedLongsById = mapValues(
      groupBy(closedLongs, (event) => event.args.assetId.toString()),
      (events) => {
        const assetId = events[0].args.assetId;
        const decoded = decodeAssetFromTransferSingleEventData(
          events[0].data as `0x${string}`,
        );
        return {
          hyperdriveAddress: this.contract.address,
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.args.bondAmount)),
          baseAmountPaid: sumBigInt(
            events.map((event) => event.args.baseAmount),
          ),
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

  async getMaxShort(
    options?: ContractReadOptions,
  ): Promise<{ maxBondsOut: bigint; formatted: string }> {
    const { minimumShareReserves, initialSharePrice, timeStretch } =
      await this.getPoolConfig(options);
    const { shareReserves, bondReserves, longsOutstanding, sharePrice } =
      await this.getPoolInfo(options);
    const maxBondsOut = await this.mathContract.read(
      "calculateMaxShort",
      [
        {
          shareReserves,
          bondReserves,
          longsOutstanding,
          timeStretch,
          sharePrice,
          initialSharePrice,
          minimumShareReserves,
        },
      ],
      options,
    );
    return {
      maxBondsOut,
      formatted: format([maxBondsOut, 18], 2),
    };
  }

  async getMaxLong(
    options?: ContractReadOptions,
  ): Promise<{ maxBondsOut: bigint; formatted: string }> {
    const { minimumShareReserves, initialSharePrice, timeStretch } =
      await this.getPoolConfig(options);
    const { shareReserves, bondReserves, longsOutstanding, sharePrice } =
      await this.getPoolInfo(options);
    const maxBondsOut = await this.mathContract.read(
      "calculateMaxLong",
      [
        {
          shareReserves,
          bondReserves,
          longsOutstanding,
          timeStretch,
          sharePrice,
          initialSharePrice,
          minimumShareReserves,
        },
        //TODO: Max iterations, what should this be?
        1000n,
      ],
      options,
    );
    return {
      maxBondsOut,
      formatted: format([maxBondsOut, 18], 2),
    };
  }

  async getLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const lpShares = await this.contract.read(
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
    return Promise.all(
      removeLiquidityEvents.map(async ({ data, args }) => {
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
      }),
    );
  }

  async getWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read(
      "balanceOf",
      [WITHDRAW_SHARES_ASSET_ID, account],
      options,
    );
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
    bondAmountOut,
    destination,
    asUnderlying,
  }: {
    baseAmount: bigint;
    bondAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
  }): Promise<bigint> {
    return await this.contract.simulateWrite("openLong", [
      baseAmount,
      bondAmountOut,
      destination,
      asUnderlying,
    ]);
  }

  async previewOpenShort({
    baseAmount,
    maxBaseAmountIn,
    destination,
    asUnderlying,
  }: {
    baseAmount: bigint;
    maxBaseAmountIn: bigint;
    destination: Address;
    asUnderlying: boolean;
  }): Promise<bigint> {
    return await this.contract.simulateWrite("openShort", [
      baseAmount,
      maxBaseAmountIn,
      destination,
      asUnderlying,
    ]);
  }

  async previewCloseLong({
    maturityTime,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
  }): Promise<bigint> {
    return await this.contract.simulateWrite("closeLong", [
      maturityTime,
      bondAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
    ]);
  }

  async previewCloseShort({
    maturityTime,
    shortAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
  }): Promise<bigint> {
    return await this.contract.simulateWrite("closeShort", [
      maturityTime,
      shortAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
    ]);
  }
}
