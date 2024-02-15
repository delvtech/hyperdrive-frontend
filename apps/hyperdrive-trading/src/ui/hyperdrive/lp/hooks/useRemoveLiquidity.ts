import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
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
  onExecuted,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.removeLiquidity({
          lpSharesIn,
          minOutputPerShare,
          destination,
          asBase,
        });
        addTransaction({
          hash,
          description: "Remove Liquidity",
        });
        await waitForTransactionAndInvalidateCache({
          publicClient,
          queryClient,
          hash,
        });
        onExecuted?.(hash);
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
