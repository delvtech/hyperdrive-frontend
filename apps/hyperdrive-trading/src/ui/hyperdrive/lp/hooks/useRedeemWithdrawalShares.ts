import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { Address, useContractWrite, usePublicClient } from "wagmi";
interface UseRedeemWithdrawalSharesOptions {
  market: Hyperdrive;
  withdrawalSharesIn: bigint | undefined;
  minBaseAmountOutPerShare: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseRedeemWithdrawalSharesResult {
  redeemWithdrawalShares: (() => void) | undefined;
  redeemWithdrawalSharesStatus: MutationStatus;
}

export function useRedeemWithdrawalShares({
  market,
  withdrawalSharesIn,
  minBaseAmountOutPerShare,
  destination,
  asUnderlying = true,
  enabled,
}: UseRedeemWithdrawalSharesOptions): UseRedeemWithdrawalSharesResult {
  const queryEnabled =
    !!withdrawalSharesIn &&
    minBaseAmountOutPerShare !== undefined &&
    !!destination &&
    enabled;
  const publicClient = usePublicClient();
  const addRecentTransaction = useAddRecentTransaction();
  const { write: redeemWithdrawalShares, status } = useContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "redeemWithdrawalShares",
    args: queryEnabled
      ? [
          withdrawalSharesIn,
          minBaseAmountOutPerShare,
          destination,
          asUnderlying,
        ]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    onSuccess: async (data) => {
      addRecentTransaction({
        hash: data.hash,
        description: "Remove Liquidity",
      });
      await publicClient.waitForTransactionReceipt({
        hash: data.hash,
        onReplaced() {
          queryClient.invalidateQueries();
        },
      });
      queryClient.invalidateQueries();
    },
  });

  return {
    redeemWithdrawalShares,
    redeemWithdrawalSharesStatus: status,
  };
}
