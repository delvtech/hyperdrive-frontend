import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
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
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const isMutationEnabled =
    enabled &&
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (isMutationEnabled) {
        const hash = await readWriteHyperdrive.closeShort({
          args: {
            bondAmountIn,
            asBase,
            minAmountOut,
            destination,
            maturityTime,
          },
          onTransactionCompleted: (txHash: Hash) => {
            queryClient.invalidateQueries();
            toast.success(
              <TransactionToast message="Short closed" txHash={txHash} />,
              { id: txHash, duration: SUCCESS_TOAST_DURATION },
            );
            toastWarpcast();
            onExecuted?.(txHash);
          },
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
    onError(error) {
      const message = parseError({
        error,
      });
      toast.error(message);
    },
  });

  return {
    closeShort: isMutationEnabled ? closeShort : undefined,
    closeShortStatus: status,
  };
}
