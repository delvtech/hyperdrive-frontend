import { Address } from "abitype";
import { HyperdriveABI, Long } from "@hyperdrive/core";
import {
  ContractGetEventsOptions,
  ContractReadOptions,
} from "src/contract/Contract";
import mapValues from "lodash.mapvalues";
import groupBy from "lodash.groupby";
import { sumBigInt } from "src/base/sumBigInt";
import { decodeAssetFromTransferSingleEventData } from "src/long/decodeAssetFromTransferSingleEventData";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";

async function getTransferSingleEvents({
  contract,
  filter,
  fromBlock,
  toBlock,
}:
  | ContractGetEventsOptions<typeof HyperdriveABI, "TransferSingle"> & {
      contract: ReadableHyperdriveContract;
    }) {
  return contract.getEvents("TransferSingle", {
    fromBlock,
    toBlock,
    filter,
  });
}

/**
 * Gets the active longs opened by a specific user.
 * @param account - The user's address
 * @param options.fromBlock - The start block, defaults to "earliest"
 * @param options.toBlock - The end block, defaults to "latest"
 * @returns the active longs opened by a specific user
 */
export async function getActiveLongs({
  contract,
  account,
  options,
}: {
  contract: ReadableHyperdriveContract;
  account: Address;
  options: ContractReadOptions;
}): Promise<Long[]> {
  const fromBlock = options?.blockNumber || options?.blockTag || "earliest";
  const toBlock = options?.blockNumber || options?.blockTag || "latest";

  const openLongEvents = await contract.getEvents("OpenLong", {
    filter: { trader: account },
    fromBlock,
    toBlock,
  });

  const totalBasePaidByAssetId = mapValues(
    groupBy(openLongEvents, (event) => event.args.assetId.toString()),
    (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
  );

  const closeLongEvents = await contract.getEvents("CloseLong", {
    filter: { trader: account },
    fromBlock,
    toBlock,
  });

  const totalBaseReceivedByAssetId = mapValues(
    groupBy(closeLongEvents, (event) => event.args.assetId.toString()),
    (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
  );

  const longsMintedOrReceived = (
    await getTransferSingleEvents({
      contract,
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
    await getTransferSingleEvents({
      contract,
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
