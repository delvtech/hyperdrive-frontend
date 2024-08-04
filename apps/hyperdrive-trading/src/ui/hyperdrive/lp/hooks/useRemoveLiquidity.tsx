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
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const appConfig = useAppConfig();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    enabled &&
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // If removing lp to shares, make sure the min output per share is
      // prepared before going into the sdk
      const finalMinOutputPerShare = asBase
        ? minOutputPerShare
        : await prepareSharesIn({
            appConfig,
            hyperdriveAddress,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: minOutputPerShare,
          });

      const hash = await readWriteHyperdrive.removeLiquidity({
        args: {
          asBase,
          lpSharesIn,
          minOutputPerShare: finalMinOutputPerShare,
          destination,
        },
        onTransactionCompleted: (txHash: Hash) => {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Liquidity removed" txHash={txHash} />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          toastWarpcast();
          onExecuted?.(txHash);
        },
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
    },
    onError(error) {
      const message = parseError({
        error,
      });
      toast.error(message);
    },
  });
  return {
    // Don't return the `removeLiquidity` callback if mutation isn't enabled,
    // this makes the hook feel more like useContractWrite from wagmi
    removeLiquidity: mutationEnabled ? removeLiquidity : undefined,
    removeLiquidityStatus: status,
  };
}
