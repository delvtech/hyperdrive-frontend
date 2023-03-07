import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Stat } from "src/ui/base/Stat/Stat";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useAccount } from "wagmi";

interface SupplyBalanceStat {
  previewCollateralAmountAfter?: string;
}

export function SupplyBalanceStat({
  previewCollateralAmountAfter,
}: SupplyBalanceStat): ReactElement {
  const { address: account } = useAccount();
  const { userAccountData } = useUserAccountData(account);

  return (
    <Stat
      title="Supply Balance"
      value={`$${formatBalance(
        formatUnits(
          userAccountData?.totalCollateralBase || BigNumber.from(0),
          8,
        ),
        2,
      )}`}
      description={
        <span
          className={classNames("font-bold text-primary", {
            invisible: !previewCollateralAmountAfter,
          })}
        >
          After: ${previewCollateralAmountAfter}
        </span>
      }
    />
  );
}
