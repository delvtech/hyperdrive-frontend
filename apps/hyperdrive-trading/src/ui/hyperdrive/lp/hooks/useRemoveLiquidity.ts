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
  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (
        !!lpSharesIn &&
        minBaseAmountOut !== undefined &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
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
        queryClient.invalidateQueries();
      }
    },
  });
  return {
    removeLiquidity,
    removeLiquidityStatus: status,
  };
}
