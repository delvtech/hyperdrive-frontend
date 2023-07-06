import { ClosedLong, getCloseLongsQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseClosedLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

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
      publicClient: publicClient as any,
    }),
  );

  return { closedLongs, closedLongsStatus };
}
