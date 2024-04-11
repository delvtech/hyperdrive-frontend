import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useReadWriteHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadWriteHyperdriveModel";
import { toastWarpcast } from "src/ui/social/components/WarpcastToast";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseRemoveLiquidityResult {
  removeLiquidity: (() => void) | undefined;
  removeLiquidityStatus: MutationStatus;
}

export function useRemoveLiquidity({
  hyperdriveAddress,
  lpSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled,
  onSubmitted,
  onExecuted,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const hyperdriveModel = useReadWriteHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    enabled &&
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    !!hyperdriveModel &&
    !!publicClient;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        function onTransactionMined(txHash: Hash) {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Liquidity removed" txHash={txHash} />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          setTimeout(() => {
            toastWarpcast();
          }, SUCCESS_TOAST_DURATION);
          onExecuted?.(txHash);
        }

        const hash = asBase
          ? await hyperdriveModel.removeLiquidityWithBase({
              args: {
                lpSharesIn,
                minOutputPerShare,
                destination,
              },
              onTransactionMined,
            })
          : await hyperdriveModel.removeLiquidityWithShares({
              args: {
                destination,
                lpSharesIn,
                minOutputPerShare,
              },
              onTransactionMined,
            });

        toast.loading(
          <TransactionToast message="Removing liquidity..." txHash={hash} />,
          { id: hash },
        );
        onSubmitted?.(hash);

        addTransaction({
          hash,
          description: "Remove Liquidity",
        });
      }
    },
  });
  return {
    // Don't return the `removeLiquidity` callback if mutation isn't enabled,
    // this makes the hook feel more like useContractWrite from wagmi
    removeLiquidity: mutationEnabled ? removeLiquidity : undefined,
    removeLiquidityStatus: status,
  };
}
