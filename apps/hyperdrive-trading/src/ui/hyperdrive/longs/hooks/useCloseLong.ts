import { Long } from "@hyperdrive/sdk";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";
interface UseCloseLongOptions {
  market: Hyperdrive;
  long: Long | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseLong({
  market,
  long,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UseCloseLongOptions): UseCloseLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryClient = useQueryClient();

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (
        !!long &&
        !!bondAmountIn &&
        minBaseAmountOut !== undefined && // check undefined since 0 is valid
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        readWriteHyperdrive.closeLong({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
          long,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return {
    closeLong,
    isPendingWalletAction: status === "loading",
  };
}
