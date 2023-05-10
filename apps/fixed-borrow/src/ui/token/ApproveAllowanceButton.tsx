import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { Button } from "src/ui/base/Button/Button";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApprove } from "src/ui/token/useTokenApprove";
import { Address, useToken } from "wagmi";

export function ApproveAllowanceButton({
  tokenAddress,
  amount,
  spender,
}: {
  tokenAddress: Address;
  amount: bigint | undefined;
  spender: Address;
}): ReactElement | null {
  const { data: token } = useToken({ address: tokenAddress });
  const { approve } = useTokenApprove({
    tokenAddress: tokenAddress,
    spender,
    amount,
  });
  const { allowance, status: allowanceStatus } = useSpenderAllowance(
    tokenAddress,
    spender,
  );

  console.log("allowance", amount, allowance);
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
    <StatWell
      label="Step 2a:"
      stat={`Approve ${token?.symbol}`}
      onClick={() => approve?.()}
    />
  );
}
