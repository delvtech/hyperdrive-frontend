import { HyperdriveABI, Long, TransferSingleEvent } from "@hyperdrive/core";
import { Address } from "abitype";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import {
  BlockTag,
  ContractGetEventsOptions,
  ContractReadOptions,
} from "src/contract/Contract";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { HyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
type AssetType = "LP" | "LONG" | "SHORT" | "WITHDRAWAL_SHARE";
interface ReadableHyperdriveConstructorOptions {
  contract: ReadableHyperdriveContract;
  mathContract: HyperdriveMathContract;
}

export class ReadableHyperdrive {
  private readonly contract: ReadableHyperdriveContract;
  private readonly mathContract: HyperdriveMathContract;

  constructor({
    contract,
    mathContract,
  }: ReadableHyperdriveConstructorOptions) {
    this.contract = contract;
    this.mathContract = mathContract;
  }

  /**
   * Gets the pool's configuration parameters
   */
  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", [], options);
  }

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   */
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", [], options);
  }

  /**
   * Gets the pool's fixed APR, i.e. the fixed rate a user locks in when they
   * open a long.
   */
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

  /**
   * This function retrieves the market liquidity by using the following formula:
   * marketLiquidity = lpSharePrice * shareReserves - longsOutstanding
   */
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

  /**
   * Calculates the total trading volume in bonds given a block window.
   * @param options.fromBlock - The start block, defaults to "earliest"
   * @param options.toBlock - The end block, defaults to "latest"
   * @returns the total amount of bonds traded
   */
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
   * Gets the current price of a bond in the pool.
   */
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
    fromBlock = "earliest",
    toBlock = "latest",
  }: {
    filter?: ContractGetEventsOptions<
      typeof HyperdriveABI,
      "TransferSingle"
    >["filter"];
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<TransferSingleEvent[]> {
    return this.contract.getEvents("TransferSingle", {
      filter,
      fromBlock,
      toBlock,
    }) as unknown as TransferSingleEvent[]; // TODO: Check if this type casting is correct
  }

  private parseAssetType(identifier: number): AssetType {
    if (identifier === 0) {
      return "LP";
    }
    if (identifier === 1) {
      return "LONG";
    }
    if (identifier === 2) {
      return "SHORT";
    }
    if (identifier === 3) {
      return "WITHDRAWAL_SHARE";
    }

    throw Error(
      `parseAssetType(${identifier}) did not match a valid asset type.`,
    );
  }

  private decodeAssetFromTransferSingleEventData(eventData: `0x${string}`): {
    assetType: AssetType;
    /**
     * in seconds
     */
    timestamp: bigint;
  } {
    const cleanEventData = eventData.slice(2);

    const identifier = Number(cleanEventData.slice(0, 2));
    const assetType = this.parseAssetType(identifier);
    // 62 hexadecimal digits (248 bits) = timestamp (in seconds)
    const timestampPart = cleanEventData.slice(2, 64);
    const timestamp = BigInt(parseInt(timestampPart, 16));
    return {
      assetType,
      timestamp,
    };
  }

  private async getActiveLongs({
    account,
    options,
  }: {
    account: Address;
    options: ContractReadOptions;
  }) {
    const fromBlock = options?.blockNumber || options?.blockTag || "earliest";
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
        this.decodeAssetFromTransferSingleEventData(
          transferSingleEvent.eventLog.data,
        ).assetType === "LONG",
    );

    const longsMintedOrReceivedById = mapValues(
      groupBy(longsMintedOrReceived, (event) => event.eventData.id),
      (events): Long => {
        const assetId = events[0].eventData.id;
        const decoded = this.decodeAssetFromTransferSingleEventData(
          events[0].eventLog.data,
        );
        return {
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.eventData.value)),
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
        this.decodeAssetFromTransferSingleEventData(
          transferSingleEvent.eventLog.data,
        ).assetType === "LONG",
    );

    const longsRedeemedOrSentById = mapValues(
      groupBy(longsRedeemedOrSent, (event) => event.eventData.id),
      (events): Long => {
        const assetId = events[0].eventData.id;
        const decoded = this.decodeAssetFromTransferSingleEventData(
          events[0].eventLog.data,
        );
        return {
          assetId,
          bondAmount: sumBigInt(events.map((event) => event.eventData.value)),
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
}
