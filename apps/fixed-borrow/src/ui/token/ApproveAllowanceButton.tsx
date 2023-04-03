import { BigNumber, ethers } from "ethers";
import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { Address, useToken } from "wagmi";

export function ApproveAllowanceButton({
  tokenAddress,
  amount,
  spender,
}: {
  tokenAddress: Address;
  amount: bigint;
  spender: Address;
}): ReactElement | null {
  const { data: token } = useToken({ address: tokenAddress });
  const { approve } = useTokenApproval({
    tokenAddress: tokenAddress,
    spender,
    // This will render a big nasty looking warning in MetaMask
    // TODO: Switch to a reasonable amount instead, (eg: amount + some buffer)
    amount: ethers.constants.MaxUint256,
  });
  const { allowance } = useSpenderAllowance(tokenAddress, spender);

  if (allowance?.gte(amount)) {
    return null;
  }

  return (
    <Button
      size="lg"
      variant="sun"
      disabled={!approve}
      onClick={() => approve?.()}
    >
      Approve {token?.symbol}
    </Button>
  );
}
