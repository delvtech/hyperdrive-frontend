import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address } from "viem";
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
        const hash = asBase
          ? await hyperdriveModel.addLiquidityWithBase({
              contribution,
              minAPR,
              minLpSharePrice,
              maxAPR,
              destination,
              ethValue,
            })
          : await hyperdriveModel.addLiquidityWithShares({
              contribution,
              minAPR,
              minLpSharePrice,
              maxAPR,
              destination,
              ethValue,
            });

        addTransaction({
          hash,
          description: "Add Liquidity",
        });

        await waitForTransactionAndInvalidateCache({
          hash,
          queryClient,
          publicClient,
        });
        onExecuted?.(hash);
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
