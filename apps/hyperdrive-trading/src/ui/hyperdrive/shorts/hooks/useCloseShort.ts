import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";

interface UseCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted?: (hash: string | undefined) => void;
  onExecuted: (hash: string | undefined) => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  closeShortStatus: MutationStatus;
}

export function useCloseShort({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onSubmitted,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (
        enabled &&
        !!maturityTime &&
        !!bondAmountIn &&
        minAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        !!hyperdriveModel &&
        !!publicClient
      ) {
        function onTransactionMined(txHash: Hash) {
          queryClient.invalidateQueries();
          onExecuted?.(txHash);
        }

        const hash = asBase
          ? await hyperdriveModel.closeShortWithBase({
              args: {
                bondAmountIn,
                minAmountOut,
                destination,
                maturityTime,
              },
              onTransactionMined,
            })
          : await hyperdriveModel.closeShortWithShares({
              args: {
                bondAmountIn,
                destination,
                maturityTime,
                minAmountOut,
              },
              onTransactionMined,
            });
        onSubmitted?.(hash);
        addTransaction({
          hash,
          description: "Close Short",
        });
      }
    },
  });

  return {
    closeShort,
    closeShortStatus: status,
  };
}
