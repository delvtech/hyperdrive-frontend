import { VariableDebtTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export function useApproveDelegation(
  variableDebtTokenAddress: `0x${string}`,
  amount: bigint,
  spender: `0x${string}` | undefined,
): {
  approveDelegation: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
} {
  const enabled = !!spender && !!amount;
  const { config: approveDelegationConfig } = usePrepareContractWrite({
    address: variableDebtTokenAddress,
    abi: VariableDebtTokenABI,
    functionName: "approveDelegation",
    enabled: enabled,
    args: enabled ? [spender, BigNumber.from(amount)] : undefined,
  });

  const { write: approveDelegation, status } = useContractWrite(
    approveDelegationConfig,
  );

  return { approveDelegation, status };
}
