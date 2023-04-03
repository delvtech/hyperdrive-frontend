import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useApproveDelegation } from "src/ui/loans/hooks/useApproveDelegation";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { Address, useToken } from "wagmi";

export function ApproveDelegationButton({
  variableDebtTokenAddress,
  amount,
  spender,
  spenderLabel,
}: {
  variableDebtTokenAddress: Address;
  amount: bigint;
  spender: Address;
  spenderLabel?: string;
}): ReactElement | null {
  const { data: token } = useToken({ address: variableDebtTokenAddress });
  const { approveDelegation } = useApproveDelegation({
    variableDebtTokenAddress,
    spender,
    amount,
  });

  const { allowance } = useSpenderAllowance(variableDebtTokenAddress, spender);

  if (amount <= 0 || (allowance && allowance >= amount)) {
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
