import { VariableDebtTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseApproveDelegationOptions {
  variableDebtTokenAddress: Address;
  spender: Address;
  amount: bigint;
}

export function useApproveDelegation({
  variableDebtTokenAddress,
  spender,
  amount,
}: UseApproveDelegationOptions): {
  approveDelegation: (() => void) | undefined;
} {
  const { config: approveConfig } = usePrepareContractWrite({
    address: variableDebtTokenAddress,
    abi: VariableDebtTokenABI,
    functionName: "approveDelegation",
    args: [spender, BigNumber.from(amount)],
  });
  const { write: approveDelegation } = useContractWrite(approveConfig);
  return { approveDelegation };
}
