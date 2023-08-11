import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBigInt";
import { decodeAssetFromTransferSingleEventData } from "src/amm/events/decodeAssetFromTransferSingleEventData";
import { getTransferSingleEvents } from "src/amm/events/getTransferSingleEvents";
import { Long } from "src/amm/longs/typesOld";
import { PublicClient, Address } from "viem";
import { makeQueryKey } from "src/makeQueryKey";
import { getOpenLongEvents } from "src/amm/longs/getOpenLongEvents";
import { getCloseLongEvents } from "src/amm/longs/getCloseLongEvents";

export interface GetOpenLongsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getOpenLongs({
  account,
  hyperdriveAddress,
  publicClient,
}: GetOpenLongsOptions): Promise<Long[]> {
  const openLongEvents = await getOpenLongEvents({
    args: { traderAddress: account },
    hyperdriveAddress,
    publicClient,
  });
  const totalBasePaidByAssetId = mapValues(
    groupBy(openLongEvents, (event) => event.eventData.assetId.toString()),
    (events) => sumBigInt(events.map((event) => event.eventData.baseAmount)),
  );

  const closeLongEvents = await getCloseLongEvents({
    args: { traderAddress: account },
    hyperdriveAddress,
    publicClient,
  });
  const totalBaseReceivedByAssetId = mapValues(
    groupBy(closeLongEvents, (event) => event.eventData.assetId.toString()),
    (events) => sumBigInt(events.map((event) => event.eventData.baseAmount)),
  );

  // get all the transfers where the user was the recipient,
  // ie: mints from the 0x address and transfers from other wallets
  const longsMintedOrReceived = (
    await getTransferSingleEvents({
      args: { toAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    (transferSingleEvent) =>
      decodeAssetFromTransferSingleEventData(transferSingleEvent.eventLog.data)
        .assetType === "LONG",
  );

  const longsMintedOrReceivedById = mapValues(
    groupBy(longsMintedOrReceived, (event) => event.eventData.id),
    (events): Long => {
      const assetId = events[0].eventData.id;
      const decoded = decodeAssetFromTransferSingleEventData(
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

  // get all the transfers where the user was the sender,
  // ie: burning to the 0x address (aka: redeem) and transfers to other wallets
  const longsRedeemedOrSent = (
    await getTransferSingleEvents({
      args: { fromAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    (transferSingleEvent) =>
      decodeAssetFromTransferSingleEventData(transferSingleEvent.eventLog.data)
        .assetType === "LONG",
  );
  const longsRedeemedOrSentById = mapValues(
    groupBy(longsRedeemedOrSent, (event) => event.eventData.id),
    (events): Long => {
      const assetId = events[0].eventData.id;
      const decoded = decodeAssetFromTransferSingleEventData(
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

export function getOpenLongsQuery({
  hyperdriveAddress,
  publicClient,
  account,
}: Partial<GetOpenLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getOpenLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("open-longs", {
      hyperdriveAddress,
      account,
    }),
    queryFn: queryEnabled
      ? () => getOpenLongs({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
