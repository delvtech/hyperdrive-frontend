import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
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
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (
        !!maturityTime &&
        !!bondAmountIn &&
        minAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        enabled &&
        !!readWriteHyperdrive &&
        !!publicClient
      ) {
        const hash = await readWriteHyperdrive.closeShort({
          bondAmountIn,
          minAmountOut,
          destination,
          asBase,
          maturityTime,
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
