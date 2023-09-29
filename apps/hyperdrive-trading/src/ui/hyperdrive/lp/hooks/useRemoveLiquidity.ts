import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Address } from "wagmi";
interface UseRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseRemoveLiquidityResult {
  removeLiquidity: (() => void) | undefined;
  removeLiquidityStatus: MutationStatus;
}

export function useRemoveLiquidity({
  hyperdriveAddress,
  lpSharesIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!lpSharesIn &&
    minBaseAmountOut !== undefined &&
    !!destination &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        await readWriteHyperdrive.removeLiquidity({
          lpSharesIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
          options: {
            onSubmitted(hash) {
              addTransaction({
                hash,
                description: "Remove Liquidity",
              });
            },
          },
        });
        queryClient.resetQueries();
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
