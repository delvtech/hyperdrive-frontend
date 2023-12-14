import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { LongsShortsLpTabs } from "src/ui/markets/LongsShortsLpTabs/LongsShortsLpTabs";
import { MarketBreadcrumbs } from "src/ui/markets/MarketDetailsBody/MarketBreadcrumbs";
import { MarketHeader } from "src/ui/markets/MarketDetailsBody/MarketHeader";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { TransactionAndFaqTabs } from "src/ui/markets/TransactionsAndFaqTabs/TransactionsAndFaqTabs";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function MarketDetailsBody({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap items-center justify-start sm:justify-between">
        <div className="flex flex-col">
          <MarketBreadcrumbs />
          <MarketHeader hyperdrive={hyperdrive} longPrice={longPrice} />
        </div>
        {isTailwindSmallScreen ? undefined : (
          <YourBalanceWell token={hyperdrive.baseToken} />
        )}
      </div>

      {/* Stats row */}
      <MarketStats hyperdrive={hyperdrive} />
      {marketState?.isPaused && (
        <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
      )}

      <LongsShortsLpTabs hyperdrive={hyperdrive} />
      <TransactionAndFaqTabs hyperdrive={hyperdrive} />
    </div>
  );
}
