import { getWithdrawSharesQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

interface UseWithdrawSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useWithdrawShares({
  account,
  hyperdriveAddress,
}: UseWithdrawSharesOptions): {
  withdrawShares: bigint | undefined;
  withdrawSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: withdrawShares, status: withdrawSharesStatus } = useQuery(
    getWithdrawSharesQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  return { withdrawShares, withdrawSharesStatus };
}
