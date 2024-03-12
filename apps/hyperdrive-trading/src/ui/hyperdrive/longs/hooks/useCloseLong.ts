import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseCloseLongOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted: (hash: string | undefined) => void;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onExecuted,
}: UseCloseLongOptions): UseCloseLongResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();

  const mutationEnabled =
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    !!hyperdriveModel &&
    !!publicClient;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = asBase
          ? await hyperdriveModel.closeLongWithBase({
              bondAmountIn,
              minAmountOut,
              destination,
              maturityTime,
            })
          : await hyperdriveModel.closeLongWithShares({
              bondAmountIn,
              minAmountOut,
              destination,
              maturityTime,
            });

        addTransaction({
          hash,
          description: "Close Long",
        });
        await waitForTransactionAndInvalidateCache({
          publicClient,
          hash,
          queryClient,
        });
        onExecuted?.(hash);
      }
    },
  });

  return {
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    isPendingWalletAction: status === "loading",
  };
}
