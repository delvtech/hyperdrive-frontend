import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import Spinner from "src/ui/base/Spinner/Spinner";
import { useRepayDebt } from "src/ui/loans/hooks/useRepayDebt";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { Address, useAccount } from "wagmi";

export function RepayButton({
  tokenAddress,
  amount,
}: {
  tokenAddress: Address;
  amount: bigint | undefined;
}): ReactElement {
  const { address: account } = useAccount();
  const { repay, isPendingWalletAction, isTxProcessing } = useRepayDebt({
    amount,
    debtToken: tokenAddress,
    onBehalfOf: account,
  });

  const { allowance } = useSpenderAllowance({
    tokenAddress,
    spender: SparkGoerliAddresses.pool,
  });
  const isTxLoading = isPendingWalletAction || isTxProcessing;
  const isDisabled = isTxLoading || !allowance || !amount || allowance < amount;

  return (
    <Button
      size="md"
      variant="sun"
      onClick={() => repay?.()}
      block
      disabled={isDisabled}
    >
      {isTxLoading ? <Spinner /> : "Repay"}
    </Button>
  );
}
