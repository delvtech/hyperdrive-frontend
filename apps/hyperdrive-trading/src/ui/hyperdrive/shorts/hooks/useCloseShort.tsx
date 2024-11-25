import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, Hash } from "viem";
import { useAccount } from "wagmi";

interface UseCloseShortOptions {
  chainId: number;
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted?: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  closeShortStatus: MutationStatus;
}

export function useCloseShort({
  chainId,
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onSubmitted,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const isMutationEnabled =
    enabled &&
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    !!readWriteHyperdrive;

  const { mutate: closeShort, status } = useMutation({
    mutationFn: async () => {
      if (!isMutationEnabled) {
        return;
      }

      // All shares from the UI need to be prepared for the SDK
      const finalMinAmountOut = asBase
        ? minAmountOut
        : await prepareSharesIn({
            appConfig,
            chainId,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: minAmountOut,
          });

      const hash = await readWriteHyperdrive.closeShort({
        args: {
          bondAmountIn,
          asBase,
          minAmountOut: finalMinAmountOut,
          destination,
          maturityTime,
        },
        options: {
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Short closed"
                  txHash={receipt.transactionHash}
                />,
                {
                  id: receipt.transactionHash,
                  duration: SUCCESS_TOAST_DURATION,
                },
              );
              toastWarpcast();
              onExecuted?.(receipt.transactionHash);
              window.plausible("transactionSuccess", {
                props: {
                  transactionHash: receipt.transactionHash,
                  transactionType: "close",
                  positionType: "short",
                  poolAddress: hyperdriveAddress,
                  chainId,
                  connectedWallet: account,
                },
              });
            }
          },
        },
      });

      toast.loading(
        <TransactionToast
          chainId={chainId}
          message="Closing Short..."
          txHash={hash}
        />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Close Short",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "close",
          positionType: "short",
          poolAddress: hyperdriveAddress,
          chainId,
          connectedWallet: account,
        },
      });
    },
    onError(error) {
      const message = parseError({
        error,
      });
      toast.error(message);
    },
  });

  return {
    closeShort: isMutationEnabled ? closeShort : undefined,
    closeShortStatus: status,
  };
}
