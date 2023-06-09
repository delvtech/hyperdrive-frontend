import { HyperdriveABI } from "@hyperdrive/core";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { QueryStatusType } from "src/ui/base/types";
import { getAssetTimestampFromTokenId } from "src/ui/hyperdrive/utils";
import { makeNewPositionToast } from "src/ui/trading/toast/makeNewPositionToast";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseCloseShortOptions {
  market: Hyperdrive;
  tokenID: bigint | undefined;
  shortAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
  /** Callback to be invoked when the transaction is finalized */
  onExecuted?: () => void;
}

interface UseCloseShortResult {
  /** Function to close short */
  closeShort: (() => void) | undefined;
  /** Status of close short invocation */
  closeShortStatus: QueryStatusType;
  /** Status of close short transaction */
  closeShortTransactionStatus: QueryStatusType;
}

/**
 * @deprecated use useCloseShort
 */
export function useCloseShortOld({
  market,
  tokenID,
  shortAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
  onExecuted,
}: UseCloseShortOptions): UseCloseShortResult {
  const queryClient = useQueryClient();

  // state to store transaction hash
  const [hash, setHash] = useState<Address | undefined>(undefined);

  const queryEnabled =
    !!tokenID &&
    !!shortAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    enabled;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "closeShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [
          BigInt(getAssetTimestampFromTokenId(tokenID)),
          shortAmountIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
        ]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
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
            position: "Short",
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

  const { write: closeShort, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
        toast.custom(
          () =>
            makeNewPositionToast({
              order: "Close",
              position: "Short",
              hash: data.hash,
            }),
          {
            id: data.hash,
            // toast will programmatically be removed
            duration: Infinity,
          },
        );
      }
    },
  });

  return {
    closeShort,
    closeShortStatus: status,
    closeShortTransactionStatus: txnStatus,
  };
}
