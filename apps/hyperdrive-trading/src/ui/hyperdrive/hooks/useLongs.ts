import { getLongsQuery, Long } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

export function useLongs({ account, hyperdriveAddress }: UseLongsOptions): {
  longs: Long[] | undefined;
  longsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const { data: longs, status: longsStatus } = useQuery(
    getLongsQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );

  return { longs, longsStatus };
}
