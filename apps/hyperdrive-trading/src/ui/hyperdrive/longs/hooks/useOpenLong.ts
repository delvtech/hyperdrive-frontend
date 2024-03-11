import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenLongOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  minSharePrice: bigint | undefined;
  minBondsOut: bigint | undefined;
  amount: bigint | undefined;
  ethValue?: bigint;
  asBase?: boolean;
  enabled?: boolean;
  onExecuted?: (hash: string | undefined) => void;
}

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
  const addTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);

  const mutationEnabled =
    !!amount &&
    !!minBondsOut &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!publicClient &&
    !!hyperdriveModel;

  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      const hash = asBase
        ? await hyperdriveModel.openLongWithBase({
            baseAmount: amount,
            minBondsOut: minBondsOut,
            destination,
            minSharePrice,
            ethValue,
          })
        : await hyperdriveModel.openLongWithShares({
            sharesAmount: amount,
            minBondsOut: minBondsOut,
            destination,
            minSharePrice,
            ethValue,
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
