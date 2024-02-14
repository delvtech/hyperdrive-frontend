import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

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
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: openShort, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.openShort({
          bondAmount: amountBondShorts,
          destination,
          minSharePrice,
          maxDeposit: maxBaseAmountIn,
          asBase,
        });
        addTransaction({
          hash,
          description: "Open Short",
        });
        await publicClient.waitForTransactionReceipt({ hash });
        queryClient.resetQueries();
        onExecuted?.(hash);
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
