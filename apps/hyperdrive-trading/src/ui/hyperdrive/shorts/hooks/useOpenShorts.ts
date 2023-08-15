import { OpenShort } from "@hyperdrive/core";
import { getOpenShortsQuery } from "@hyperdrive/queries";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
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
      publicClient,
    }),
  );

  return { openShorts, openShortsStatus };
}
