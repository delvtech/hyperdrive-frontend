import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenOrClosedTab } from "src/ui/portfolio/PositionsSection/PositionsSection";

export function LongsTab({
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
            <OpenLongsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedLongsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      faq={<LongsFAQ />}
      transactionForm={<OpenLongForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Open long"}
    />
  );
}
