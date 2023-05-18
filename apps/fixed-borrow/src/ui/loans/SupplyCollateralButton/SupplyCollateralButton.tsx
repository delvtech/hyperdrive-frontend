import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { Address, useAccount } from "wagmi";

export function SupplyCollateralButton({
  collateralTokenAddress,
  amount,
}: {
  collateralTokenAddress: Address;
  amount: bigint;
}): ReactElement {
  const { allowance } = useSpenderAllowance({
    tokenAddress: collateralTokenAddress,
    spender: SparkGoerliAddresses.pool,
  });
  const { address: account } = useAccount();
  const { supply, isPendingWalletAction, isTxProcessing } = useSupplyCollateral(
    collateralTokenAddress,
    amount,
    account,
  );

  const isTxLoading = isPendingWalletAction || isTxProcessing;
  const isDisabled =
    isTxLoading || allowance === undefined || allowance < amount;

  return (
    <Button
      size="md"
      variant="sun"
      onClick={() => supply?.()}
      block
      disabled={isDisabled}
    >
      Supply
    </Button>
  );
}
