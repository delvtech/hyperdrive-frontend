import { HyperdriveABI, Short } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseCloseShortOptions {
  short: Short | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseShortResult {
  closeShort: (() => void) | undefined;
  isPendingWalletAction: boolean;
}

export function useCloseShort({
  short,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UseCloseShortOptions): UseCloseShortResult {
  const queryEnabled =
    !!short &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: short?.hyperdriveAddress,
    functionName: "closeShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          short.maturity,
          bondAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
        ]
      : undefined,
  });

  const addRecentTransaction = useAddRecentTransaction();
  const { write: closeShort, status } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      addRecentTransaction({ hash: data.hash, description: "Close short" });
    },
  });

  return {
    closeShort,
    isPendingWalletAction: status === "loading",
  };
}
