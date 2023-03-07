import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { Stat } from "src/ui/base/Stat/Stat";
import { SupplyBalanceStat } from "src/ui/loans/SupplyBalanceStat";

interface StatsBarProps {
  collateralAmountInput?: BigNumber;
  afterAmountCollateralValueBase: string;
}

export function StatsBar({
  collateralAmountInput,
  afterAmountCollateralValueBase,
}: StatsBarProps): ReactElement {
  return (
    <div className="daisy-stats daisy-stats-vertical justify-center text-center lg:daisy-stats-horizontal lg:text-start">
      <SupplyBalanceStat
        previewCollateralAmountAfter={
          collateralAmountInput?.gt(0)
            ? afterAmountCollateralValueBase
            : undefined
        }
      />

      <Stat
        title="Liquidation Price"
        value="$1,200"
        description={
          <span className="font-bold text-warning">
            {
              // TODO: Show "Current price: $1600" w/out warning style for
              // the empty state
            }
            After: $1,450
          </span>
        }
      />
      <Stat
        title="Borrow Rate (APY)"
        value="1.25%"
        description={"Until June 27, 2023"}
      />
    </div>
  );
}
