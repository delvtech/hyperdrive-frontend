import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, Hash, parseUnits } from "viem";
import { useAccount, usePublicClient } from "wagmi";

interface UseOpenShortOptions {
  chainId: number;
  hyperdriveAddress: Address;
  amountBondShorts: bigint | undefined;
  maxDeposit: bigint | undefined;
  minVaultSharePrice: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onSubmitted?: (hash: Hash) => void;
  onExecuted?: (hash: Hash) => void;
  ethValue?: bigint;
}

interface UseOpenShortResult {
  openShort: (() => void) | undefined;
  openShortStatus: MutationStatus;
}

export function useOpenShort({
  hyperdriveAddress,
  chainId,
  amountBondShorts,
  maxDeposit,
  minVaultSharePrice,
  destination,
  asBase = true,
  enabled,
  ethValue,
  onSubmitted,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const appConfig = useAppConfigForConnectedChain();
  const addTransaction = useAddRecentTransaction();
  const mutationEnabled =
    !!amountBondShorts &&
    !!maxDeposit &&
    !!destination &&
    minVaultSharePrice !== undefined &&
    enabled &&
    !!readWriteHyperdrive &&
    !!publicClient;

  const { mutate: openShort, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }

      // All shares need to be prepared before going into the sdk
      const finalMaxDeposit = asBase
        ? maxDeposit
        : await prepareSharesIn({
            appConfig,
            chainId,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: maxDeposit,
          });

      const hash = await readWriteHyperdrive.openShort({
        args: {
          bondAmount: amountBondShorts,
          asBase,
          destination,
          minVaultSharePrice,
          maxDeposit: finalMaxDeposit,
        },
        options: {
          value: ethValue
            ? // Pad the eth value by 1% so that the tx goes through, the
              // contract will refund any amount that it doesn't spend
              adjustAmountByPercentage({
                amount: ethValue,
                decimals: 18,
                direction: "up",
                percentage: parseUnits("1", 18),
              })
            : undefined,
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Short opened"
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
                  transactionType: "open",
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
          message="Opening Short"
          txHash={hash}
        />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Open Short",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "open",
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
    // Don't return the `openShort` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    openShort: mutationEnabled ? openShort : undefined,
    openShortStatus: status,
  };
}
