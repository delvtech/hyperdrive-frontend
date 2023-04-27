import { ReactElement } from "react";
import { PositionsTable } from "src/ui/portfolio/PositionsTable/PositionsTable";

export function PortfolioPage(): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <h4 className="font-bold text-white">Spark Borrows</h4>
        <div className="max-w-4xl">
          <PositionsTable />
        </div>
      </div>
    </div>
  );
}
