import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";
interface UseWithdrawalSharesOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useWithdrawalShares({
  account,
  hyperdriveAddress,
}: UseWithdrawalSharesOptions): {
  withdrawalShares: bigint | undefined;
  withdrawalSharesStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: withdrawalShares, status: withdrawalSharesStatus } = useQuery({
    queryKey: makeQueryKey("withdrawalShares", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => await readHyperdrive.getWithdrawalShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return { withdrawalShares, withdrawalSharesStatus };
}
