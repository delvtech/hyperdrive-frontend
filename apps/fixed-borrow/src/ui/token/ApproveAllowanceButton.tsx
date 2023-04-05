import { ethers } from "ethers";
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
  amount: bigint | undefined;
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
  const { allowance, status: allowanceStatus } = useSpenderAllowance(
    tokenAddress,
    spender,
  );

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
      disabled={!approve}
      onClick={() => approve?.()}
    >
      Approve {token?.symbol}
    </Button>
  );
}
