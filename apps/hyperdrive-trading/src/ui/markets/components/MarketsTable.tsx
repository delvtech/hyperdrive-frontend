import { ReactElement } from "react";
import { MarketsTableLarge } from "src/ui/markets/components/MarketsTableLarge";
import { MarketsTableMini } from "src/ui/markets/components/MarketsTableMini";

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
