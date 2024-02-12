import { Long } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address, usePublicClient } from "wagmi";
interface UseCloseLongOptions {
  hyperdriveAddress: Address;
  long: Long | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted: (hash: string | undefined) => void;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseLong({
  hyperdriveAddress,
  long,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onExecuted,
}: UseCloseLongOptions): UseCloseLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!long &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.closeLong({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asBase,
          long,
        });
        addTransaction({
          hash,
          description: "Close Long",
        });
        await publicClient.waitForTransactionReceipt({ hash });
        queryClient.resetQueries();
        onExecuted?.(hash);
      }
    },
  });

  return {
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    isPendingWalletAction: status === "loading",
  };
}
