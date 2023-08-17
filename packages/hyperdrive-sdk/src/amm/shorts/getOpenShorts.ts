import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { makeQueryKey } from "src/makeQueryKey";
import { EventOptions, getOpenShorts } from "@hyperdrive/core";

export interface GetOpenShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export function getOpenShortsQuery({
  hyperdriveAddress,
  publicClient,
  account,
  options,
}: Partial<GetOpenShortsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getOpenShorts>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("open-shorts", {
      hyperdriveAddress,
      account,
      options,
    }),
    queryFn: queryEnabled
      ? () =>
          getOpenShorts({ account, hyperdriveAddress, publicClient, options })
      : undefined,
  };
}
