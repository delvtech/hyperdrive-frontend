import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseWithdrawalSharesOptions {
  chainId: number;
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useWithdrawalShares({
  account,
  chainId,
  hyperdriveAddress,
}: UseWithdrawalSharesOptions): {
  withdrawalShares: bigint | undefined;
  withdrawalSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: withdrawalShares, status: withdrawalSharesStatus } = useQuery({
    queryKey: makeQueryKey("withdrawalShares", {
      account,
      hyperdriveAddress,
      chainId,
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getWithdrawalShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { withdrawalShares, withdrawalSharesStatus };
}
