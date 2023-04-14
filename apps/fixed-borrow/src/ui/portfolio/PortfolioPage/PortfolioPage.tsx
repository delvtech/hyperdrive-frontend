import { ReactElement } from "react";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { PositionsTable } from "src/ui/portfolio/PositionsTable/PositionsTable";

export function PortfolioPage(): ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-3">
        <h4 className="font-bold text-white">Overview</h4>
        <div className="max-w-4xl">
          <div className="flex gap-8 ">
            <StatWell label="Collateral" stat="$130,491.20" />
            <StatWell label="Total debt" stat="$9,824.62" />
            <StatWell label="Borrow limit" stat="$83,218.81" />
            <StatWell label="Loan to value" stat="7.5%" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="font-bold text-white">Positions</h4>
        <div className="max-w-4xl">
          <PositionsTable />
        </div>
      </div>
    </div>
  );
}
