import { ERC20_ABI } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address } from "viem";
import { useContractSimulate, useContractWrite, usePublicClient } from "wagmi";
interface UseTokenApprovalOptions {
  tokenAddress: Address;
  spender: Address | undefined;
  amount: bigint;
}

export function useTokenApproval({
  tokenAddress,
  spender,
  amount,
}: UseTokenApprovalOptions): { approve: (() => void) | undefined } {
  const enabled = !!spender;

  const { data } = useContractSimulate({
    enabled: !!spender,
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: enabled ? [spender, amount] : undefined,
  });

  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const { writeContract: approve } = useContractWrite({
    mutation: {
      async onSuccess(data) {
        addRecentTransaction({
          hash: data,
          description: "Token Approved",
        });
        await waitForTransactionAndInvalidateCache({
          publicClient,
          hash: data,
          queryClient,
        });
      },
    },
  });

  return { approve: data ? () => approve(data?.request) : undefined };
}
