import { ClosedLong, getCloseLongsQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { PublicClient, usePublicClient } from "wagmi";

interface UseClosedLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of longs that the account has closed out of
 */
export function useClosedLongs({
  account,
  hyperdriveAddress,
}: UseClosedLongsOptions): {
  closedLongs: ClosedLong[] | undefined;
  closedLongsStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const { data: closedLongs, status: closedLongsStatus } = useQuery(
    getCloseLongsQuery({
      traderAddress: account,
      hyperdriveAddress,
      publicClient: publicClient as PublicClient,
    }),
  );

  return { closedLongs, closedLongsStatus };
}
