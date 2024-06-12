import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ClosedLongsTable } from "src/ui/hyperdrive/longs/ClosedLongsTable/ClosedLongsTable";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { OpenLongsTable } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTable";
import { useClosedLongs } from "src/ui/hyperdrive/longs/hooks/useClosedLongs";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalClosedLongsValue } from "src/ui/hyperdrive/longs/hooks/useTotalClosedLongsValue";
import { useTotalOpenLongsValue } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
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
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const { openLongs } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { closedLongs } = useClosedLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { totalOpenLongsValue, isLoading: isTotalOpenValueLoading } =
    useTotalOpenLongsValue({
      hyperdrive,
      account,
      longs: openLongs,
      enabled: activeOpenOrClosedTab === "Open",
    });
  const { totalClosedLongsValue, isLoading: isTotalClosedLongsValueLoading } =
    useTotalClosedLongsValue({
      hyperdrive,
      account,
      closedLongs,
      enabled: activeOpenOrClosedTab === "Closed",
    });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const totalValue =
    activeOpenOrClosedTab === "Open"
      ? totalOpenLongsValue
      : totalClosedLongsValue;
  const longs = activeOpenOrClosedTab === "Open" ? openLongs : closedLongs;

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 p-8">
            <div className="flex flex-col items-start gap-2">
              <h5 className="font-medium">Long Positions</h5>
              {!isTotalOpenValueLoading || !isTotalClosedLongsValueLoading ? (
                longs?.length ? (
                  <p className="text-sm text-neutral-content">
                    Total Value:{" "}
                    {formatBalance({
                      balance: totalValue || 0n,
                      decimals: baseToken.decimals,
                      places: baseToken.places,
                    })}{" "}
                    {baseToken.symbol}
                  </p>
                ) : undefined
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div className="flex items-center gap-4">
              {account && openLongs?.length ? (
                <OpenLongModalButton
                  modalId="open-long"
                  hyperdrive={hyperdrive}
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
