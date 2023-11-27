import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenOrClosedTab } from "src/ui/markets/PositionsSection/PositionsSection";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { LpPortfolioCard } from "src/ui/portfolio/OpenLpSharesCard/OpenLpSharesCard";

export function LpTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams] = useSearchParams();
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  return (
    <MarketDetailsTab
      positionsLabel="LP position"
      positions={
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-end">
            <OpenClosedFilter />
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <div className="flex">
              <LpPortfolioCard hyperdrive={hyperdrive} />
            </div>
          ) : (
            <ClosedLpTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      faq={<LongsFAQ />}
      transactionForm={<AddLiquidityForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Add liquidity"}
    />
  );
}
