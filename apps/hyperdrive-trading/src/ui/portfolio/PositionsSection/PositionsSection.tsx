import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenShortsTable } from "src/ui/portfolio/OpenShortsTable/OpenShortsTable";
import {
  PositionTab,
  PositionTabs,
} from "src/ui/portfolio/PositionTabs/PositionTabs";

export type OpenOrClosedTab = "Open" | "Closed";

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
      <div className="mb-4 flex w-full items-center justify-between border-b border-neutral-content/30">
        <h2 className="text-h5 font-thin leading-h5 text-neutral-content">
          Your positions
        </h2>
        <PositionTabs
          setActivePositionTab={setActivePositionTab}
          activePositionTab={activePositionTab}
        />

        <div className="daisy-tabs-boxed">
          <a
            onClick={() => setActiveOpenOrClosedTab("Open")}
            className={classNames("daisy-tab", {
              "daisy-tab-active !bg-base-300 !text-white":
                activeOpenOrClosedTab === "Open",
            })}
          >
            Open
          </a>
          <a
            onClick={() => setActiveOpenOrClosedTab("Closed")}
            className={classNames("daisy-tab", {
              "daisy-tab-active !bg-base-300 !text-white":
                activeOpenOrClosedTab === "Closed",
            })}
          >
            Closed
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-full">
          {(() => {
            switch (activePositionTab) {
              case "Longs": {
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenLongsTable hyperdrive={hyperdrive} />;
                }
                return <ClosedLongsTable hyperdrive={hyperdrive} />;
              }
              case "Shorts": {
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenShortsTable hyperdrive={hyperdrive} />;
                }
                // TODO: Wire this up
                return <ClosedLongsTable hyperdrive={hyperdrive} />;
              }
              case "LP":
                /* TODO: Wire this up */
                return <Well>Under construction</Well>;
              default:
                assertNever(activePositionTab);
            }
          })()}
        </div>
      </div>
    </div>
  );
}
