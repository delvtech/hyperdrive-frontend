import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
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
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
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
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: addLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.addLiquidity({
          contribution,
          minAPR,
          minLpSharePrice,
          maxAPR,
          destination,
          asBase,
        });
        addTransaction({
          hash,
          description: "Add Liquidity",
        });
        await publicClient.waitForTransactionReceipt({ hash });
        queryClient.resetQueries();
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
