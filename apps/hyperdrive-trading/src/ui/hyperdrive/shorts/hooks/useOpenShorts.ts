import { OpenShort } from "@hyperdrive/sdk/src/shorts/types";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseOpenShortsOptions {
  account: Address;
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
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: openShorts, status: openShortsStatus } = useQuery({
    queryKey: makeQueryKey("openShorts", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => readHyperdrive.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { openShorts, openShortsStatus };
}
