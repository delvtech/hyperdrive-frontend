import {
  getRedeemedWithdrawalSharesQuery,
  RedeemedWithdrawalShares,
} from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
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
} {
  const publicClient = usePublicClient();
  const { data: redeemedWithdrawalShares } = useQuery(
    getRedeemedWithdrawalSharesQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  return { redeemedWithdrawalShares };
}
