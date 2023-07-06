import { getOpenShortsQuery, Short } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenShortsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

export function useOpenShorts({
  account,
  hyperdriveAddress,
}: UseOpenShortsOptions): {
  openShorts: Short[] | undefined;
  openShortsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const { data: openShorts, status: openShortsStatus } = useQuery(
    getOpenShortsQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );
  console.log("openShorts", openShorts);

  return { openShorts, openShortsStatus };
}
