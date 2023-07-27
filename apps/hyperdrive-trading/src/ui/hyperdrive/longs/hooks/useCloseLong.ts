import { HyperdriveABI, Long } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseCloseLongOptions {
  long: Long | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  isPendingWalletAction: boolean;
  closeLongTransactionStatus: MutationStatus;
}

export function useCloseLong({
  long,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UseCloseLongOptions): UseCloseLongResult {
  const queryEnabled =
    !!long &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: long?.hyperdriveAddress,
    functionName: "closeLong",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          long.maturity,
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
        ]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
  });

  const addRecentTransaction = useAddRecentTransaction();
  const {
    write: closeLong,
    status,
    data,
  } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      addRecentTransaction({ hash: data.hash, description: "Close long" });
    },
  });

  const { status: closeLongTransactionStatus } =
    useWaitForTransactionThenInvalidateCache({ hash: data?.hash });

  return {
    closeLong,
    isPendingWalletAction: status === "loading",
    closeLongTransactionStatus,
  };
}
