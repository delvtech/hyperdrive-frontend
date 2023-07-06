import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { ClosedOrdersTable } from "src/ui/portfolio/ClosedOrdersTable/ClosedOrdersTable";
import {
  OpenOrClosedTab,
  OpenOrClosedTabs,
} from "src/ui/portfolio/OpenOrClosedTabs/OpenOrClosedTabs";
import { OpenOrdersTable } from "src/ui/portfolio/OpenOrdersTable/OpenOrdersTable";

type PositionTab = "Longs" | "Shorts" | "LP";

export function PositionsSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  // TODO: Move this state into router
  const [activePositionTab, setActivePositionTab] =
    useState<PositionTab>("Longs");
  // TODO: Move this state into router
  const [activeOpenOrClosedTab, setActiveOpenOrClosedTab] =
    useState<OpenOrClosedTab>("Open");

  return (
    <div>
      <div className="mb-2 flex w-full items-center justify-between border-b border-neutral-content/30">
        <span className="text-h5 font-thin text-neutral-content">
          Your Positions
        </span>
        <div className="daisy-tabs">
          <a
            onClick={() => setActivePositionTab("Longs")}
            className={classNames("daisy-tab-lifted daisy-tab daisy-tab-lg", {
              "daisy-tab-active !bg-secondary/30":
                activePositionTab === "Longs",
            })}
          >
            Longs
          </a>
          <a
            onClick={() => setActivePositionTab("Shorts")}
            className={classNames("daisy-tab-lifted daisy-tab daisy-tab-lg", {
              "daisy-tab-active  !bg-neutral-content/30":
                activePositionTab === "Shorts",
            })}
          >
            Shorts
          </a>
          <a
            onClick={() => setActivePositionTab("LP")}
            className={classNames("daisy-tab-lifted daisy-tab daisy-tab-lg", {
              "daisy-tab-active  !bg-neutral-content/30":
                activePositionTab === "LP",
            })}
          >
            LP
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <OpenOrClosedTabs
          setActiveOpenOrClosedTab={setActiveOpenOrClosedTab}
          activeOpenOrClosedTab={activeOpenOrClosedTab}
        />

        {(() => {
          switch (activePositionTab) {
            case "Longs":
              return <OpenOrdersTable hyperdrive={hyperdrive} />;
            case "Shorts":
              return <ClosedOrdersTable hyperdrive={hyperdrive} />;
            case "LP":
              {
                /* TODO: Wire this up */
              }
              return <Well>Under construction</Well>;
            default:
              assertNever(activePositionTab);
          }
        })()}
      </div>
    </div>
  );
}
