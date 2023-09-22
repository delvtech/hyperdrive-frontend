import { Short } from "@hyperdrive/core";
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
  asUnderlying?: boolean;
  enabled?: boolean;
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
  asUnderlying = true,
  enabled = true,
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
          asUnderlying,
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
        queryClient.invalidateQueries();
      }
    },
  });

  return {
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
