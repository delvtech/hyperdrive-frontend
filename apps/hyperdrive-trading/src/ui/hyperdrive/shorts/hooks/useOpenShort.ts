import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRef } from "react";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UseOpenShortOptions {
  hyperdriveAddress: Address;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  minSharePrice: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: (hash: string | undefined) => void;
}

interface UseOpenShortResult {
  openShort: (() => void) | undefined;
  openShortSubmittedStatus: MutationStatus;
}

export function useOpenShort({
  hyperdriveAddress,
  amountBondShorts,
  maxBaseAmountIn,
  minSharePrice,
  destination,
  asBase = true,
  enabled,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const submittedHashRef = useRef<string | undefined>(undefined);
  const mutationEnabled =
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!readWriteHyperdrive;

  const { mutate: openShort, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        await readWriteHyperdrive.openShort({
          bondAmount: amountBondShorts,
          destination,
          minSharePrice,
          maxDeposit: maxBaseAmountIn,
          asBase,
          options: {
            onSubmitted: (hash) => {
              submittedHashRef.current = hash;
              addTransaction({
                hash,
                description: "Open Short",
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
    // Don't return the `openShort` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openShort: mutationEnabled ? openShort : undefined,
    openShortSubmittedStatus: status,
  };
}
