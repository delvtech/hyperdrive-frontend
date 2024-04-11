import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { callWarpcastToast } from "src/ui/base/components/Toaster/WarpcastToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useReadWriteHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadWriteHyperdriveModel";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";
interface UseAddLiquidityOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  minLpSharePrice: bigint | undefined;
  maxAPR: bigint | undefined;
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
  hyperdriveAddress,
  destination,
  contribution,
  minAPR,
  minLpSharePrice,
  maxAPR,
  asBase = true,
  enabled,
  onSubmitted,
  onExecuted,
  ethValue,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const hyperdriveModel = useReadWriteHyperdriveModel(hyperdriveAddress);

  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();

  const mutationEnabled =
    !!contribution &&
    minAPR !== undefined &&
    minLpSharePrice !== undefined &&
    maxAPR !== undefined &&
    !!destination &&
    enabled &&
    !!publicClient &&
    !!hyperdriveModel;

  const { mutate: addLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        function onTransactionMined(txHash: Hash) {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Liquidity added" txHash={txHash} />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          setTimeout(() => {
            callWarpcastToast();
          }, SUCCESS_TOAST_DURATION);
          onExecuted?.(txHash);
        }
        const hash = asBase
          ? await hyperdriveModel.addLiquidityWithBase({
              args: {
                contribution,
                minAPR,
                minLpSharePrice,
                maxAPR,
                destination,
              },
              options: { value: ethValue },
              onTransactionMined,
            })
          : await hyperdriveModel.addLiquidityWithShares({
              args: {
                contribution,
                minAPR,
                minLpSharePrice,
                maxAPR,
                destination,
              },
              options: { value: ethValue },
              onTransactionMined,
            });

        toast.loading(
          <TransactionToast message="Adding liquidity..." txHash={hash} />,
          { id: hash },
        );
        onSubmitted(hash);

        addTransaction({
          hash,
          description: "Add Liquidity",
        });
      }
    },
  });

  return {
    // Don't return the `addLiquidity` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    addLiquidity: mutationEnabled ? addLiquidity : undefined,
    addLiquidityStatus: status,
  };
}
