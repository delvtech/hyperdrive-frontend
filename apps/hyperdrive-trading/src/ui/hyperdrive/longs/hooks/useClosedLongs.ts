import type { ClosedLong } from "@delvtech/hyperdrive-viem";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

interface UseClosedLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of longs that the account has closed out of
 */
export function useClosedLongs({
  account,
  hyperdriveAddress,
}: UseClosedLongsOptions): {
  closedLongs: ClosedLong[] | undefined;
  closedLongsStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account && !!hyperdriveAddress;
  const { data: closedLongs, status: closedLongsStatus } = useQuery({
    queryKey: makeQueryKey("closedLongs", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getClosedLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { closedLongs, closedLongsStatus };
}
