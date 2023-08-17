import {
  GetWithdrawalSharesOptions,
  getWithdrawalShares,
} from "@hyperdrive/core";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";

export function getWithdrawalSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
  options,
}: Partial<GetWithdrawalSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getWithdrawalShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("withdrawal-shares", {
      hyperdriveAddress,
      account,
      options,
    }),
    queryFn: queryEnabled
      ? () =>
          getWithdrawalShares({
            account,
            hyperdriveAddress,
            publicClient,
            options,
          })
      : undefined,
  };
}
