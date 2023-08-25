import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { HyperdriveContract, getPoolConfig } from "@hyperdrive/core";

export function getPoolConfigQuery(
  contract: HyperdriveContract | undefined,
): QueryObserverOptions<Awaited<ReturnType<typeof getPoolConfig>>> {
  const queryEnabled = !!contract;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getPoolConfig", { address: contract?.address }),
    queryFn: queryEnabled ? () => getPoolConfig(contract) : undefined,
    // pool config is static constants, so it never needs to be refreshed
    staleTime: Infinity,
  };
}
