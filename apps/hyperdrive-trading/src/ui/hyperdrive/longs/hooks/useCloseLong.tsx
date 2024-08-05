import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  type MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import type { Address, Hash } from "viem";
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
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const appConfig = useAppConfig();

  const mutationEnabled =
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // if closing to shares, make sure the minimum shares out gets
      // prepared before going into the sdk
      const finalMinAmountOut = asBase
        ? minAmountOut
        : await prepareSharesIn({
            appConfig,
            hyperdriveAddress,
            sharesAmount: minAmountOut,
            readHyperdrive: readWriteHyperdrive,
          });

      const hash = await readWriteHyperdrive.closeLong({
        args: {
          bondAmountIn,
          minAmountOut: finalMinAmountOut,
          destination,
          maturityTime,
          asBase,
        },
        onTransactionCompleted: (txHash: Hash) => {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Long closed" txHash={hash} />,
            { id: hash, duration: SUCCESS_TOAST_DURATION },
          );
          toastWarpcast();
          onExecuted?.(txHash);
        },
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
    },
    onError(error) {
      const message = parseError({
        error,
      });
      toast.error(message);
    },
  });

  return {
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    closeLongStatus: status,
  };
}
