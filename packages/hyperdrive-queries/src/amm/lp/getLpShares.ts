import { PublicClient, Address } from "viem";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { ReadCallOptions, getLpShares } from "@hyperdrive/core";

export interface GetLpSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: ReadCallOptions;
}

export function getLpSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
  options,
}: Partial<GetLpSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getLpShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("lp-shares", {
      hyperdriveAddress,
      account,
      options,
    }),
    queryFn: queryEnabled
      ? () => getLpShares({ account, hyperdriveAddress, publicClient, options })
      : undefined,
  };
}
