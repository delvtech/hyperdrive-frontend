import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { GetPoolInfoOptions, getPoolInfo } from "@hyperdrive/core";

export function getPoolInfoQuery({
  hyperdriveAddress,
  publicClient,
  options,
}: Partial<GetPoolInfoOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getPoolInfo>>
> {
  const queryEnabled = !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getPoolInfo", { hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () =>
          getPoolInfo({
            hyperdriveAddress,
            publicClient,
            options,
          })
      : undefined,
  };
}
