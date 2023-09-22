import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
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
  const addTransaction = useAddRecentTransaction();
  const { mutate: redeemWithdrawalShares, status } = useMutation({
    mutationFn: async () => {
      if (
        !!withdrawalSharesIn &&
        minBaseAmountOutPerShare !== undefined &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        await readWriteHyperdrive.redeemWithdrawalShares({
          withdrawalSharesIn,
          minBaseAmountOutPerShare,
          destination,
          asUnderlying,
          options: {
            onSubmitted(hash) {
              addTransaction({
                hash,
                description: "redeemWithdrawalShares",
              });
            },
          },
        });
        queryClient.invalidateQueries();
      }
    },
  });

  return {
    redeemWithdrawalShares,
    redeemWithdrawalSharesStatus: status,
  };
}
