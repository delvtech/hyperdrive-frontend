import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
interface UseLpSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useLpShares({
  account,
  hyperdriveAddress,
}: UseLpSharesOptions): {
  lpShares: bigint | undefined;
  lpSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: lpShares, status: lpSharesStatus } = useQuery({
    queryKey: makeQueryKey("lpShares", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getLpShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { lpShares, lpSharesStatus };
}
