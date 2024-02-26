import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

type UseOpenLongOptionsBase = {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  minSharePrice: bigint | undefined;
  minBondsOut: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted?: (hash: string | undefined) => void;
};

// Define a union type for the mutually exclusive properties
type UseOpenLongOptions = UseOpenLongOptionsBase &
  (
    | { amount?: bigint; ethValue?: undefined }
    | { amount?: undefined; ethValue?: bigint }
  );

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: MutationStatus;
}

export function useOpenLong({
  hyperdriveAddress,
  destination,
  amount,
  minBondsOut,
  minSharePrice,
  asBase = true,
  enabled,
  onExecuted,
  ethValue,
}: UseOpenLongOptions): UseOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const addTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const mutationEnabled =
    !!(amount || ethValue) && // must have a valid amount or ethValue argument
    !!minBondsOut &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      const hash = await readWriteHyperdrive.openLong({
        // `ethValue` and `amount` are mutually exclusive, therefore if an ethValue
        // was sent, don't send anything in the amount field
        amount: ethValue ? 0n : (amount as bigint),
        minBondsOut: minBondsOut,
        destination,
        minSharePrice,
        asBase,
        options: { value: ethValue },
      });

      addTransaction({
        hash,
        description: "Open Long",
      });

      await waitForTransactionAndInvalidateCache({
        publicClient,
        queryClient,
        hash,
      });

      onExecuted?.(hash);
    },
  });
  return {
    // Don't return the `openLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openLong: mutationEnabled ? openLong : undefined,
    openLongStatus: status,
  };
}
