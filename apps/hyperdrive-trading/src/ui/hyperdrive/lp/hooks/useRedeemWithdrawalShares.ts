import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseRedeemWithdrawalSharesOptions {
  hyperdriveAddress: Address;
  withdrawalSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UseRedeemWithdrawalSharesResult {
  redeemWithdrawalShares: (() => void) | undefined;
  redeemWithdrawalSharesStatus: MutationStatus;
}

export function useRedeemWithdrawalShares({
  hyperdriveAddress,
  withdrawalSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled,
}: UseRedeemWithdrawalSharesOptions): UseRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!withdrawalSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: redeemWithdrawalShares, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        const hash = await readWriteHyperdrive.redeemWithdrawalShares({
          withdrawalSharesIn,
          minOutputPerShare,
          destination,
          asBase,
        });
        addTransaction({
          hash,
          description: "Redeem Withdrawal Shares",
        });
        await waitForTransactionAndInvalidateCache({
          publicClient,
          queryClient,
          hash,
        });
      }
    },
  });

  return {
    // Don't return the `redeemWithdrawalShares` callback if mutation isn't
    // enabled, this makes the hook feel more like useContractWrite from wagmi
    redeemWithdrawalShares: mutationEnabled
      ? redeemWithdrawalShares
      : undefined,
    redeemWithdrawalSharesStatus: status,
  };
}
