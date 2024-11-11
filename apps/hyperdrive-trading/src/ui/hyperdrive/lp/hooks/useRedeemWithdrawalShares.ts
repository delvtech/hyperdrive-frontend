import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseRedeemWithdrawalSharesOptions {
  chainId: number;
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
  chainId,
  hyperdriveAddress,
  withdrawalSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled,
}: UseRedeemWithdrawalSharesOptions): UseRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
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
      if (!mutationEnabled) {
        return;
      }

      // if redeming to shares, make sure the minimum amount out gets prepared
      // before going into the sdk
      const finalMinOutputPerShare = asBase
        ? minOutputPerShare
        : await prepareSharesIn({
            appConfig,
            chainId,
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
        options: {
          onMined: (receipt) => {
            queryClient.invalidateQueries();
            if (receipt?.status === "success") {
              window.plausible("transactionSuccess", {
                props: {
                  transactionHash: receipt.transactionHash,
                  transactionType: "close",
                  positionType: "lp",
                  poolAddress: hyperdriveAddress,
                  chainId,
                },
              });
            }
          },
        },
      });
      addTransaction({
        hash,
        description: "Redeem Withdrawal Shares",
      });

      window.plausible("transactionSubmit", {
        props: {
          transactionHash: hash,
          transactionType: "close",
          positionType: "lp",
          poolAddress: hyperdriveAddress,
          chainId,
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
    // Don't return the `redeemWithdrawalShares` callback if mutation isn't
    // enabled, this makes the hook feel more like useContractWrite from wagmi
    redeemWithdrawalShares: mutationEnabled
      ? redeemWithdrawalShares
      : undefined,
    redeemWithdrawalSharesStatus: status,
  };
}
