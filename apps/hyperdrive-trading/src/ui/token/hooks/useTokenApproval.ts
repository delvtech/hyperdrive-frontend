import { ERC20_ABI } from "@hyperdrive/core";
import { useWaitForTransactionThenInvalidateCache } from "src/ui/network/useWaitForTransactionThenInvalidateCache/useWaitForTransactionThenInvalidateCache";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

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

  const { config: approveConfig } = usePrepareContractWrite({
    enabled: !!spender,
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: enabled ? [spender, amount] : undefined,
  });

  const { write: approve, data } = useContractWrite(approveConfig);

  useWaitForTransactionThenInvalidateCache({
    hash: data?.hash,
  });

  return { approve };
}
