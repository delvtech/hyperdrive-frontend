import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted: (hash: string | undefined) => void;
  onExecuted: (hash: string | undefined) => void;
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
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
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
