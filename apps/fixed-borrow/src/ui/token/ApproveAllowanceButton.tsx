import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { Address, useToken } from "wagmi";

export function ApproveAllowanceButton({
  tokenAddress,
  amount,
  spender,
  spenderLabel,
}: {
  tokenAddress: Address;
  amount: bigint;
  spender: Address;
  spenderLabel?: string;
}): ReactElement | null {
  const { data: token } = useToken({ address: tokenAddress });
  const { approve } = useTokenApproval({
    tokenAddress: tokenAddress,
    spender,
    amount,
  });
  const { allowance } = useSpenderAllowance(tokenAddress, spender);

  if (allowance === undefined || amount <= 0 || allowance >= amount) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="sun"
      disabled={!approve}
      onClick={() => approve?.()}
    >
      Approve {token?.symbol}, spender:{" "}
      {spenderLabel ? spenderLabel : formatAddress(spender)}
    </Button>
  );
}
