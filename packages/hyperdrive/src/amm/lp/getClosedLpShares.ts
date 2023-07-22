import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, Transport, Chain } from "viem";
import { makeQueryKey } from "src/makeQueryKey";
import { getRemoveLiquidityEvents } from "src/amm/lp/getRemoveLiquidityEvents";

export interface GetClosedLpSharesOptions {
  providerAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export interface ClosedLpShares {
  hyperdriveAddress: `0x${string}`;
  lpAmount: bigint;
  baseAmount: bigint;
  withdrawalShareAmount: bigint;
  closedTimestamp: bigint;
}

export async function getClosedLpShares({
  providerAddress,
  hyperdriveAddress,
  publicClient,
}: GetClosedLpSharesOptions): Promise<ClosedLpShares[]> {
  const removeLiquidityEvents = await getRemoveLiquidityEvents({
    args: { providerAddress },
    hyperdriveAddress,
    publicClient,
  });

  return Promise.all(
    removeLiquidityEvents.map(async (event) => {
      const {
        eventData: { lpAmount, baseAmount, withdrawalShareAmount },
      } = event;
      return {
        hyperdriveAddress,
        lpAmount,
        baseAmount,
        withdrawalShareAmount,
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );
}

export function getClosedLpSharesQuery({
  hyperdriveAddress,
  publicClient,
  providerAddress,
}: Partial<GetClosedLpSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedLpShares>>
> {
  const queryEnabled =
    !!providerAddress && !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("remove-liquidity", {
      hyperdriveAddress,
      providerAddress,
    }),
    queryFn: queryEnabled
      ? () =>
          getClosedLpShares({
            providerAddress: providerAddress,
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
