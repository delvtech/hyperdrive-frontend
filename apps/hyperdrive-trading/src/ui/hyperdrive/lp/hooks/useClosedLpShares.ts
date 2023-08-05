import { ClosedLpShares, getClosedLpSharesQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

interface UseClosedLpSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useClosedLpShares({
  account,
  hyperdriveAddress,
}: UseClosedLpSharesOptions): {
  closedLpShares: ClosedLpShares[] | undefined;
  closedLpSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: closedLpShares, status: closedLpSharesStatus } = useQuery(
    getClosedLpSharesQuery({
      providerAddress: account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  return { closedLpShares: closedLpShares, closedLpSharesStatus };
}
