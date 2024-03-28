import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenShortOptions {
  hyperdriveAddress: Address;
  amountBondShorts: bigint | undefined;
  maxDeposit: bigint | undefined;
  minVaultSharePrice: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onSubmitted?: (hash: Hash) => void;
  onExecuted?: (hash: Hash) => void;
  ethValue?: bigint;
}

interface UseOpenShortResult {
  openShort: (() => void) | undefined;
  openShortStatus: MutationStatus;
}

export function useOpenShort({
  hyperdriveAddress,
  amountBondShorts,
  maxDeposit,
  minVaultSharePrice,
  destination,
  asBase = true,
  enabled,
  ethValue,
  onSubmitted,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!amountBondShorts &&
    !!maxDeposit &&
    !!destination &&
    minVaultSharePrice !== undefined &&
    enabled &&
    !!hyperdriveModel &&
    !!publicClient;

  const { mutate: openShort, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const openShortOptions = {
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
        };

        const hash = asBase
          ? await hyperdriveModel.openShortWithBase({
              args: {
                bondAmount: amountBondShorts,
                destination,
                minVaultSharePrice,
                maxDeposit: maxDeposit,
              },
              options: openShortOptions,
              onTransactionMined: (txHash) => {
                queryClient.invalidateQueries();
                onExecuted?.(txHash);
              },
            })
          : await hyperdriveModel.openShortWithShares({
              args: {
                bondAmount: amountBondShorts,
                destination,
                minVaultSharePrice,
                maxDeposit: maxDeposit,
              },
              options: openShortOptions,
              onTransactionMined: (txHash) => {
                queryClient.invalidateQueries();
                onExecuted?.(txHash);
              },
            });
        onSubmitted?.(hash);
        addTransaction({
          hash,
          description: "Open Short",
        });
      }
    },
  });

  return {
    // Don't return the `openShort` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openShort: mutationEnabled ? openShort : undefined,
    openShortStatus: status,
  };
}
