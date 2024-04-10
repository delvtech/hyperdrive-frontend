import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { Address, erc20Abi } from "viem";
interface UseTokenApprovalOptions {
  tokenAddress: Address;
  spender: Address | undefined;
  amount: bigint;
  enabled?: boolean;
}

export function useApproveToken({
  tokenAddress,
  spender,
  amount,
  enabled = true,
}: UseTokenApprovalOptions): {
  approve: (() => void) | undefined;
  pendingWalletSignatureStatus: "error" | "idle" | "loading" | "success";
  isTransactionMined: boolean;
} {
  const { writeContract, status } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const [isTransactionMined, setIsTransactionMined] = useState(false);
  const queryEnabled = !!spender && !!enabled && !!publicClient;

  // Pad the approval amount
  let finalAmount = amount;
  if (amount > 0 && amount !== MAX_UINT256) {
    finalAmount += 1_000_000_000n;
  }

  const approve = queryEnabled
    ? () =>
        writeContract(
          {
            abi: erc20Abi,
            address: tokenAddress,
            functionName: "approve",
            args: [spender, finalAmount],
          },
          {
            onSuccess: async (hash) => {
              addRecentTransaction({
                hash,
                description: "Token Approval",
              });
              setIsTransactionMined(false);
              const loadingDescription =
                finalAmount === 0n ? "Revoking approval..." : "Approving...";
              toast.loading(
                <TransactionToast message={loadingDescription} txHash={hash} />,
                { id: hash },
              );

              await waitForTransactionAndInvalidateCache({
                publicClient,
                hash,
                queryClient,
              });
              setIsTransactionMined(true);

              const loadedDescription =
                finalAmount === 0n ? "Approval revoked" : "Token approved";
              toast.success(
                <TransactionToast message={loadedDescription} txHash={hash} />,
                { id: hash },
              );
            },
          },
        )
    : undefined;

  return {
    approve,
    pendingWalletSignatureStatus: status,
    isTransactionMined,
  };
}
