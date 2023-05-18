import { DSTokenABI } from "@hyperdrive/spark";
import { useState } from "react";
import { Hash } from "viem";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useQueryClient,
  useWaitForTransaction,
} from "wagmi";

interface UseTokenApproveOptions {
  tokenAddress: Address;
  spender: Address;
  amount: bigint | undefined;
}

export function useTokenApprove({
  tokenAddress,
  spender,
  amount,
}: UseTokenApproveOptions): {
  approve: (() => void) | undefined;
  isPendingWalletAction: boolean;
  isTxProcessing: boolean;
} {
  const approveEnabled = amount !== undefined;
  const { config: approveConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: DSTokenABI, // tokens are a DSToken on goerli, see: https://github.com/dapphub/ds-token
    functionName: "approve",
    enabled: approveEnabled,
    args: approveEnabled ? [spender, amount] : undefined,
  });

  const {
    write: approve,
    isLoading: isPendingWalletAction,
    data, // contains the hash of the pending tx
  } = useContractWrite(approveConfig);

  const { status: txStatus } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    approve,
    isPendingWalletAction,
    isTxProcessing: txStatus === "loading",
  };
}
