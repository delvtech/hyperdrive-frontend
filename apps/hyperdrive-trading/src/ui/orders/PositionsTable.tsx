import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ClosedOrdersTable } from "src/ui/orders/ClosedOrdersTable/ClosedOrdersTable";
import { OpenOrdersTable } from "src/ui/orders/OpenOrdersTable/OpenOrdersTable";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

type SelectedTable = "Open" | "Closed";

export function PositionsTable({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const [selectedTable, setSelectedTable] = useState<SelectedTable>("Open");

  return (
    <div className="flex flex-col overflow-hidden p-8">
      <div className="daisy-join flex w-full flex-wrap">
        <button
          className={classNames("daisy-btn-ghost daisy-join-item daisy-btn", {
            "daisy-btn-active": selectedTable === "Open",
          })}
          onClick={() => setSelectedTable("Open")}
        >
          Open
        </button>
        <button
          className={classNames("daisy-btn-ghost daisy-join-item daisy-btn", {
            "daisy-btn-active": selectedTable === "Closed",
          })}
          onClick={() => setSelectedTable("Closed")}
        >
          Closed
        </button>
      </div>

      <div className="flex-col gap-y-4 pt-4">
        {/* TODO: Hack to make the div scrollable, use a calculated height instead */}
        <div className="h-72 overflow-scroll">
          {(() => {
            switch (selectedTable) {
              case "Open":
                return <OpenOrdersTable hyperdrive={hyperdrive} />;
              case "Closed":
                return <ClosedOrdersTable hyperdrive={hyperdrive} />;
              default:
                assertNever(selectedTable);
            }
          })()}
        </div>
      </div>
    </div>
  );
}
