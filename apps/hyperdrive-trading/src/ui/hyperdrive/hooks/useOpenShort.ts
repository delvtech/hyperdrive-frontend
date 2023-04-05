import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { WagmiHookStatusType } from "src/ui/base/types";
import { makeNewPositionToast } from "src/ui/trading/toast/makeNewPositionToast";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseOpenShortOptions {
  market: HyperdriveMarket;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseOpenShortResult {
  openShort: (() => void) | undefined;
  openShortStatus: WagmiHookStatusType;
  openShortTransactionStatus: WagmiHookStatusType;
}

export function useOpenShort({
  market,
  amountBondShorts,
  maxBaseAmountIn,
  destination,
  asUnderlying = true,
  enabled,
  onExecuted,
}: UseOpenShortOptions): UseOpenShortResult {
  // state to store transaction hash
  const [hash, setHash] = useState<Address | undefined>(undefined);

  const queryEnabled =
    !!amountBondShorts && !!maxBaseAmountIn && !!destination && enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          BigNumber.from(amountBondShorts),
          BigNumber.from(maxBaseAmountIn),
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
      onExecuted?.();
    },
  });

  const { write: openShort, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
        toast.custom(
          () =>
            makeNewPositionToast({
              order: "Open",
              position: "Short",
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
    openShort,
    openShortStatus: status,
    openShortTransactionStatus: txnStatus,
  };
}
