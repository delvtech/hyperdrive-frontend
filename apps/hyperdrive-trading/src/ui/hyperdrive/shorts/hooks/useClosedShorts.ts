import { ClosedShort } from "@delvtech/hyperdrive-js-core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseClosedShortsOptions {
  chainId: number;
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of shorts that the account has closed out of
 */
export function useClosedShorts({
  account,
  chainId,
  hyperdriveAddress,
}: UseClosedShortsOptions): {
  closedShorts: ClosedShort[] | undefined;
  closedShortsStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedShorts, status: closedShortsStatus } = useQuery({
    queryKey: makeQueryKey("closedShorts", {
      account,
      hyperdriveAddress,
      chainId,
    }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getClosedShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { closedShorts, closedShortsStatus };
}
