import { ethers } from "ethers";
import { ReactElement } from "react";
import { formatUnits } from "viem";
import { Button } from "src/ui/base/Button/Button";
import { useApproveDelegation } from "src/ui/loans/hooks/useApproveDelegation";
import { useVariableDebtTokenAllowance } from "src/ui/loans/hooks/useVariableDebtTokenAllowance";
import { Address, useToken } from "wagmi";

export function ApproveDelegationButton({
  variableDebtTokenAddress,
  amount,
  delegatee,
}: {
  variableDebtTokenAddress: Address;
  amount: bigint | undefined;
  delegatee: Address;
}): ReactElement | null {
  const { data: token } = useToken({ address: variableDebtTokenAddress });
  const { approveDelegation } = useApproveDelegation({
    variableDebtTokenAddress,
    delegatee,
    // This will render a big nasty looking warning in MetaMask
    // TODO: Switch to a reasonable amount instead, (eg: amount + some buffer)
    amount: ethers.constants.MaxUint256.toBigInt(),
  });
  const { allowance, status: allowanceStatus } = useVariableDebtTokenAllowance({
    variableDebtTokenAddress,
    delegatee,
  });

  // don't show the button if there's no amount given, or we're waiting on the
  // allowance result
  if (!amount || allowanceStatus === "loading") {
    return null;
  }

  // don't show the button if the current allowance covers the amount to spend
  if (allowance && allowance >= amount) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="sun"
      disabled={!approveDelegation}
      onClick={() => approveDelegation?.()}
    >
      <span title={`Current allowance: ${formatUnits(allowance || 0n, 18)}`}>
        Approve {token?.symbol}
      </span>
    </Button>
  );
}
