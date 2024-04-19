import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { Well } from "src/ui/base/components/Well/Well";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { LongsShortsLpTabs } from "src/ui/markets/LongsShortsLpTabs/LongsShortsLpTabs";
import { MarketBreadcrumbs } from "src/ui/markets/MarketDetailsBody/MarketBreadcrumbs";
import { MarketHeader } from "src/ui/markets/MarketDetailsBody/MarketHeader";
import { LiquidityStats } from "src/ui/markets/MarketStats/LiquidityStats";
import { YieldStats } from "src/ui/markets/MarketStats/YieldStats";
import { TransactionAndFaqTabs } from "src/ui/markets/TransactionsAndFaqTabs/TransactionsAndFaqTabs";
import { YourBalanceWell } from "src/ui/markets/YourBalanceWell/YourBalanceWell";
import { useAccount } from "wagmi";

interface PositionsTableProps {
  hyperdrive: HyperdriveConfig;
}
export function MarketDetailsBody({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const { marketState } = useMarketState(hyperdrive.address);
  const { address: account } = useAccount();
  return (
    <div className="flex flex-col gap-12 xl:w-[1200px]">
      <div className="flex flex-wrap items-center justify-start gap-8 sm:justify-between">
        <div className="flex flex-col">
          <MarketBreadcrumbs />
          <MarketHeader hyperdrive={hyperdrive} />
        </div>
        {!account ? undefined : <YourBalanceWell hyperdrive={hyperdrive} />}
      </div>

      {/* Stats section */}
      <div className="flex flex-wrap gap-16 ">
        <Well transparent>
          <div className="space-y-6">
            <h5 className="flex items-center gap-2 text-gray-400">Yield</h5>
            <YieldStats hyperdrive={hyperdrive} />
          </div>
        </Well>
        <Well transparent>
          <div className="space-y-6">
            <h5 className="flex items-center gap-2 text-gray-400">Liquidity</h5>
            <LiquidityStats hyperdrive={hyperdrive} />
          </div>
        </Well>
      </div>

      {marketState?.isPaused && (
        <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
      )}

      <LongsShortsLpTabs hyperdrive={hyperdrive} />

      <TransactionAndFaqTabs hyperdrive={hyperdrive} />
    </div>
  );
}
