import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { findToken } from "@hyperdrive/appconfig";
import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { Address, erc20Abi, parseUnits } from "viem";
import { sepolia } from "viem/chains";
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
  pendingWalletSignatureStatus: QueryStatusWithIdle;
  isTransactionMined: boolean;
} {
  const appConfig = useAppConfig();
  const { writeContract, status } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const [isTransactionMined, setIsTransactionMined] = useState(false);
  const queryEnabled = !!spender && !!enabled && !!publicClient;
  const token = findToken({
    tokenAddress,
    tokens: appConfig.tokens,
  });
  // Pad the approval amount if on sepolia
  let finalAmount = amount;
  if (token?.chainId === sepolia.id && amount > 0 && amount !== MAX_UINT256) {
    finalAmount += parseUnits("1", 18);
  }

  const approve = queryEnabled
    ? () =>
        writeContract(
          {
            abi: erc20Abi,
            address: tokenAddress,
            chainId: token?.chainId,
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
                { id: hash, duration: SUCCESS_TOAST_DURATION },
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
