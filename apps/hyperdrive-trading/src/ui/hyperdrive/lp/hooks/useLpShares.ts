import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseLpSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
  chainId: number;
}
export function useLpShares({
  account,
  hyperdriveAddress,
  chainId,
}: UseLpSharesOptions): {
  lpShares: bigint | undefined;
  lpSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: lpShares, status: lpSharesStatus } = useQuery({
    queryKey: makeQueryKey("lpShares", { account, hyperdriveAddress, chainId }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getLpShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { lpShares, lpSharesStatus };
}
