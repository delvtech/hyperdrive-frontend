import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { type HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import type { ReactElement } from "react";
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
  const {
    totalOpenLongsValue,
    isLoading: isTotalOpenValueLoading,
    totalOpenLongsValueError,
  } = useTotalOpenLongsValue({
    hyperdrive,
    account,
    longs: openLongs,
    enabled: activeOpenOrClosedTab === "open",
  });
  const { totalClosedLongsValue, isLoading: isTotalClosedValueLoading } =
    useTotalClosedLongsValue({
      hyperdrive,
      account,
      closedLongs,
      enabled: activeOpenOrClosedTab === "open",
    });
  const isTotalValueLoading =
    activeOpenOrClosedTab === "open"
      ? isTotalOpenValueLoading
      : isTotalClosedValueLoading;

  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const totalValue =
    activeOpenOrClosedTab === "open"
      ? totalOpenLongsValue
      : totalClosedLongsValue;
  const longs = activeOpenOrClosedTab === "open" ? openLongs : closedLongs;

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 p-8">
            <div className="flex flex-col items-start gap-2">
              <h5 className="font-medium">Long Positions</h5>
              {isTotalValueLoading ? (
                <Skeleton width={100} />
              ) : longs?.length ? (
                <p className="text-neutral-content text-sm">
                  Total Value:{" "}
                  {formatBalance({
                    balance: totalValue || 0n,
                    decimals: baseToken.decimals,
                    places: baseToken.places,
                  })}{" "}
                  {baseToken.symbol}
                  {totalOpenLongsValueError ? (
                    <span
                      className="daisy-tooltip before:font-normal"
                      data-tip="One or more positions cannot be fully closed at this time. Once all positions can be fully closed the total value of your positions will appear here."
                    >
                      <ExclamationTriangleIcon className=" ml-1 size-4 text-warning" />
                    </span>
                  ) : undefined}
                </p>
              ) : undefined}
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
          {activeOpenOrClosedTab === "open" ? (
            <OpenLongsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedLongsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}
