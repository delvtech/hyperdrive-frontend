import { getLpSharesQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

interface UseLpSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useLpShares({
  account,
  hyperdriveAddress,
}: UseLpSharesOptions): {
  lpShares: bigint | undefined;
  lpSharesStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: lpShares, status: lpSharesStatus } = useQuery(
    getLpSharesQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  return { lpShares, lpSharesStatus };
}
