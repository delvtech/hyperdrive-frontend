import {
  ClosedShort,
  HyperdriveABI,
  OpenShort,
  Short,
  sumBigInt,
} from "@hyperdrive/core";
import { Address } from "abitype";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import {
  ContractGetEventsOptions,
  ContractReadOptions,
} from "src/contract/Contract";
import { decodeAssetFromTransferSingleEventData } from "src/long/decodeAssetFromTransferSingleEventData";
import { ReadableHyperdriveContract } from "..";
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
export async function getActiveShorts({
  contract,
  account,
  options,
}: {
  contract: ReadableHyperdriveContract;
  account: Address;
  options: ContractReadOptions;
}): Promise<Short[]> {
  const fromBlock = options?.blockNumber || options?.blockTag || "earliest";
  const toBlock = options?.blockNumber || options?.blockTag || "latest";

  const closeShortEvents = await contract.getEvents("CloseShort", {
    filter: { trader: account },
    fromBlock,
    toBlock,
  });

  const amountReceivedByAssetId = mapValues(
    groupBy(closeShortEvents, (event) => event.args.assetId.toString()),
    (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
  );

  const transferOutEvents = (
    await getTransferSingleEvents({
      contract,
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
      hyperdriveAddress: contract.address,
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

  const openShortEvents = await contract.getEvents("OpenShort", {
    filter: { trader: account },
    fromBlock,
    toBlock,
  });

  const amountPaidByAssetId = mapValues(
    groupBy(openShortEvents, (event) => event.args.assetId),
    (events) => sumBigInt(events.map((event) => event.args.baseAmount)),
  );

  const transferInEvents = (
    await getTransferSingleEvents({
      contract,
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
      hyperdriveAddress: contract.address,
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
