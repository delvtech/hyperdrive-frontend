import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { Well } from "src/ui/base/Well/Well";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { useAccount, Address, useBalance } from "wagmi";

export function SupplyQuickStartButton({
  tokenAddress,
  amount,
  label,
  stat,
}: {
  tokenAddress: Address;
  amount: bigint;
  label: string;
  stat: string;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: balanceOf } = useBalance({
    token: tokenAddress,
    address: account,
  });
  const { supply } = useSupplyCollateral(tokenAddress, amount, account);
  return (
    <Well block onClick={() => supply?.()}>
      <div className="flex items-center justify-between">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h6 text-lightText">{stat}</span>
      </div>
    </Well>
  );
}
