import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { Address, useToken } from "wagmi";

export function ClearAllowanceButton({
  tokenAddress,
  spender,
  spenderLabel,
}: {
  tokenAddress: Address;
  spender: Address;
  spenderLabel?: string;
}): ReactElement | null {
  const { data: token } = useToken({ address: tokenAddress });
  const { approve } = useTokenApproval({
    tokenAddress: tokenAddress,
    spender,
    amount: 0n,
  });

  const { allowance } = useSpenderAllowance(tokenAddress, spender);
  // no allowance means there's nothing to clear
  if (!allowance) {
    return null;
  }

  return (
    <Button disabled={!approve} onClick={() => approve?.()}>
      Clear Allowance: {token?.symbol}, spender:{" "}
      {spenderLabel ? spenderLabel : formatAddress(spender)}
    </Button>
  );
}
