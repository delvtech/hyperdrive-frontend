import { VariableDebtTokenABI } from "@hyperdrive/spark";
import { Address, useAccount, useContractRead } from "wagmi";

export function useVariableDebtTokenAllowance({
  variableDebtTokenAddress,
  delegatee,
}: {
  variableDebtTokenAddress: Address;
  delegatee: Address;
}): {
  allowance: bigint | undefined;
  status: "loading" | "success" | "idle" | "error";
} {
  const { address: account } = useAccount();
  const { data: allowance, status } = useContractRead({
    address: variableDebtTokenAddress,
    abi: VariableDebtTokenABI,
    functionName: "borrowAllowance",
    enabled: !!account,
    args: !!account ? [account, delegatee] : undefined,
  });

  return { allowance, status };
}
