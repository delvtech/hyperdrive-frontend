import { Short } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address, usePublicClient } from "wagmi";

interface UseCloseShortOptions {
  hyperdriveAddress: Address;
  short: Short | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted: (hash: string | undefined) => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseShort({
  hyperdriveAddress,
  short,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (
        !!short &&
        !!bondAmountIn &&
        minBaseAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        const hash = await readWriteHyperdrive.closeShort({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asBase,
          short,
        });
        addTransaction({
          hash,
          description: "Close Short",
        });
        await publicClient.waitForTransactionReceipt({ hash });
        queryClient.resetQueries();
        onExecuted?.(hash);
      }
    },
  });

  return {
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
