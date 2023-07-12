import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
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
      openOrClosed: activeOpenOrClosedTab,
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
      <div className="mb-4 flex w-full items-end justify-between border-b border-neutral-content/30">
        <PositionTabs
          setActivePositionTab={handleChangeTab}
          activePositionTab={activePositionTab}
        />

        <div className="daisy-tabs-boxed mb-1">
          <button
            onClick={() => handleChangeOpenOrClosedTab("Open")}
            className={classNames("daisy-tab text-sm", {
              "daisy-tab-active !bg-base-300 !text-white":
                activeOpenOrClosedTab === "Open",
            })}
          >
            Open
          </button>
          <button
            onClick={() => handleChangeOpenOrClosedTab("Closed")}
            className={classNames("daisy-tab text-sm", {
              "daisy-tab-active !bg-base-300 !text-white":
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
