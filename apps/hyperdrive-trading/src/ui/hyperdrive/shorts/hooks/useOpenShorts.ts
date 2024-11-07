import { OpenShort } from "@delvtech/hyperdrive-js-core";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseOpenShortsOptions {
  chainId: number;
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useOpenShorts({
  account,
  chainId,
  hyperdriveAddress,
}: UseOpenShortsOptions): {
  openShorts: OpenShort[] | undefined;
  openShortsStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: openShorts, status: openShortsStatus } = useQuery({
    queryKey: makeQueryKey("openShorts", {
      chainId,
      account,
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { openShorts, openShortsStatus };
}
