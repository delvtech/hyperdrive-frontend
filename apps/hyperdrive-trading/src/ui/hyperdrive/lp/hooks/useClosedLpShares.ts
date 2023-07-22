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
  lpShares: ClosedLpShares[] | undefined;
  lpSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: lpShares, status: lpSharesStatus } = useQuery(
    getClosedLpSharesQuery({
      providerAddress: account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  return { lpShares, lpSharesStatus };
}
