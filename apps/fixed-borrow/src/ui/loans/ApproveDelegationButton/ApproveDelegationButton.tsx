import { VariableDebtTokenABI } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { Button } from "src/ui/base/Button/Button";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useApproveDelegation } from "src/ui/loans/hooks/useApproveDelegation";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { Address, useAccount, useContractRead, useToken } from "wagmi";

export function ApproveDelegationButton({
  variableDebtTokenAddress,
  spender,
  spenderLabel,
}: {
  variableDebtTokenAddress: Address;
  spender: Address;
  spenderLabel?: string;
}): ReactElement | null {
  const { address: account } = useAccount();
  const { data: token } = useToken({ address: variableDebtTokenAddress });
  const { data: borrowAllowance } = useContractRead({
    abi: VariableDebtTokenABI,
    address: variableDebtTokenAddress,
    functionName: "borrowAllowance",
    enabled: !!account,
    args: !!account ? [account, spender] : undefined,
  });
  const { approveDelegation } = useApproveDelegation({
    variableDebtTokenAddress,
    spender,
    amount: parseBigInt("100000"),
  });

  const { allowance } = useSpenderAllowance(variableDebtTokenAddress, spender);
  console.log("allowance", allowance);

  if (borrowAllowance) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="sun"
      disabled={!approveDelegation}
      onClick={() => approveDelegation?.()}
    >
      Approve Delegation {token?.symbol}, spender:{" "}
      {spenderLabel ? spenderLabel : formatAddress(spender)}
    </Button>
  );
}
