import { ClosedShort, getClosedShortsQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, PublicClient } from "viem";
import { usePublicClient } from "wagmi";

interface UseClosedShortsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of shorts that the account has closed out of
 */
export function useClosedShorts({
  account,
  hyperdriveAddress,
}: UseClosedShortsOptions): {
  closedShorts: ClosedShort[] | undefined;
  closedShortsStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: closedShorts, status: closedShortsStatus } = useQuery(
    getClosedShortsQuery({
      traderAddress: account,
      hyperdriveAddress,
      publicClient: publicClient as PublicClient,
    }),
  );

  return { closedShorts, closedShortsStatus };
}
