import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { Address, useToken } from "wagmi";

export function ApproveCollateralButton({
  collateralTokenAddress,
  amount,
  spender,
}: {
  collateralTokenAddress: Address;
  amount: BigNumber;
  spender: Address;
}): ReactElement | null {
  const { data: token } = useToken({ address: collateralTokenAddress });
  const { approve } = useTokenApproval({
    tokenAddress: collateralTokenAddress,
    spender,
    amount,
  });
  const { allowance } = useSpenderAllowance(collateralTokenAddress, spender);

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
