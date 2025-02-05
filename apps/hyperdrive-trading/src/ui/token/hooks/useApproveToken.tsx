import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { getToken } from "@delvtech/hyperdrive-appconfig";
import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, erc20Abi, parseUnits } from "viem";
import { sepolia } from "viem/chains";
interface UseTokenApprovalOptions {
  tokenAddress: Address;
  tokenChainId: number;
  spender: Address | undefined;
  amount: bigint;
  enabled?: boolean;
}

export function useApproveToken({
  tokenAddress,
  tokenChainId,
  spender,
  amount,
  enabled = true,
}: UseTokenApprovalOptions): {
  approve: (() => void) | undefined;
  pendingWalletSignatureStatus: QueryStatusWithIdle;
  isTransactionMined: boolean;
} {
  const { writeContract, status } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient({ chainId: tokenChainId });
  const appConfig = useAppConfigForConnectedChain();
  const [isTransactionMined, setIsTransactionMined] = useState(false);
  const queryEnabled = !!spender && !!enabled && !!publicClient;
  const token = getToken({
    tokenAddress,
    chainId: tokenChainId,
    appConfig,
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
            chainId: tokenChainId,
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
                <TransactionToast
                  chainId={tokenChainId}
                  message={loadingDescription}
                  txHash={hash}
                />,
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
                <TransactionToast
                  chainId={tokenChainId}
                  message={loadedDescription}
                  txHash={hash}
                />,
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
