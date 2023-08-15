import { PublicClient, Address } from "viem";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { getLpShares } from "@hyperdrive/core";

export interface GetLpSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export function getLpSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetLpSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getLpShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("lp-shares", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () => getLpShares({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
