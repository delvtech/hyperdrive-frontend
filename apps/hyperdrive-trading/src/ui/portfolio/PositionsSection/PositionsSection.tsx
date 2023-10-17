import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenLpTable } from "src/ui/portfolio/OpenLpTable/OpenLpTable";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const activePositionTab =
    (searchParams.get("position") as PositionTab) || "Longs";
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  // Run effect when mounted to set the search params to the default
  useEffect(() => {
    setSearchParams({
      position: activePositionTab,
      openOrClosed: activeOpenOrClosedTab,
    });
  }, []);

  const handleChangeTab = (position: PositionTab) => {
    setSearchParams({
      ...searchParams,
      position,
      openOrClosed: "Open",
    });
  };

  const handleChangeOpenOrClosedTab = (openOrClosed: OpenOrClosedTab) => {
    setSearchParams({
      ...searchParams,
      position: activePositionTab,
      openOrClosed,
    });
  };

  return (
    <div>
      <div className="mb-4 flex w-full items-end justify-between border-b-2">
        <PositionTabs
          onTabClick={handleChangeTab}
          activePositionTab={activePositionTab}
        />

        <div className="daisy-tabs mb-1">
          <button
            onClick={() => handleChangeOpenOrClosedTab("Open")}
            className={classNames("daisy-tab", {
              "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
            })}
          >
            Open
          </button>
          <button
            onClick={() => handleChangeOpenOrClosedTab("Closed")}
            className={classNames("daisy-tab", {
              "daisy-tab-active font-medium":
                activeOpenOrClosedTab === "Closed",
            })}
          >
            Closed
          </button>
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
                return <ClosedShortsTable hyperdrive={hyperdrive} />;
              }
              case "LP":
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenLpTable hyperdrive={hyperdrive} />;
                }
                return <ClosedLpTable hyperdrive={hyperdrive} />;
              default:
                assertNever(activePositionTab);
            }
          })()}
        </div>
      </div>
    </div>
  );
}
