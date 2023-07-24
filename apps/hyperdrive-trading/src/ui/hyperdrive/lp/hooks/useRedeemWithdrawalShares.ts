import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { Address, useContractWrite } from "wagmi";

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
  redeemWithdrawalSharesTransactionStatus: MutationStatus;
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

  const addRecentTransaction = useAddRecentTransaction();
  const {
    write: redeemWithdrawalShares,
    status,
    data,
  } = useContractWrite({
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
    onSuccess: (data) => {
      addRecentTransaction({
        hash: data.hash,
        description: "Remove Liquidity",
      });
    },
  });

  const { status: txnStatus } = useWaitForTransactionThenInvalidateCache({
    hash: data?.hash,
  });

  return {
    redeemWithdrawalShares,
    redeemWithdrawalSharesStatus: status,
    redeemWithdrawalSharesTransactionStatus: txnStatus,
  };
}
