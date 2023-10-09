import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UseOpenShortOptions {
  hyperdriveAddress: Address;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  minSharePrice: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
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
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
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
          asUnderlying,
          options: {
            onSubmitted: (hash) => {
              addTransaction({
                hash,
                description: "Open Short",
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
    // Don't return the `openShort` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openShort: mutationEnabled ? openShort : undefined,
    openShortSubmittedStatus: status,
  };
}
