import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBy";
import { decodeAssetFromTransferSingleEventData } from "src/amm/events/decodeAssetFromTransferSingleEventData";
import { getTransferSingleEvents } from "src/amm/events/getTransferSingleEvents";
import { PublicClient, Address, Transport, Chain } from "viem";
import { Short } from "src/amm/shorts/types";

export interface GetOpenShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getOpenShorts({
  account,
  hyperdriveAddress,
  publicClient,
}: GetOpenShortsOptions): Promise<Short[]> {
  // get all the transfers where the user was the recipient,
  // ie: mints from the 0x address and transfers from other wallets
  const shortsMintedOrReceived = (
    await getTransferSingleEvents({
      args: { toAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    (transferSingleEvent) =>
      decodeAssetFromTransferSingleEventData(transferSingleEvent.eventLog.data)
        .assetType === "SHORT",
  );

  const shortsMintedOrReceivedById = mapValues(
    groupBy(shortsMintedOrReceived, (event) => event.eventData.id),
    (events): Short => {
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
  const shortsRedeemedOrSent = (
    await getTransferSingleEvents({
      args: { fromAddress: account },
      hyperdriveAddress,
      publicClient,
    })
  ).filter(
    (transferSingleEvent) =>
      decodeAssetFromTransferSingleEventData(transferSingleEvent.eventLog.data)
        .assetType === "SHORT",
  );
  const shortsRedeemedOrSentById = mapValues(
    groupBy(shortsRedeemedOrSent, (event) => event.eventData.id),
    (events): Short => {
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

  const openShortsById = mapValues(
    shortsMintedOrReceivedById,
    (short, key): Short => {
      const matchingExit = shortsRedeemedOrSentById[key];
      if (matchingExit) {
        const newBondAmount = short.bondAmount - matchingExit.bondAmount;
        return { ...short, bondAmount: newBondAmount };
      }
      return short;
    },
  );

  return Object.values(openShortsById).filter((short) => short.bondAmount);
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
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
    queryKey: [
      "@hyperdrive/core",
      "open-shorts",
      { hyperdriveAddress, account },
    ],
    queryFn: queryEnabled
      ? () => getOpenShorts({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
