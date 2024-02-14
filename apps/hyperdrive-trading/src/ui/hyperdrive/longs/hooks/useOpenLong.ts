import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

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
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const mutationEnabled =
    !!baseAmount &&
    !!bondAmountOut &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.openLong({
          baseAmount,
          bondAmountOut,
          destination,
          minSharePrice,
          asBase,
        });
        addTransaction({
          hash,
          description: "Open Long",
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
    // Don't return the `openLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openLong: mutationEnabled ? openLong : undefined,
    openLongStatus: status,
  };
}
