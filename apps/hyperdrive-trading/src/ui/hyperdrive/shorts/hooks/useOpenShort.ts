import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
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
  ethValue?: bigint;
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
  ethValue,
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
          options: {
            value: ethValue
              ? // Pad the eth value by 1% so that the tx goes through, the
                // contract will refund any amount that it doesn't spend
                adjustAmountByPercentage({
                  amount: ethValue,
                  decimals: 18,
                  direction: "up",
                  percentage: 1n,
                })
              : undefined,
          },
        });
        addTransaction({
          hash,
          description: "Open Short",
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
    // Don't return the `openShort` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openShort: mutationEnabled ? openShort : undefined,
    openShortSubmittedStatus: status,
  };
}
