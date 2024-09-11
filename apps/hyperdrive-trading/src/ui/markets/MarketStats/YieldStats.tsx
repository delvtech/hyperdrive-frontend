import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { FixedRateStat } from "src/ui/markets/MarketStats/FixedRateStat";
import { VariableRateStat } from "src/ui/markets/MarketStats/VariableRateStat";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";

export function YieldStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { position = "longs" } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();
  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];

  const { lpApy, lpApyStatus } = useLpApy({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const isYoungerThanHistoricalPeriod = useIsNewPool({ hyperdrive });

  return (
    <Well transparent block>
      <div className="space-y-8">
        <h5 className="flex text-neutral-content">Yield</h5>
        <div className="flex flex-wrap gap-8 lg:gap-16">
          <Animated isActive={position === "longs"}>
            <FixedRateStat
              isActive={position === "longs"}
              hyperdrive={hyperdrive}
            />
          </Animated>
          <Animated isActive={position === "shorts"}>
            <VariableRateStat
              isActive={position === "shorts"}
              hyperdrive={hyperdrive}
            />
          </Animated>
          <Animated isActive={position === "lp"}>
            <Stat
              label={lpApy ? `LP APY (${lpApy.ratePeriodDays}d)` : "LP APY"}
              value={
                <RewardsTooltip
                  chainId={hyperdrive.chainId}
                  hyperdriveAddress={hyperdrive.address}
                  positionType="lp"
                >
                  {lpApyStatus !== "loading" ? (
                    <span
                      className={classNames("gap-1-5 flex items-center", {
                        "gradient-text": position === "lp",
                      })}
                    >
                      {lpApy === undefined || isYoungerThanHistoricalPeriod ? (
                        <span className="flex flex-row">✨New✨</span>
                      ) : (
                        `${
                          lpApy.formatted === "-0.00" ? "0.00" : lpApy.formatted
                        }`
                      )}{" "}
                    </span>
                  ) : (
                    <Skeleton className="w-20" />
                  )}
                </RewardsTooltip>
              }
              description={`The LP's annual return projection assuming the past ${yieldSource.historicalRatePeriod}-day performance rate continues for a year.`}
              tooltipPosition={isTailwindSmallScreen ? "left" : "bottom"}
            />
          </Animated>
        </div>
      </div>
    </Well>
  );
}

function Animated({
  isActive,
  children,
}: PropsWithChildren<{ isActive: boolean }>) {
  return (
    <div
      className={classNames("transition-all duration-200 ease-in-out", {
        "scale-105": isActive,
      })}
    >
      {children}
    </div>
  );
}
