import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBy";
import { decodeAssetId } from "src/pools/assetId";
import { getTransferSingleEvents } from "src/pools/getTransferSingleEvents";
import {
  PublicClient,
  decodeEventLog,
  Address,
  Transport,
  Chain,
  zeroAddress,
} from "viem";

export interface GetOpenLongsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

interface Long {
  hyperdriveAddress: Address;
  assetId: bigint;
  amount: bigint;
  maturity: number;
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
      decodeAssetId(transferSingleEvent.eventLog.data).assetType === "LONG",
  );

  const longsMintedOrReceivedById = mapValues(
    groupBy(longsMintedOrReceived, (event) => event.eventData.id),
    (events): Long => {
      const assetId = events[0].eventData.id;
      return {
        hyperdriveAddress,
        assetId,
        amount: sumBigInt(events.map((event) => event.eventData.value)),
        maturity: decodeAssetId(events[0].eventLog.data).timestamp,
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
      decodeAssetId(transferSingleEvent.eventLog.data).assetType === "LONG",
  );
  const longsRedeemedOrSentById = mapValues(
    groupBy(longsRedeemedOrSent, (event) => event.eventData.id),
    (events): Long => {
      const assetId = events[0].eventData.id;
      return {
        hyperdriveAddress,
        assetId,
        amount: sumBigInt(events.map((event) => event.eventData.value)),
        maturity: decodeAssetId(events[0].eventLog.data).timestamp,
      };
    },
  );

  const openLongsById = mapValues(longsMintedOrReceivedById, (long, key) => {
    const matchingExit = longsRedeemedOrSentById[key];
    if (matchingExit) {
      const newAmount = long.amount - matchingExit.amount;
      return { ...long, amount: newAmount };
    }
    return long;
  });

  return Object.values(openLongsById);
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
export function getLongsQuery({
  hyperdriveAddress,
  publicClient,
  account,
}: Partial<GetOpenLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getOpenLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: ["longs", { hyperdriveAddress, account }],
    queryFn: queryEnabled
      ? () => getOpenLongs({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
