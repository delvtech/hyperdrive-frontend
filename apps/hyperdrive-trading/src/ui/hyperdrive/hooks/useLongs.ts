import { getOpenLongsQuery, Long } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

export function useOpenLongs({ account, hyperdriveAddress }: UseLongsOptions): {
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
