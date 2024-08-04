import type { ClosedLpShares } from "@delvtech/hyperdrive-viem";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
interface UseClosedLpSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useClosedLpShares({
  account,
  hyperdriveAddress,
}: UseClosedLpSharesOptions): {
  closedLpShares: ClosedLpShares[] | undefined;
  closedLpSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedLpShares, status: closedLpSharesStatus } = useQuery({
    queryKey: makeQueryKey("closedLpShares", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getClosedLpShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { closedLpShares: closedLpShares, closedLpSharesStatus };
}
