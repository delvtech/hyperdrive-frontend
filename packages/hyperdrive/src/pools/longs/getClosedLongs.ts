import { QueryObserverOptions } from "@tanstack/query-core";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { sumBigInt } from "src/base/sumBy";
import { PublicClient, Address, Transport, Chain } from "viem";
import { ClosedLong, Long } from "./types";
import { getCloseLongEvents } from "src/pools/longs/getCloseLongEvents";

export interface GetClosedLongsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
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

  // users may close a long position in parts, so we need to sum the events
  const closedLongsById = mapValues(
    groupBy(closedLongs, (event) => event.eventData.assetId),
    (events): ClosedLong => {
      const { assetId, maturityTime } = events[0].eventData;
      return {
        hyperdriveAddress,
        assetId,
        maturity: maturityTime,
        bondAmount: sumBigInt(
          events.map((event) => event.eventData.bondAmount),
        ),
        baseAmount: sumBigInt(
          events.map((event) => event.eventData.baseAmount),
        ),
      };
    },
  );

  return Object.values(closedLongsById).filter((long) => long.bondAmount);
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
    queryKey: ["closed-longs", { hyperdriveAddress, account }],
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
