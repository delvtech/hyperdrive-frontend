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

interface UseRemoveLiquidityOptions {
  chainId: number;
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  onSubmitted: (hash: Hash) => void;
  onExecuted: (hash: Hash) => void;
}

interface UseRemoveLiquidityResult {
  removeLiquidity: (() => void) | undefined;
  removeLiquidityStatus: MutationStatus;
}

export function useRemoveLiquidity({
  hyperdriveAddress,
  chainId,
  lpSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled,
  onSubmitted,
  onExecuted,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    enabled &&
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    !!readWriteHyperdrive;

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // If removing lp to shares, make sure the min output per share is
      // prepared before going into the sdk
      const finalMinOutputPerShare = asBase
        ? minOutputPerShare
        : await prepareSharesIn({
            appConfig,
            chainId,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: minOutputPerShare,
          });

      const hash = await readWriteHyperdrive.removeLiquidity({
        args: {
          asBase,
          lpSharesIn,
          minOutputPerShare: finalMinOutputPerShare,
          destination,
        },
        options: {
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Liquidity removed"
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
                  positionType: "lp",
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
          message="Removing liquidity..."
          txHash={hash}
        />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Remove Liquidity",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "close",
          positionType: "lp",
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
    // Don't return the `removeLiquidity` callback if mutation isn't enabled,
    // this makes the hook feel more like useContractWrite from wagmi
    removeLiquidity: mutationEnabled ? removeLiquidity : undefined,
    removeLiquidityStatus: status,
  };
}
