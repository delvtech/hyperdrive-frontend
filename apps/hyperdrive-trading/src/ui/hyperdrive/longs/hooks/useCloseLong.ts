import { HyperdriveABI, Long } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  usePublicClient,
} from "wagmi";
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
  const publicClient = usePublicClient();
  const addRecentTransaction = useAddRecentTransaction();
  const { write: closeLong, status } = useContractWrite({
    ...config,
    onSuccess: async (data) => {
      addRecentTransaction({ hash: data.hash, description: "Close long" });
      await waitForTransactionAndInvalidateCache({
        publicClient,
        hash: data.hash,
        queryClient,
      });
    },
  });
  return {
    closeLong,
    isPendingWalletAction: status === "loading",
  };
}
