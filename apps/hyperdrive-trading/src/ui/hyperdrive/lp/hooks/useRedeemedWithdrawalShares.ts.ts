import { RedeemedWithdrawalShares } from "@hyperdrive/core";
import { getRedeemedWithdrawalSharesQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

interface UseRedeemedWithdrawalSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useRedeemedWithdrawalShares({
  account,
  hyperdriveAddress,
}: UseRedeemedWithdrawalSharesOptions): {
  redeemedWithdrawalShares: RedeemedWithdrawalShares[] | undefined;
  redeemedWithdrawlSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const {
    data: redeemedWithdrawalShares,
    status: redeemedWithdrawlSharesStatus,
  } = useQuery(
    getRedeemedWithdrawalSharesQuery({
      account,
      hyperdriveAddress,
      publicClient,
    }),
  );
  return { redeemedWithdrawalShares, redeemedWithdrawlSharesStatus };
}
