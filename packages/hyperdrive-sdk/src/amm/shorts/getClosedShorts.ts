import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { makeQueryKey } from "src/makeQueryKey";
import { EventOptions, getClosedShorts } from "@hyperdrive/core";

export interface GetClosedShortsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export function getClosedShortsQuery({
  hyperdriveAddress,
  publicClient,
  traderAddress,
  options,
}: Partial<GetClosedShortsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedShorts>>
> {
  const queryEnabled = !!traderAddress && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("closed-shorts", {
      hyperdriveAddress,
      traderAddress,
      options,
    }),
    queryFn: queryEnabled
      ? () =>
          getClosedShorts({
            traderAddress,
            hyperdriveAddress,
            publicClient,
            options,
          })
      : undefined,
  };
}
