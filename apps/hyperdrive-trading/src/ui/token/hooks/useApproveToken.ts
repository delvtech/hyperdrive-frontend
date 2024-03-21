import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { useState } from "react";
import { Address, erc20Abi } from "viem";
interface UseTokenApprovalOptions {
  tokenAddress: Address;
  spender: Address | undefined;
  amount: bigint;
  enabled?: boolean;
  onTokenApproval?: (hash: string) => Promise<void>;
}

export function useApproveToken({
  tokenAddress,
  spender,
  amount,
  enabled = true,
  onTokenApproval,
}: UseTokenApprovalOptions): {
  approve: (() => void) | undefined;
  approveTokenStatus: "error" | "idle" | "loading" | "success";
  isSuccess: boolean;
  isProcessing: boolean;
} {
  const { writeContract, status, isSuccess } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const [isProcessing, setIsProcessing] = useState(false);
  const queryEnabled = !!spender && !!enabled && !!publicClient;

  const approve = queryEnabled
    ? () =>
        writeContract(
          {
            abi: erc20Abi,
            address: tokenAddress,
            functionName: "approve",
            args: [spender, amount],
          },
          {
            onSuccess: async (hash) => {
              addRecentTransaction({
                hash,
                description: "Token Approved",
              });
              setIsProcessing(true);
              await waitForTransactionAndInvalidateCache({
                publicClient,
                hash,
                queryClient,
              }).then(() => {
                setIsProcessing(false);
                onTokenApproval?.(hash);
                toast.success("Token approved", { position: "top-center" });
              });
            },
          },
        )
    : undefined;

  return { approve, approveTokenStatus: status, isSuccess, isProcessing };
}
