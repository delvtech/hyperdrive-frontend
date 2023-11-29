import assertNever from "assert-never";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { LongsTab } from "src/ui/markets/LongsTab/LongsTab";
import { LpTab } from "src/ui/markets/LpTab/LpTab";
import {
  PositionTab,
  PositionTabs,
} from "src/ui/markets/PositionTabs/PositionTabs";
import { ShortsTab } from "src/ui/markets/ShortsTab/ShortsTab";

export type OpenOrClosedTab = "Open" | "Closed";

export function PositionsSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = (searchParams.get("position") as PositionTab) || "Longs";

  function handleChangeTab(position: PositionTab) {
    // Create a new search params so we retain all existing search params
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("position", position);
    newSearchParams.set("openOrClosed", "Open");
    setSearchParams(newSearchParams);
  }

  return (
    <div>
      <div className="mb-4 flex w-full items-end justify-between border-b">
        <PositionTabs
          onTabClick={handleChangeTab}
          activePositionTab={activeTab}
        />
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-full">
          {(() => {
            switch (activeTab) {
              case "Longs":
                return <LongsTab hyperdrive={hyperdrive} />;

              case "Shorts":
                return <ShortsTab hyperdrive={hyperdrive} />;

              case "LP":
                return <LpTab hyperdrive={hyperdrive} />;
              case "FAQ":
                // TODO: Make proper FAQ tab
                return <LongsFAQ />;
              case "Transactions":
                // TODO: Make proper Transactions tab
                return <TransactionTable hyperdrive={hyperdrive} />;

              default:
                assertNever(activeTab);
            }
          })()}
        </div>
      </div>
    </div>
  );
}
