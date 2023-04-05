import { VariableDebtTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseApproveDelegationOptions {
  variableDebtTokenAddress: `0x${string}`;
  amount: bigint;
  delegatee: `0x${string}` | undefined;
}

/**
 * The Aave v3 Variable Debt Token (VDT) is a type of token that represents a
 * user's share of the variable interest rate debt pool in the Aave v3 protocol.
 *
 * The approveDelegation method allows another address (the delegatee)
 * to borrow on behalf of the token holder.
 *
 * By approving delegation, the VDT holder retains ownership of their tokens and
 * is still entitled to a share of the interest generated by the debt pool.
 */
export function useApproveDelegation({
  variableDebtTokenAddress,
  amount,
  delegatee,
}: UseApproveDelegationOptions): {
  approveDelegation: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
} {
  const enabled = !!delegatee && !!amount;
  const { config: approveDelegationConfig } = usePrepareContractWrite({
    address: variableDebtTokenAddress,
    abi: VariableDebtTokenABI,
    functionName: "approveDelegation",
    enabled: enabled,
    args: enabled ? [delegatee, BigNumber.from(amount)] : undefined,
  });

  const { write: approveDelegation, status } = useContractWrite(
    approveDelegationConfig,
  );

  return { approveDelegation, status };
}
