import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";

interface UseOpenLongOptions {
  hyperdriveAddress: Address;
  chainId: number;
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
  chainId,
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
  const { address: account } = useAccount();
  const addTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const appConfig = useAppConfigForConnectedChain();
  const queryClient = useQueryClient();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const mutationEnabled =
    !!amount &&
    !!minBondsOut &&
    !!destination &&
    minSharePrice !== undefined &&
    enabled &&
    !!publicClient &&
    !!readWriteHyperdrive;

  const { mutate: openLong, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // if opening with shares, make sure the shares in gets prepared before
      // going into the sdk
      const finalAmount = asBase
        ? amount
        : await prepareSharesIn({
            appConfig,
            chainId,
            sharesAmount: amount,
            readHyperdrive: readWriteHyperdrive,
          });

      const hash = await readWriteHyperdrive.openLong({
        args: {
          amount: finalAmount,
          minBondsOut,
          destination,
          minVaultSharePrice: minSharePrice,
          asBase,
        },
        options: {
          value: ethValue,
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Long opened"
                  txHash={receipt.transactionHash}
                />,
                {
                  id: receipt.transactionHash,
                  duration: SUCCESS_TOAST_DURATION,
                },
              );
              setTimeout(() => {
                toastWarpcast();
              }, SUCCESS_TOAST_DURATION);
              onExecuted?.(receipt.transactionHash);
              window.plausible("transactionSuccess", {
                props: {
                  transactionHash: receipt.transactionHash,
                  transactionType: "open",
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
          txHash={hash}
          message="Opening a Long..."
        />,
        { id: hash },
      );

      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Open Long",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "open",
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
    // Don't return the `openLong` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openLong: mutationEnabled ? openLong : undefined,
    openLongStatus: status,
  };
}
