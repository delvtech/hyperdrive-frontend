import { ERC20_ABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { queryClient } from "src/network/queryClient";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  usePublicClient,
} from "wagmi";
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

  const { config } = usePrepareContractWrite({
    enabled: !!spender,
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: enabled ? [spender, amount] : undefined,
  });
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const { write: approve } = useContractWrite({
    ...config,
    onSuccess: async (data) => {
      addRecentTransaction({ hash: data.hash, description: "Token Approved" });
      await publicClient.waitForTransactionReceipt({
        hash: data.hash,
        onReplaced() {
          queryClient.invalidateQueries();
        },
      });
      queryClient.invalidateQueries();
    },
  });

  return { approve };
}
