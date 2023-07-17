import { HyperdriveABI } from "@hyperdrive/core";
import { MutationStatus, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface UseOpenShortOptions {
  market: Hyperdrive;
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
  openShortSubmittedStatus: MutationStatus;
  openShortTransactionStatus: MutationStatus;
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
  const queryClient = useQueryClient();

  // state to store transaction hash
  const [hash, setHash] = useState<Address | undefined>(undefined);

  const queryEnabled =
    !!amountBondShorts && !!maxBaseAmountIn && !!destination && enabled;

  const requiresEth = asUnderlying && market.baseToken.address === ZERO_ADDRESS;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [amountBondShorts, maxBaseAmountIn, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    // Used when ETH is the base asset (e.g. StethHyperdrive) and
    // asUnderlying is true.
    value: requiresEth && maxBaseAmountIn ? maxBaseAmountIn : 0n,
  });

  const { status: txnStatus } = useWaitForTransaction({
    hash,
    onSuccess: (data) => {
      toast.remove(data.transactionHash);
      setHash(undefined);
      queryClient.invalidateQueries();
      onExecuted?.();
    },
  });

  const { write: openShort, status } = useContractWrite({
    ...config,
    onSettled: (data) => {
      if (data) {
        setHash(data.hash);
      }
    },
  });

  return {
    openShort,
    openShortSubmittedStatus: status,
    openShortTransactionStatus: txnStatus,
  };
}
