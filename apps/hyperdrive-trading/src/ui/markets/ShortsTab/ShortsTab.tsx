import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenOrClosedTab } from "src/ui/markets/PositionsTabs/PositionsTabs";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenShortsTable } from "src/ui/portfolio/OpenShortsTable/OpenShortsTable";

export function ShortsTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams] = useSearchParams();
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-end">
            <OpenClosedFilter />
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <OpenShortsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedShortsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      transactionForm={<OpenShortForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Open short"}
    />
  );
}
