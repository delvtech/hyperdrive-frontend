import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { WagmiHookStatusType } from "src/ui/base/types";
import { getAssetTimestampFromTokenId } from "src/ui/hyperdrive/utils";
import { makeNewPositionToast } from "src/ui/trading/toast/makeNewPositionToast";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseCloseShortOptions {
  market: HyperdriveMarket;
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
  closeShortStatus: WagmiHookStatusType;
  /** Status of close short transaction */
  closeShortTransactionStatus: WagmiHookStatusType;
}

export function useCloseShort({
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
          BigNumber.from(getAssetTimestampFromTokenId(tokenID)),
          BigNumber.from(shortAmountIn),
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
