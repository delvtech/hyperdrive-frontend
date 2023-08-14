import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import { decodeAssetFromTransferSingleEventData } from "src/amm/events/decodeAssetFromTransferSingleEventData";
import { getTransferSingleEvents } from "src/amm/events/getTransferSingleEvents";
import { PublicClient, Address } from "viem";
import { ClosedShort, OpenShort } from "src/amm/shorts/types";
import { makeQueryKey } from "src/makeQueryKey";
import { getOpenShortEvents } from "src/amm/shorts/getOpenShortEvents";
import { getCloseShortEvents } from "src/amm/shorts/getCloseShortEvents";

export interface GetOpenShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getOpenShorts({
  account,
  hyperdriveAddress,
  publicClient,
}: GetOpenShortsOptions): Promise<OpenShort[]> {
  // get the amount the account has received from closing shorts
  const closeShortEvents = await getCloseShortEvents({
    args: { traderAddress: account },
    hyperdriveAddress,
    publicClient,
  });
  const amountReceivedByAssetId = mapValues(
    groupBy(closeShortEvents, (event) => event.eventData.assetId),
    (events) => sumBigInt(events.map((event) => event.eventData.baseAmount)),
  );

  // get all shorts the account has sent (redeemed or transferred)
  const transferOutEvents = (
    await getTransferSingleEvents({
      args: { fromAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    ({ eventLog }) =>
      decodeAssetFromTransferSingleEventData(eventLog.data).assetType ===
      "SHORT",
  );

  const closedShortsById: Record<string, ClosedShort> = {};

  // group closed shorts by assetId and sum the bond amount
  for (const { eventData, eventLog } of transferOutEvents) {
    const assetId = eventData.id.toString();

    if (closedShortsById[assetId]) {
      closedShortsById[assetId].bondAmount += eventData.value;
      continue;
    }

    closedShortsById[assetId] = {
      hyperdriveAddress,
      assetId: eventData.id,
      bondAmount: eventData.value,
      baseAmountReceived: amountReceivedByAssetId[assetId] ?? 0n,
      closedTimestamp: (
        await publicClient.getBlock({
          blockNumber: eventLog.blockNumber as bigint,
        })
      ).timestamp,
      maturity: decodeAssetFromTransferSingleEventData(eventLog.data).timestamp,
    };
  }

  // get the amount the account has paid to open shorts
  const openShortEvents = await getOpenShortEvents({
    args: { trader: account },
    hyperdriveAddress,
    publicClient,
  });
  const amountPaidByAssetId = mapValues(
    groupBy(openShortEvents, (event) => event.eventData.assetId),
    (events) => sumBigInt(events.map((event) => event.eventData.baseAmount)),
  );

  // get all shorts sent to the account
  const transferInEvents = (
    await getTransferSingleEvents({
      args: { toAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    ({ eventLog }) =>
      decodeAssetFromTransferSingleEventData(eventLog.data).assetType ===
      "SHORT",
  );

  const openShortsById: Record<string, OpenShort> = {};

  // group open shorts by assetId and sum the bond amount
  for (const { eventData, eventLog } of transferInEvents) {
    const assetId = eventData.id.toString();

    if (openShortsById[assetId]) {
      openShortsById[assetId].bondAmount += eventData.value;
      continue;
    }

    const netAmountPaid =
      (amountPaidByAssetId[assetId] ?? 0n) -
      (amountReceivedByAssetId[assetId] ?? 0n);

    openShortsById[assetId] = {
      hyperdriveAddress,
      assetId: eventData.id,
      bondAmount:
        eventData.value - (closedShortsById[assetId]?.bondAmount ?? 0n),
      baseAmountPaid: netAmountPaid > 0n ? netAmountPaid : 0n,
      openedTimestamp: (
        await publicClient.getBlock({
          blockNumber: eventLog.blockNumber as bigint,
        })
      ).timestamp,
      maturity: decodeAssetFromTransferSingleEventData(eventLog.data).timestamp,
    };
  }

  return Object.values(openShortsById).filter((short) => short.bondAmount);
}

export function getOpenShortsQuery({
  hyperdriveAddress,
  publicClient,
  account,
}: Partial<GetOpenShortsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getOpenShorts>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("open-shorts", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () => getOpenShorts({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
