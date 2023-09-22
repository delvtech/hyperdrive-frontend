import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Address } from "wagmi";
interface UseRedeemWithdrawalSharesOptions {
  hyperdriveAddress: Address;
  withdrawalSharesIn: bigint | undefined;
  minBaseAmountOutPerShare: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseRedeemWithdrawalSharesResult {
  redeemWithdrawalShares: (() => void) | undefined;
  redeemWithdrawalSharesStatus: MutationStatus;
}

export function useRedeemWithdrawalShares({
  hyperdriveAddress,
  withdrawalSharesIn,
  minBaseAmountOutPerShare,
  destination,
  asUnderlying = true,
  enabled,
}: UseRedeemWithdrawalSharesOptions): UseRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();

  const { mutate: redeemWithdrawalShares, status } = useMutation({
    mutationFn: async () => {
      if (
        !!withdrawalSharesIn &&
        minBaseAmountOutPerShare !== undefined &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        readWriteHyperdrive.redeemWithdrawalShares({
          withdrawalSharesIn,
          minBaseAmountOutPerShare,
          destination,
          asUnderlying,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return {
    redeemWithdrawalShares,
    redeemWithdrawalSharesStatus: status,
  };
}
