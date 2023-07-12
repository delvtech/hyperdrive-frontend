import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, Transport, Chain } from "viem";
import { getCloseShortEvents } from "src/amm/shorts/getCloseShortEvents";
import { ClosedShort } from "src/amm/shorts/types";

export interface GetClosedShortsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getClosedShorts({
  traderAddress,
  hyperdriveAddress,
  publicClient,
}: GetClosedShortsOptions): Promise<ClosedShort[]> {
  const closedShorts = await getCloseShortEvents({
    args: { traderAddress },
    hyperdriveAddress,
    publicClient,
  });

  const closedShortsById = await Promise.all(
    closedShorts.map(async (event) => {
      const {
        eventData: { assetId, maturityTime, baseAmount, bondAmount },
      } = event;
      return {
        hyperdriveAddress,
        assetId,
        maturity: maturityTime,
        bondAmount,
        baseAmount,
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );

  return await Promise.all([...Object.values(closedShortsById)]);
}

export function getClosedShortsQuery({
  hyperdriveAddress,
  publicClient,
  traderAddress,
}: Partial<GetClosedShortsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedShorts>>
> {
  const queryEnabled = !!traderAddress && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: [
      "@hyperdrive/core",
      "closed-shorts",
      { hyperdriveAddress, traderAddress },
    ],
    queryFn: queryEnabled
      ? () =>
          getClosedShorts({
            traderAddress,
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
