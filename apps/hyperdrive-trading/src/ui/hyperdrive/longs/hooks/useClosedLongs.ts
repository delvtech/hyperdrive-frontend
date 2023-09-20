import { Long } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

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
  closedLongs: Long[] | undefined;
  closedLongsStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!account && !!hyperdriveAddress && !!readHyperdrive;

  const { data: closedLongs, status: closedLongsStatus } = useQuery({
    queryKey: makeQueryKey("closedLongs", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getClosedLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { closedLongs, closedLongsStatus };
}
