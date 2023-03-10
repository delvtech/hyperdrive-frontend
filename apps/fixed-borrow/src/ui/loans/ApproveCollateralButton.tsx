import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { Address, useToken } from "wagmi";

export function ApproveAllowanceButton({
  tokenAddress,
  amount,
  spender,
}: {
  tokenAddress: Address;
  amount: BigNumber;
  spender: Address;
}): ReactElement | null {
  const { data: token } = useToken({ address: tokenAddress });
  const { approve } = useTokenApproval({
    tokenAddress: tokenAddress,
    spender,
    amount,
  });
  const { allowance } = useSpenderAllowance(tokenAddress, spender);

  if (allowance?.gte(amount)) {
    return null;
  }

  return (
    <button
      className="daisy-btn-outline daisy-btn"
      disabled={!approve}
      onClick={() => approve?.()}
    >
      Approve {token?.symbol}
    </button>
  );
}
