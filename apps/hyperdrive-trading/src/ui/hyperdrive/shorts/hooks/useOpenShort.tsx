import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  type MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { toastWarpcast } from "src/ui/social/WarpcastToast";
import { type Address, type Hash, parseUnits } from "viem";
import { usePublicClient } from "wagmi";

interface UseOpenShortOptions {
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
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();
  const appConfig = useAppConfig();
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

      const openShortOptions = {
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
      };

      // All shares need to be prepared before going into the sdk
      const finalMaxDeposit = asBase
        ? maxDeposit
        : await prepareSharesIn({
            appConfig,
            hyperdriveAddress,
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
        options: openShortOptions,
        onTransactionCompleted: (txHash: `0x${string}`) => {
          queryClient.invalidateQueries();
          toast.success(
            <TransactionToast message="Short opened" txHash={txHash} />,
            { id: txHash, duration: SUCCESS_TOAST_DURATION },
          );
          toastWarpcast();
          onExecuted?.(txHash);
        },
      });

      toast.loading(
        <TransactionToast message="Opening Short" txHash={hash} />,
        { id: hash },
      );
      onSubmitted?.(hash);

      addTransaction({
        hash,
        description: "Open Short",
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
