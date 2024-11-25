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
import { useAccount, usePublicClient } from "wagmi";

interface UseCloseLongOptions {
  hyperdriveAddress: Address;
  chainId: number;
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted?: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  closeLongStatus: MutationStatus;
}

export function useCloseLong({
  hyperdriveAddress,
  chainId,
  maturityTime,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
  onSubmitted,
  onExecuted,
}: UseCloseLongOptions): UseCloseLongResult {
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();

  const mutationEnabled =
    !!maturityTime &&
    !!bondAmountIn &&
    minAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: closeLong, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // if closing to shares, make sure the minimum shares out gets
      // prepared before going into the sdk
      const finalMinAmountOut = asBase
        ? minAmountOut
        : await prepareSharesIn({
            appConfig,
            chainId,
            sharesAmount: minAmountOut,
            readHyperdrive: readWriteHyperdrive,
          });

      const hash = await readWriteHyperdrive.closeLong({
        args: {
          bondAmountIn,
          minAmountOut: finalMinAmountOut,
          destination,
          maturityTime,
          asBase,
        },
        options: {
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  message="Long closed"
                  txHash={hash}
                  chainId={chainId}
                />,
                { id: hash, duration: SUCCESS_TOAST_DURATION },
              );
              toastWarpcast();
              onExecuted?.(receipt.transactionHash);
              window.plausible("transactionSuccess", {
                props: {
                  transactionHash: receipt.transactionHash,
                  transactionType: "close",
                  positionType: "long",
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
          message="Closing Long..."
          txHash={hash}
        />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Close Long",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "close",
          positionType: "long",
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
    // Don't return the `closeLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    closeLong: mutationEnabled ? closeLong : undefined,
    closeLongStatus: status,
  };
}
