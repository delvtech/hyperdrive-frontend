import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseCloseLongOptions {
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

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  closeLongStatus: MutationStatus;
}

export function useCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onSubmitted,
  onExecuted,
}: UseCloseLongOptions): UseCloseLongResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();

  const mutationEnabled =
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    !!hyperdriveModel &&
    !!publicClient;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        function onTransactionMined(txHash: Hash) {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Long closed" txHash={hash} />,
            { id: hash, duration: SUCCESS_TOAST_DURATION },
          );
          onExecuted?.(txHash);
        }
        const hash = asBase
          ? await hyperdriveModel.closeLongWithBase({
              args: {
                bondAmountIn,
                minAmountOut,
                destination,
                maturityTime,
              },
              onTransactionMined,
            })
          : await hyperdriveModel.closeLongWithShares({
              args: {
                bondAmountIn,
                minAmountOut,
                destination,
                maturityTime,
              },
              onTransactionMined,
            });

        toast.loading(
          <TransactionToast message="Closing Long..." txHash={hash} />,
          { id: hash },
        );
        onSubmitted?.(hash);

        addTransaction({
          hash,
          description: "Close Long",
        });
      }
    },
  });

  return {
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    closeLongStatus: status,
  };
}
