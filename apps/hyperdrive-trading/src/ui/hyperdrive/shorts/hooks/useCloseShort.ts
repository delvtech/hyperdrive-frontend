import { Short } from "@hyperdrive/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UseCloseShortOptions {
  market: Hyperdrive;
  short: Short | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseShort({
  market,
  short,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UseCloseShortOptions): UseCloseShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryClient = useQueryClient();

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
        readWriteHyperdrive.closeShort({
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
          short,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return {
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
