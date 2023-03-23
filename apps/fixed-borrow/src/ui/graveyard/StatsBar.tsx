import { ReactElement } from "react";
import { StatOld } from "src/ui/base/Stat/StatOld";
import { SupplyBalanceStat } from "src/ui/loans/SupplyBalanceStat";

interface StatsBarProps {
  previewSupplyBalance: string | undefined;
}

export function StatsBar({
  previewSupplyBalance: previewCollateralBalance,
}: StatsBarProps): ReactElement {
  return (
    <div className="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal justify-center text-center lg:text-start">
      <SupplyBalanceStat previewSupplyBalance={previewCollateralBalance} />

      <StatOld
        title="Loan to value"
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
      <StatOld
        title="Borrow Rate (APY)"
        value="1.25%"
        description={"Until June 27, 2023"}
      />
    </div>
  );
}
