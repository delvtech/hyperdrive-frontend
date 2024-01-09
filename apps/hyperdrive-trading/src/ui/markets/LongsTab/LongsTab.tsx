import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";

export function LongsTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-8 md:px-0">
            <h5 className="font-bold">Long positions</h5>
            <OpenClosedFilter />
          </div>

          {activeOpenOrClosedTab === "Open" ? (
            <OpenLongsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedLongsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      transactionForm={<OpenLongForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Open long"}
    />
  );
}
