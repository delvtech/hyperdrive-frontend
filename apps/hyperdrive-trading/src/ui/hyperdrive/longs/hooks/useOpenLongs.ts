import { getOpenLongsQuery, Long } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of longs that the account currently has open.
 */
export function useOpenLongs({
  account,
  hyperdriveAddress,
}: UseOpenLongsOptions): {
  openLongs: Long[] | undefined;
  openLongsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const { data: openLongs, status: openLongsStatus } = useQuery(
    getOpenLongsQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );

  return { openLongs, openLongsStatus };
}
