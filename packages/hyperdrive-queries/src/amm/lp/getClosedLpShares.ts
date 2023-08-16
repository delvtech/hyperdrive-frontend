import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { GetClosedLpSharesOptions, getClosedLpShares } from "@hyperdrive/core";

export function getClosedLpSharesQuery({
  hyperdriveAddress,
  publicClient,
  providerAddress,
  options,
}: Partial<GetClosedLpSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getClosedLpShares>>
> {
  const queryEnabled =
    !!providerAddress && !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("remove-liquidity", {
      hyperdriveAddress,
      providerAddress,
      options,
    }),
    queryFn: queryEnabled
      ? () =>
          getClosedLpShares({
            providerAddress: providerAddress,
            hyperdriveAddress,
            publicClient,
            options,
          })
      : undefined,
  };
}
