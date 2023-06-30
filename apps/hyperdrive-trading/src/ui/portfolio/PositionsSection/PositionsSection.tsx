import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ClosedOrdersTable } from "src/ui/portfolio/ClosedOrdersTable/ClosedOrdersTable";
import { OpenOrdersTable } from "src/ui/portfolio/OpenOrdersTable/OpenOrdersTable";

type TabId = "Open" | "Closed";
export function PositionsSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<TabId>("Open");
  return (
    <div>
      <div className="flex w-full items-center justify-between border-b border-neutral-content/30">
        <span className="text-h5 font-thin text-neutral-content">
          Your Positions
        </span>
        <div className="daisy-tabs">
          <a
            onClick={() => setActiveTab("Open")}
            className={classNames("daisy-tab-lifted daisy-tab daisy-tab-lg", {
              "daisy-tab-active !bg-neutral-content/30": activeTab === "Open",
            })}
          >
            Open
          </a>
          <a
            onClick={() => setActiveTab("Closed")}
            className={classNames("daisy-tab-lifted daisy-tab daisy-tab-lg", {
              "daisy-tab-active  !bg-neutral-content/30":
                activeTab === "Closed",
            })}
          >
            Closed
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
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
    </div>
  );
}
