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
        enabled &&
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
                description: "openLong",
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
    openLong,
    openLongStatus: status,
  };
}
