import { makeQueryKey } from "src/makeQueryKey";
import { QueryObserverOptions } from "@tanstack/query-core";
import {
  GetRedeemedWithdrawalSharesOptions,
  getRedeemedWithdrawalShares,
} from "@hyperdrive/core";

export function getRedeemedWithdrawalSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetRedeemedWithdrawalSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getRedeemedWithdrawalShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("redeemed-withdrawal-shares", {
      hyperdriveAddress,
      account,
    }),
    queryFn: queryEnabled
      ? () =>
          getRedeemedWithdrawalShares({
            account,
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
