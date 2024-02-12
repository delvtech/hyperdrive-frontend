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
  const queryEnabled = !!spender && !!enabled;

  const { writeContract } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();

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
              await waitForTransactionAndInvalidateCache({
                publicClient,
                hash,
                queryClient,
              });
              toast.success("Token approved", { position: "top-center" });
            },
          },
        )
    : undefined;

  return { approve };
}
