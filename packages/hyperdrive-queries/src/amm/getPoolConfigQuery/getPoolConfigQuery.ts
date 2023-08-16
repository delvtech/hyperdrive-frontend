import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { GetPoolConfigOptions, getPoolConfig } from "@hyperdrive/core";

export function getPoolConfigQuery({
  hyperdriveAddress,
  publicClient,
  options,
}: Partial<GetPoolConfigOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getPoolConfig>>
> {
  const queryEnabled = !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getPoolConfig", { hyperdriveAddress, options }),
    queryFn: queryEnabled
      ? async () =>
          getPoolConfig({
            hyperdriveAddress,
            publicClient,
            options: options,
          })
      : undefined,
    // pool config is static constants, so it never needs to be refreshed
    staleTime: Infinity,
  };
}
