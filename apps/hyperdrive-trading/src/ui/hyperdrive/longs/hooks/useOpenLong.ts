import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Address } from "wagmi";

interface UseOpenLongOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  minSharePrice: bigint | undefined;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  asBase?: boolean;

  /** Controls whether or not an `openLong` callback will be returned to the
   * caller, useful for disabling buttons and other hooks */
  enabled?: boolean;

  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: (hash: string | undefined) => void;
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
  minSharePrice,
  asBase = true,
  enabled,
  onExecuted,
}: UseOpenLongOptions): UseOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const addTransaction = useAddRecentTransaction();
  const submittedHashRef = useRef<string | undefined>(undefined);
  const queryClient = useQueryClient();
  const mutationEnabled =
    !!baseAmount &&
    !!bondAmountOut &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        await readWriteHyperdrive.openLong({
          baseAmount,
          bondAmountOut,
          destination,
          minSharePrice,
          asBase,
          options: {
            onSubmitted: (hash) => {
              submittedHashRef.current = hash;
              addTransaction({
                hash,
                description: "Open Long",
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
    // Don't return the `openLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openLong: mutationEnabled ? openLong : undefined,
    openLongStatus: status,
  };
}
