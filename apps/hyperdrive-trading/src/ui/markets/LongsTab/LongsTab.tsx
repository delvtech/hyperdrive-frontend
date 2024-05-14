import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { ClosedLongsTable } from "src/ui/hyperdrive/longs/ClosedLongsTable/ClosedLongsTable";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { OpenLongsTable } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTable";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalLongsValue } from "src/ui/hyperdrive/longs/hooks/useTotalLongsValue";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { useAccount } from "wagmi";
export function LongsTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const { marketState } = useMarketState(hyperdrive.address);
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const { openLongs } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { totalLongsValue, isLoading } = useTotalLongsValue({
    hyperdrive,
    account,
    openLongs,
  });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 p-8">
            <div className="flex flex-col items-start gap-2">
              <h5 className="font-medium">Long Positions</h5>
              {!isLoading ? (
                <>
                  {openLongs?.length ? (
                    <p className="text-xs text-neutral-content">
                      Total Value:{" "}
                      {formatBalance({
                        balance: totalLongsValue || 0n,
                        decimals: baseToken.decimals,
                        places: baseToken.places,
                      })}{" "}
                      {baseToken.symbol}
                    </p>
                  ) : undefined}
                </>
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div className="flex items-center gap-4">
              {account && openLongs?.length && !marketState?.isPaused ? (
                <OpenLongModalButton
                  modalId="open-long"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              {marketState?.isPaused ? (
                <WarningButton
                  label="Market Paused"
                  icon={<PauseCircleIcon width={16} />}
                  tooltip="This market is currently paused. You cannot open new positions but you may close existing ones."
                />
              ) : null}
              <OpenClosedFilter />
            </div>
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <OpenLongsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedLongsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}
