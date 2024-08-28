import { ClosedLong } from "@delvtech/hyperdrive-viem";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseClosedLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
  chainId: number;
}

/**
 * Returns the list of longs that the account has closed out of
 */
export function useClosedLongs({
  account,
  hyperdriveAddress,
  chainId,
}: UseClosedLongsOptions): {
  closedLongs: ClosedLong[] | undefined;
  closedLongsStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account && !!hyperdriveAddress;
  const { data: closedLongs, status: closedLongsStatus } = useQuery({
    queryKey: makeQueryKey("closedLongs", {
      chainId,
      account,
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getClosedLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });

  return { closedLongs, closedLongsStatus };
}
