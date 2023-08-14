import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { ClosedLong } from "./types";
import { getCloseLongEvents } from "src/amm/longs/getCloseLongEvents";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetClosedLongsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getClosedLongs({
  traderAddress,
  hyperdriveAddress,
  publicClient,
}: GetClosedLongsOptions): Promise<ClosedLong[]> {
  const closedLongs = await getCloseLongEvents({
    args: { traderAddress },
    hyperdriveAddress,
    publicClient,
  });

  const closedLongsById = await Promise.all(
    closedLongs.map(async (event) => {
      const {
        eventData: { assetId, maturityTime, baseAmount, bondAmount },
      } = event;
      return {
        hyperdriveAddress,
        assetId,
        maturity: maturityTime,
        bondAmount,
        baseAmount,
        baseAmountPaid: 0n, // TODO: Remove this
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );

  return Promise.all([...Object.values(closedLongsById)]);
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
export function getCloseLongsQuery({
  hyperdriveAddress,
  publicClient,
  traderAddress: account,
}: Partial<GetClosedLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("closed-longs", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () =>
          getClosedLongs({
            traderAddress: account,
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
