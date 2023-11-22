import assertNever from "assert-never";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
import { LP_CARDS_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";
import { LpPortfolioCard } from "src/ui/portfolio/LpPortfolioCard/LpPortfolioCard";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenLpTable } from "src/ui/portfolio/OpenLpTable/OpenLpTable";
import { OpenShortsTable } from "src/ui/portfolio/OpenShortsTable/OpenShortsTable";
import {
  PositionTab,
  PositionTabs,
} from "src/ui/portfolio/PositionTabs/PositionTabs";

export type OpenOrClosedTab = "Open" | "Closed";

export function PositionsSectionOld({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFlagEnabled: showLpCards } = useFeatureFlag(LP_CARDS_FEATURE_FLAG);

  const activePositionTab =
    (searchParams.get("position") as PositionTab) || "Longs";
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  function handleChangeTab(position: PositionTab) {
    // Create a new search params so we retain all existing search params
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("position", position);
    newSearchParams.set("openOrClosed", "Open");
    setSearchParams(newSearchParams);
  }

  return (
    <div>
      <div className="mb-4 flex w-full items-end justify-between border-b-2">
        <PositionTabs
          onTabClick={handleChangeTab}
          activePositionTab={activePositionTab}
        />

        <OpenClosedFilter />
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-full">
          {(() => {
            switch (activePositionTab) {
              case "Longs":
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenLongsTable hyperdrive={hyperdrive} />;
                }
                return <ClosedLongsTable hyperdrive={hyperdrive} />;

              case "Shorts":
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenShortsTable hyperdrive={hyperdrive} />;
                }
                return <ClosedShortsTable hyperdrive={hyperdrive} />;

              case "LP":
                if (activeOpenOrClosedTab === "Open") {
                  return showLpCards ? (
                    <div className="flex">
                      <LpPortfolioCard hyperdrive={hyperdrive} />
                    </div>
                  ) : (
                    <OpenLpTable hyperdrive={hyperdrive} />
                  );
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
