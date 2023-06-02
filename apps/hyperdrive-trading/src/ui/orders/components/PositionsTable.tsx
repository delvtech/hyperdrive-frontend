import { ReactElement, useState } from "react";
import { HyperdriveMarket } from "src/appconfig/types";
import { OpenOrdersTable } from "src/ui/orders/components/OpenOrdersTable";
import { match } from "ts-pattern";
import { ClosedOrdersTable } from "./ClosedOrdersTable";

interface PositionsTableProps {
  market: HyperdriveMarket;
}

type SelectedTable = "Open" | "Closed" | "Recent";

export function PositionsTable({ market }: PositionsTableProps): ReactElement {
  const [selectedTable, setSelectedTable] = useState<SelectedTable>("Open");

  return (
    <div className="flex flex-col overflow-hidden py-4">
      <div className="flex w-full flex-wrap gap-2 py-2 px-8">
        <button className="btn" onClick={() => setSelectedTable("Open")}>
          Open
        </button>
        <button className="btn" onClick={() => setSelectedTable("Closed")}>
          Closed
        </button>
        <button className="btn" onClick={() => setSelectedTable("Recent")}>
          Recent Trades
        </button>
      </div>

      <div className="flex-col gap-y-4 px-4 pt-4">
        <div className="overflow-scroll">
          {match(selectedTable)
            .with("Open", () => <OpenOrdersTable market={market} />)
            .with("Closed", () => <ClosedOrdersTable market={market} />)
            .with("Recent", () => <></>)
            .exhaustive()}
        </div>
      </div>
    </div>
  );
}
