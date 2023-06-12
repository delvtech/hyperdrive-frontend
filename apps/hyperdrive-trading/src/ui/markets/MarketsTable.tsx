import { ReactElement } from "react";
import { MarketsTableLarge } from "src/ui/markets/MarketsTableLarge";
import { MarketsTableMini } from "src/ui/markets/MarketsTableMini";

export function MarketsTable(): ReactElement {
  return (
    <div>
      {/* Mobile view only */}
      <div className="md:hidden">
        <MarketsTableMini />
      </div>

      {/* Tablet+ view only */}
      <div className="hidden md:block">
        <MarketsTableLarge />
      </div>
    </div>
  );
}
