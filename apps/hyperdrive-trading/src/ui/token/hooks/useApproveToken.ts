import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

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
}: UseTokenApprovalOptions): { approve: (() => void) | undefined } {
  const { writeContract } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();

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
              const description =
                amount === 0n ? "Allowance revoked" : "Token Approved";
              addRecentTransaction({
                hash,
                description,
              });
              await waitForTransactionAndInvalidateCache({
                publicClient,
                hash,
                queryClient,
              });
              toast.success(description, { position: "top-center" });
            },
          },
        )
    : undefined;

  return { approve };
}
