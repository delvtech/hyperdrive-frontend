import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address } from "wagmi";

interface UseOpenLongOptions {
  market: Hyperdrive;
  destination: Address | undefined;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: MutationStatus;
}

export function useOpenLong({
  market,
  destination,
  baseAmount,
  bondAmountOut,
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenLongOptions): UseOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const addTransaction = useAddRecentTransaction();
  const queryClient = useQueryClient();
  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (
        !!baseAmount &&
        !!bondAmountOut &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        await readWriteHyperdrive.openLong({
          baseAmount,
          bondAmountOut,
          destination,
          asUnderlying,
          options: {
            onSubmitted: (hash) => {
              addTransaction({
                hash,
                description: "openLong",
              });
            },
          },
        });
        queryClient.invalidateQueries();
        onExecuted?.();
      }
    },
  });

  return {
    openLong,
    openLongStatus: status,
  };
}
