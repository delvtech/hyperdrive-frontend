import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
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
  onSubmitted: (hash: string | undefined) => void;
  onExecuted: (hash: string | undefined) => void;
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
  onExecuted,
  onSubmitted,
  ethValue,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);

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
