import { ReactElement } from "react";
import { CoverageTable } from "src/ui/fixedborrow/CoverageTable/CoverageTable";

export function FixedBorrowPage(): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <h4 className="font-bold text-white">Spark Borrows</h4>
        <div className="max-w-4xl">
          <CoverageTable />
        </div>
      </div>
    </div>
  );
}
