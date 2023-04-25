import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";
import { makeNewPositionToast } from "src/ui/trading/toast/makeNewPositionToast";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseCloseLongOptions {
  market: HyperdriveMarket;
  tokenID: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseCloseLongResult {
  closeLong: (() => void) | undefined;
  closeLongStatus: QueryStatusType;
  closeLongTransactionStatus: QueryStatusType;
}

export function useCloseLong({
  market,
  tokenID,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
  onExecuted,
}: UseCloseLongOptions): UseCloseLongResult {
  const queryClient = useQueryClient();

  // state to store transaction hash
  const [hash, setHash] = useState<Address | undefined>(undefined);

  const queryEnabled =
    !!bondAmountIn && !!minBaseAmountOut && !!destination && enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "closeLong",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          BigNumber.from(tokenID),
          BigNumber.from(bondAmountIn),
          BigNumber.from(minBaseAmountOut),
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
      toast.remove(data.transactionHash);
      setHash(undefined);
      // TODO: could be smarter about this in the future
      queryClient.invalidateQueries();
      toast.custom(
        () =>
          makeNewPositionToast({
            order: "Close",
            position: "Long",
            hash: data.transactionHash,
            status: "Executed",
          }),
        {
          duration: 3000,
        },
      );
      onExecuted?.();
    },
  });

  const { write: closeLong, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
        toast.custom(
          () =>
            makeNewPositionToast({
              order: "Close",
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
    closeLong,
    closeLongStatus: status,
    closeLongTransactionStatus: txnStatus,
  };
}
