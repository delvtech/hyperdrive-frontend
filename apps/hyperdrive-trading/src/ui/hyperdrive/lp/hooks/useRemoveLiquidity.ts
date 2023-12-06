import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRef } from "react";
import { Address } from "wagmi";
interface UseRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
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
  minBaseAmountOut,
  destination,
  asBase = true,
  enabled,
  onExecuted,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const submittedHashRef = useRef<string | undefined>(undefined);
  const mutationEnabled =
    !!lpSharesIn &&
    minBaseAmountOut !== undefined &&
    !!destination &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        /**
         *
         * state:
         * 100k lp shares
         * 20% utilization
         * lp share price is 1.10 base
         * we want to take out 10k base
         *
         *
         * desiredBaseOut / lpSharePrice * 1 / utilizationRatio
         *
         * max input amount: lp shares * lp shares price
         *
         *
         *
         */

        await readWriteHyperdrive.removeLiquidity({
          lpSharesIn,
          minBaseAmountOut,
          destination,
          asBase,
          options: {
            onSubmitted(hash) {
              submittedHashRef.current = hash;
              addTransaction({
                hash,
                description: "Remove Liquidity",
              });
            },
          },
        });
        queryClient.resetQueries();
        onExecuted?.(submittedHashRef.current);
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
