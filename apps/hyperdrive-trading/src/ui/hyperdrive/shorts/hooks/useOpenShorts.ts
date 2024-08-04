import type { OpenShort } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
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
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: openShorts, status: openShortsStatus } = useQuery({
    queryKey: makeQueryKey("openShorts", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { openShorts, openShortsStatus };
}
