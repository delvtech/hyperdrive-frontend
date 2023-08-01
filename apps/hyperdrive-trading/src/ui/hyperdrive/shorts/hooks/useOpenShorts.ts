import { getOpenShortsQuery, OpenShort } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address, PublicClient } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenShortsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useOpenShorts({
  account,
  hyperdriveAddress,
}: UseOpenShortsOptions): {
  openShorts: OpenShort[] | undefined;
  openShortsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const { data: openShorts, status: openShortsStatus } = useQuery(
    getOpenShortsQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as PublicClient,
    }),
  );

  return { openShorts, openShortsStatus };
}
