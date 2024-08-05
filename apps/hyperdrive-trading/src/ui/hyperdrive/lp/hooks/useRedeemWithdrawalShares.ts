import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  type MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import type { Address } from "viem";
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
  const appConfig = useAppConfig();
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
      if (!mutationEnabled) {
        return;
      }

      // if redeming to shares, make sure the minimum amount out gets prepared
      // before going into the sdk
      const finalMinOutputPerShare = asBase
        ? minOutputPerShare
        : await prepareSharesIn({
            appConfig,
            hyperdriveAddress,
            readHyperdrive: readWriteHyperdrive,
            sharesAmount: minOutputPerShare,
          });

      const hash = await readWriteHyperdrive.redeemWithdrawalShares({
        args: {
          withdrawalSharesIn,
          minOutputPerShare: finalMinOutputPerShare,
          destination,
          asBase,
        },
        onTransactionCompleted: () => {
          queryClient.invalidateQueries();
        },
      });
      addTransaction({
        hash,
        description: "Redeem Withdrawal Shares",
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
    // Don't return the `redeemWithdrawalShares` callback if mutation isn't
    // enabled, this makes the hook feel more like useContractWrite from wagmi
    redeemWithdrawalShares: mutationEnabled
      ? redeemWithdrawalShares
      : undefined,
    redeemWithdrawalSharesStatus: status,
  };
}
