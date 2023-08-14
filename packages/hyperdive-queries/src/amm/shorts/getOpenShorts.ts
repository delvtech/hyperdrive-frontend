import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { makeQueryKey } from "src/makeQueryKey";
import { getOpenShorts } from "@hyperdrive/core";

export interface GetOpenShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

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
    queryKey: makeQueryKey("open-shorts", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () => getOpenShorts({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
