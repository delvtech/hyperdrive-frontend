import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { useToken } from "wagmi";
import { useSpenderAllowance } from "./useSpenderAllowance";

export function ApproveCollateralButton({
  collateralTokenAddress,
  amount,
  spender,
}: {
  collateralTokenAddress: `0x${string}`;
  amount: BigNumber;
  spender: `0x${string}`;
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
