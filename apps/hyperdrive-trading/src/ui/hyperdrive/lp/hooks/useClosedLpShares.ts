import { ClosedLpShares } from "@delvtech/hyperdrive-viem";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseClosedLpSharesOptions {
  account: Address | undefined;
  chainId: number;
  hyperdriveAddress: Address | undefined;
}
export function useClosedLpShares({
  account,
  chainId,
  hyperdriveAddress,
}: UseClosedLpSharesOptions): {
  closedLpShares: ClosedLpShares[] | undefined;
  closedLpSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedLpShares, status: closedLpSharesStatus } = useQuery({
    queryKey: makeQueryKey("closedLpShares", {
      chainId,
      account,
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getClosedLpShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { closedLpShares: closedLpShares, closedLpSharesStatus };
}
