import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBy";
import { decodeAssetFromTransferSingleEventData } from "src/amm/events/decodeAssetFromTransferSingleEventData";
import { getTransferSingleEvents } from "src/amm/events/getTransferSingleEvents";
import { Long } from "src/amm/longs/types";
import { PublicClient, Address, Transport, Chain } from "viem";

export interface GetOpenLongsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getOpenLongs({
  account,
  hyperdriveAddress,
  publicClient,
}: GetOpenLongsOptions): Promise<Long[]> {
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
      return {
        hyperdriveAddress,
        assetId,
        bondAmount: sumBigInt(events.map((event) => event.eventData.value)),
        maturity: decodeAssetFromTransferSingleEventData(
          events[0].eventLog.data,
        ).timestamp,
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
      return {
        hyperdriveAddress,
        assetId,
        bondAmount: sumBigInt(events.map((event) => event.eventData.value)),
        maturity: decodeAssetFromTransferSingleEventData(
          events[0].eventLog.data,
        ).timestamp,
      };
    },
  );

  const openLongsById = mapValues(
    longsMintedOrReceivedById,
    (long, key): Long => {
      const matchingExit = longsRedeemedOrSentById[key];
      if (matchingExit) {
        const newBondAmount = long.bondAmount - matchingExit.bondAmount;
        return { ...long, bondAmount: newBondAmount };
      }
      return long;
    },
  );

  return Object.values(openLongsById).filter((long) => long.bondAmount);
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
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
    queryKey: [
      "@hyperdrive/core",
      "open-longs",
      { hyperdriveAddress, account },
    ],
    queryFn: queryEnabled
      ? () => getOpenLongs({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
