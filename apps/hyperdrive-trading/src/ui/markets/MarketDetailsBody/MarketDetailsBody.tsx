import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { MarketBreadcrumbs } from "src/ui/markets/MarketDetailsBody/MarketBreadcrumbs";
import { MarketHeader } from "src/ui/markets/MarketDetailsBody/MarketHeader";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { YourBalanceWell } from "src/ui/portfolio/YourBalanceWell/YourBalanceWell";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
export function MarketDetailsBody({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  return (
    <div className="flex w-[1280px] flex-col">
      <div className="mb-12 flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-center md:justify-between">
          <div className="flex flex-col">
            <MarketBreadcrumbs hyperdrive={hyperdrive} />
            <MarketHeader hyperdrive={hyperdrive} longPrice={longPrice} />
          </div>
          <YourBalanceWell token={hyperdrive.baseToken} />
        </div>

        {/* Stats row */}
        <MarketStats hyperdrive={hyperdrive} />
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>

      <PositionsSection hyperdrive={hyperdrive} />
    </div>
  );
}
