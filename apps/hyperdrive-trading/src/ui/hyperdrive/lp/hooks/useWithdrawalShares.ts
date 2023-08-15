import { getWithdrawalSharesQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

interface UseWithdrawalSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useWithdrawalShares({
  account,
  hyperdriveAddress,
}: UseWithdrawalSharesOptions): {
  withdrawalShares: bigint | undefined;
  withdrawalSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: withdrawalShares, status: withdrawalSharesStatus } = useQuery(
    getWithdrawalSharesQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient,
    }),
  );
  return { withdrawalShares, withdrawalSharesStatus };
}
