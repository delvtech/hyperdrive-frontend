import type { ClosedShort } from "@delvtech/hyperdrive-viem";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

interface UseClosedShortsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of shorts that the account has closed out of
 */
export function useClosedShorts({
  account,
  hyperdriveAddress,
}: UseClosedShortsOptions): {
  closedShorts: ClosedShort[] | undefined;
  closedShortsStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedShorts, status: closedShortsStatus } = useQuery({
    queryKey: makeQueryKey("closedShorts", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getClosedShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { closedShorts, closedShortsStatus };
}
