import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import CustomBanner from "src/ui/base/components/CustomBanner";
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
/**
 *
 * @deprecated use PoolDetails instead
 */
export function MarketDetailsBody({
  hyperdrive,
}: PositionsTableProps): ReactElement {
  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { address: account } = useAccount();
  return (
    <div className="flex flex-col gap-12 xl:w-[1200px]">
      <div className="flex flex-wrap items-center justify-start gap-8 sm:justify-between">
        <div className="flex flex-col">
          <MarketBreadcrumbs hyperdrive={hyperdrive} />
          <MarketHeader hyperdrive={hyperdrive} />
        </div>
        {!account ? undefined : <YourBalanceWell hyperdrive={hyperdrive} />}
      </div>

      {/* Stats section */}
      <div className="flex flex-wrap gap-16">
        <div className="flex-1">
          <YieldStats hyperdrive={hyperdrive} />
        </div>
        <div className="flex-1">
          <LiquidityStats hyperdrive={hyperdrive} />
        </div>
      </div>

      {marketState?.isPaused && (
        <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
      )}

      <LongsShortsLpTabs hyperdrive={hyperdrive} />

      <TransactionAndFaqTabs hyperdrive={hyperdrive} />
    </div>
  );
}
