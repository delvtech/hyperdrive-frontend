import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted: (hash: string | undefined) => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseShort({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (
        enabled &&
        !!maturityTime &&
        !!bondAmountIn &&
        minAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        !!hyperdriveModel &&
        !!publicClient
      ) {
        const hash = asBase
          ? await hyperdriveModel.closeShortWithBase({
              bondAmountIn,
              minAmountOut,
              destination,
              maturityTime,
            })
          : await hyperdriveModel.closeShortWithShares({
              bondAmountIn,
              destination,
              maturityTime,
              minAmountOut,
            });

        addTransaction({
          hash,
          description: "Close Short",
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
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
