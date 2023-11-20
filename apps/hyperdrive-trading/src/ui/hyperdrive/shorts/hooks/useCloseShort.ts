import { Short } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UseCloseShortOptions {
  hyperdriveAddress: Address;
  short: Short | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted: () => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseShort({
  hyperdriveAddress,
  short,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (
        !!short &&
        !!bondAmountIn &&
        minBaseAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        await readWriteHyperdrive.closeShort({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asBase,
          short,
          options: {
            onSubmitted(hash) {
              addTransaction({
                hash,
                description: "Close Short",
              });
            },
          },
        });
        queryClient.resetQueries();
        onExecuted?.();
      }
    },
  });

  return {
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
