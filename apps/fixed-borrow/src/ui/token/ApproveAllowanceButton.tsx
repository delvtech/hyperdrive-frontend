import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

import { Button } from "src/ui/base/Button/Button";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useTokenApprove } from "src/ui/token/useTokenApprove";
import { Address } from "wagmi";

export function ApproveAllowanceButton({
  tokenAddress,
  amount,
  spender,
}: {
  tokenAddress: Address;
  amount: bigint | undefined;
  spender: Address;
}): ReactElement | null {
  const { approve, isPendingWalletAction, isTxProcessing } = useTokenApprove({
    tokenAddress: tokenAddress,
    spender,
    amount,
  });
  // Show a loading state if the tx is in flight for any reason
  const showLoading = isPendingWalletAction || isTxProcessing;

  const { allowance, status: allowanceStatus } = useSpenderAllowance({
    tokenAddress: tokenAddress,
    spender,
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
    <Button size="md" onClick={() => approve?.()} block disabled={showLoading}>
      {showLoading ? (
        <div className="flex items-center justify-center">
          <ArrowPathIcon className=" h-5 w-5 animate-spin text-white " />
        </div>
      ) : (
        "Approve"
      )}
    </Button>
  );
}
