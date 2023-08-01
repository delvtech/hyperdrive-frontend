import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { getCloseShortEvents } from "src/amm/shorts/getCloseShortEvents";
import { ClosedShort } from "src/amm/shorts/types";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetClosedShortsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
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
        baseAmountReceived: baseAmount,
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
    queryKey: makeQueryKey("closed-shorts", {
      hyperdriveAddress,
      traderAddress,
    }),
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
