import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UseOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
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
  market,
  amountBondShorts,
  maxBaseAmountIn,
  destination,
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryClient = useQueryClient();

  const { mutate: openShort, status } = useMutation({
    mutationFn: async () => {
      if (
        !!amountBondShorts &&
        !!maxBaseAmountIn &&
        !!destination &&
        enabled &&
        !!readWriteHyperdrive
      ) {
        readWriteHyperdrive.openShort({
          bondAmount: amountBondShorts,
          destination,
          maxDeposit: maxBaseAmountIn,
          asUnderlying,
        });
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries();
      onExecuted?.();
    },
  });

  return {
    openShort,
    openShortSubmittedStatus: status,
  };
}
