import { GetVaultRateQueryOptions, getVaultRate } from "@hyperdrive/core";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";

export function getVaultRateQuery({
  vaultAddress,
  publicClient,
}: GetVaultRateQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getVaultRate>>
> {
  const queryEnabled = !!vaultAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getRate", { tokenAddress: vaultAddress }),
    queryFn: queryEnabled
      ? () =>
          getVaultRate({
            publicClient,
            vaultAddress: vaultAddress,
          })
      : undefined,
  };
}
