import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { WagmiHookStatusType } from "src/ui/base/types";
import { makeNewPositionToast } from "src/ui/trading/toast/makeNewPositionToast";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseOpenLongOptions {
  market: HyperdriveMarket;
  destination: Address | undefined;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseOpenLongResult {
  openLong: (() => void) | undefined;
  openLongStatus: WagmiHookStatusType;
  openLongTransactionStatus: WagmiHookStatusType;
}

export function useOpenLong({
  market,
  destination,
  baseAmount,
  bondAmountOut,
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenLongOptions): UseOpenLongResult {
  const queryClient = useQueryClient();

  // state to store transaction hash
  const [hash, setHash] = useState<Address | undefined>(undefined);

  const queryEnabled =
    !!baseAmount && !!bondAmountOut && !!destination && enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openLong",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          BigNumber.from(baseAmount),
          BigNumber.from(bondAmountOut),
          destination,
          asUnderlying,
        ]
      : undefined,
    // TODO better gas optimization
    overrides: { gasLimit: BigNumber.from(500_000) },
  });

  const { status: txnStatus } = useWaitForTransaction({
    hash,
    onSuccess: (data) => {
      toast.dismiss(data.transactionHash);
      setHash(undefined);
      // TODO: could be smarter about this in the future
      queryClient.invalidateQueries();
      onExecuted?.();
    },
  });

  const { write: openLong, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
        toast.custom(
          () =>
            makeNewPositionToast({
              order: "Open",
              position: "Long",
              hash: data.hash,
            }),
          {
            // setting id of toast to the transaction hash
            id: data.hash,
            // toast will programmatically be removed
            duration: Infinity,
          },
        );
      }
    },
  });

  return {
    openLong,
    openLongStatus: status,
    openLongTransactionStatus: txnStatus,
  };
}
