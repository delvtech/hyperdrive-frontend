import { ERC20_ABI } from "@hyperdrive/core";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseTokenApprovalOptions {
  tokenAddress: Address;
  spender: Address | undefined;
  amount: bigint;
  onSuccess: () => void;
}

export function useTokenApproval({
  tokenAddress,
  spender,
  amount,
  onSuccess,
}: UseTokenApprovalOptions): { approve: (() => void) | undefined } {
  const enabled = !!spender;

  const { config: approveConfig } = usePrepareContractWrite({
    enabled: !!spender,
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: enabled ? [spender, amount] : undefined,
  });

  const { write: approve, isSuccess } = useContractWrite(approveConfig);

  if (isSuccess && onSuccess) {
    onSuccess();
  }

  return { approve };
}
