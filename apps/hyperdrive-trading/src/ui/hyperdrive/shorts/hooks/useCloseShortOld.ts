import { HyperdriveABI } from "@hyperdrive/core";
import { MutationStatus, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { getAssetTimestampFromTokenId } from "src/ui/hyperdrive/utils";
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
  closeShortStatus: MutationStatus;
  /** Status of close short transaction */
  closeShortTransactionStatus: MutationStatus;
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
    onSuccess: () => {
      setHash(undefined);
      queryClient.invalidateQueries();
      onExecuted?.();
    },
  });

  const { write: closeShort, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
      }
    },
  });

  return {
    closeShort,
    closeShortStatus: status,
    closeShortTransactionStatus: txnStatus,
  };
}
