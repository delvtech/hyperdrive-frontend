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
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted?: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  closeShortStatus: MutationStatus;
}

export function useCloseShort({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onSubmitted,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const hyperdriveModel = useReadWriteHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const isMutationEnabled =
    enabled &&
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    !!hyperdriveModel &&
    !!publicClient;

  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (isMutationEnabled) {
        function onTransactionCompleted(txHash: Hash) {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Short closed" txHash={txHash} />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          toastWarpcast();
          onExecuted?.(txHash);
        }

        const hash = asBase
          ? await hyperdriveModel.closeShortWithBase({
              args: {
                bondAmountIn,
                minAmountOut,
                destination,
                maturityTime,
              },
              onTransactionCompleted,
            })
          : await hyperdriveModel.closeShortWithShares({
              args: {
                bondAmountIn,
                destination,
                maturityTime,
                minAmountOut,
              },
              onTransactionCompleted,
            });

        toast.loading(
          <TransactionToast message="Closing Short..." txHash={hash} />,
          { id: hash },
        );
        onSubmitted?.(hash);

        addTransaction({
          hash,
          description: "Close Short",
        });
      }
    },
  });

  return {
    closeShort: isMutationEnabled ? closeShort : undefined,
    closeShortStatus: status,
  };
}
