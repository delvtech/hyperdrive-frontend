import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ClosedShortsTable } from "src/ui/hyperdrive/shorts/ClosedShortsTable/ClosedShortsTable";
import { useClosedShorts } from "src/ui/hyperdrive/shorts/hooks/useClosedShorts";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { useTotalClosedShortsValue } from "src/ui/hyperdrive/shorts/hooks/useTotalClosedShortsValue";
import { useTotalOpenShortsValue } from "src/ui/hyperdrive/shorts/hooks/useTotalOpenShortsValue";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { OpenShortsTable } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTable";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useAccount } from "wagmi";

export function ShortsTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openShorts } = useOpenShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { closedShorts } = useClosedShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { totalOpenShortsValue, isLoading: isTotalOpenValueLoading } =
    useTotalOpenShortsValue({
      hyperdrive,
      account,
      shorts: openShorts,
    });
  const { totalClosedShortsValue, isLoading: isTotalClosedValueLoading } =
    useTotalClosedShortsValue({
      hyperdrive,
      account,
      closedShorts,
    });

  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const totalValue =
    activeOpenOrClosedTab === "Open"
      ? totalOpenShortsValue
      : totalClosedShortsValue;
  const isLoading = isTotalOpenValueLoading || isTotalClosedValueLoading;
  const shorts = activeOpenOrClosedTab === "Open" ? openShorts : closedShorts;

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 p-8">
            <div className="flex flex-col items-start gap-2">
              <h5 className="font-medium">Short Positions</h5>
              {!isLoading ? (
                shorts?.length ? (
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
              {account && openShorts?.length ? (
                <OpenShortModalButton
                  modalId="open-short"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              <OpenClosedFilter />
            </div>
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <OpenShortsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedShortsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}
