import { ContractWriteOptions } from "@delvtech/hyperdrive-viem";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useReadWriteHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadWriteHyperdriveModel";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import { Address, Hash } from "viem";
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
  onSubmitted?: (hash: string | undefined) => void;
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
  onSubmitted,
  onExecuted,
  ethValue,
}: UseOpenLongOptions): UseOpenLongResult {
  const addTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const hyperdriveModel = useReadWriteHyperdriveModel(hyperdriveAddress);

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

      const options: ContractWriteOptions = {
        value: ethValue,
      };

      function onTransactionMined(txHash: Hash) {
        queryClient.invalidateQueries();
        toast.success(
          <TransactionToast message="Long opened" txHash={txHash} />,
          { id: txHash, duration: SUCCESS_TOAST_DURATION },
        );
        setTimeout(() => {
          toastWarpcast();
        }, SUCCESS_TOAST_DURATION);
        onExecuted?.(txHash);
      }

      const hash = asBase
        ? await hyperdriveModel.openLongWithBase({
            args: {
              baseAmount: amount,
              minBondsOut: minBondsOut,
              destination,
              minVaultSharePrice: minSharePrice,
            },
            options,
            onTransactionMined,
          })
        : await hyperdriveModel.openLongWithShares({
            args: {
              sharesAmount: amount,
              minBondsOut: minBondsOut,
              destination,
              minVaultSharePrice: minSharePrice,
            },
            options,
            onTransactionMined,
          });

      toast.loading(
        <TransactionToast txHash={hash} message="Opening a Long..." />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Open Long",
      });
    },
  });
  return {
    // Don't return the `openLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openLong: mutationEnabled ? openLong : undefined,
    openLongStatus: status,
  };
}
