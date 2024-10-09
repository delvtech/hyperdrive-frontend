import { appConfig } from "@delvtech/hyperdrive-appconfig";
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
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import { Address, Hash } from "viem";
interface UseAddLiquidityOptions {
  chainId: number;
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minApr: bigint | undefined;
  minLpSharePrice: bigint | undefined;
  maxApr: bigint | undefined;
  asBase?: boolean;
  ethValue?: bigint;
  /** Controls whether or not an `addLiquidity` callback will be returned to the
   * caller, useful for disabling buttons and other hooks */
  enabled?: boolean;
  onSubmitted: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseAddLiquidityResult {
  addLiquidity: (() => void) | undefined;
  addLiquidityStatus: MutationStatus;
}

export function useAddLiquidity({
  chainId,
  hyperdriveAddress,
  destination,
  contribution,
  minApr,
  minLpSharePrice,
  maxApr,
  asBase = true,
  enabled,
  onSubmitted,
  onExecuted,
  ethValue,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();

  const mutationEnabled =
    !!contribution &&
    minApr !== undefined &&
    minLpSharePrice !== undefined &&
    maxApr !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { mutate: addLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // if you're adding shares as liquidity make sure they get prepared before
      // going into the sdk
      const finalContribution = asBase
        ? contribution
        : await prepareSharesIn({
            appConfig,
            chainId,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: contribution,
          });

      const hash = await readWriteHyperdrive.addLiquidity({
        args: {
          contribution: finalContribution,
          asBase,
          minApr,
          minLpSharePrice,
          maxApr,
          destination,
        },
        options: { value: ethValue },
        onTransactionCompleted: (txHash: Hash) => {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast
              chainId={chainId}
              message="Liquidity added"
              txHash={txHash}
            />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          toastWarpcast();
          onExecuted?.(txHash);
        },
      });

      toast.loading(
        <TransactionToast
          chainId={chainId}
          message="Adding liquidity..."
          txHash={hash}
        />,
        { id: hash },
      );
      onSubmitted(hash);

      addTransaction({
        hash,
        description: "Add Liquidity",
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
    // Don't return the `addLiquidity` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    addLiquidity: mutationEnabled ? addLiquidity : undefined,
    addLiquidityStatus: status,
  };
}
