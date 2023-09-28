import { Long } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";
interface UseCloseLongOptions {
  hyperdriveAddress: Address;
  long: Long | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseLong({
  hyperdriveAddress,
  long,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UseCloseLongOptions): UseCloseLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!long &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        await readWriteHyperdrive.closeLong({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
          long,
          options: {
            onSubmitted(hash) {
              addTransaction({
                hash,
                description: "Close Long",
              });
            },
          },
        });
        queryClient.invalidateQueries();
      }
    },
  });

  return {
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    isPendingWalletAction: status === "pending",
  };
}
