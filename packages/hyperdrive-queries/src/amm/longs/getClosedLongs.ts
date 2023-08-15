import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { GetCloseLongsOptions, getClosedLongs } from "@hyperdrive/core";

export function getCloseLongsQuery({
  hyperdriveAddress,
  publicClient,
  traderAddress: account,
  options,
}: Partial<GetCloseLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("closed-longs", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () =>
          getClosedLongs({
            traderAddress: account,
            hyperdriveAddress,
            publicClient,
            options,
          })
      : undefined,
  };
}
