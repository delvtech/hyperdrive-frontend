import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ClosedOrdersTable } from "src/ui/trade/ClosedOrdersTable/ClosedOrdersTable";
import { OpenOrdersTable } from "src/ui/trade/OpenOrdersTable/OpenOrdersTable";

type TabId = "Open" | "Closed";
export function OrdersSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<TabId>("Open");
  return (
    <>
      <div className="flex w-full items-center justify-between border-b border-base-500">
        <span className="text-h5 font-semibold">Your Positions</span>
        <div className="daisy-tabs">
          <a
            onClick={() => setActiveTab("Open")}
            className={classNames(
              "daisy-tab-lifted daisy-tab daisy-tab-lg font-semibold ",
              {
                "daisy-tab-active": activeTab === "Open",
              },
            )}
          >
            Open
          </a>
          <a
            onClick={() => setActiveTab("Closed")}
            className={classNames(
              "daisy-tab-lifted daisy-tab daisy-tab-lg font-semibold ",
              {
                "daisy-tab-active": activeTab === "Closed",
              },
            )}
          >
            Closed
          </a>
        </div>
      </div>

      <div className="mt-2 mb-24 flex flex-col gap-2">
        {(() => {
          switch (activeTab) {
            case "Open":
              return <OpenOrdersTable hyperdrive={hyperdrive} />;
            case "Closed":
              return <ClosedOrdersTable hyperdrive={hyperdrive} />;
            default:
              assertNever(activeTab);
          }
        })()}
      </div>
    </>
  );
}
