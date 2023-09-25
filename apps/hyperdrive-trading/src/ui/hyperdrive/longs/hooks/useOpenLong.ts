import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Address } from "wagmi";

interface UseOpenLongOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  asUnderlying?: boolean;

  /** Controls whether or not an `openLong` callback will be returned to the
   * caller, useful for disabling buttons and other hooks */
  enabled?: boolean;

  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: MutationStatus;
}

export function useOpenLong({
  hyperdriveAddress,
  destination,
  baseAmount,
  bondAmountOut,
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenLongOptions): UseOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const addTransaction = useAddRecentTransaction();
  const queryClient = useQueryClient();
  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (
        !!baseAmount &&
        !!bondAmountOut &&
        !!destination &&
        readWriteHyperdrive
      ) {
        await readWriteHyperdrive.openLong({
          baseAmount,
          bondAmountOut,
          destination,
          asUnderlying,
          options: {
            onSubmitted: (hash) => {
              addTransaction({
                hash,
                description: "Open Long",
              });
            },
          },
        });
        queryClient.invalidateQueries();
        onExecuted?.();
      }
    },
  });
  return {
    // Don't return the `openLong` callback if the caller has disabled this hook
    openLong: enabled ? openLong : undefined,
    openLongStatus: status,
  };
}
