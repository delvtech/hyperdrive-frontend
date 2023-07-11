import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  Address,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  usePublicClient,
} from "wagmi";

interface useCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseCloseShortResult {
  isPendingWalletAction: boolean;
  closeShort: (() => void) | undefined;
}

export function useCloseShort({
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: useCloseShortOptions): UseCloseShortResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!maturityTime &&
    !!shortAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: hyperdriveAddress,
    functionName: "closeShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          maturityTime,
          shortAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
        ]
      : undefined,

    // TODO: better gas optimization
    gas: 500_000n,
  });

  const addRecentTransaction = useAddRecentTransaction();
  const { write: closeShort, status } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      addRecentTransaction({ hash: data.hash, description: "Close short" });
    },
  });

  return { closeShort, isPendingWalletAction: status === "loading" };
}
