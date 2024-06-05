import { HyperdriveConfig, findYieldSourceToken } from "@hyperdrive/appconfig";
import { useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { FixedRateStat } from "src/ui/markets/MarketStats/FixedRateStat";
import { ShortRateStat } from "src/ui/markets/MarketStats/ShortRateStat";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { YieldSourceRateBadge } from "src/ui/vaults/YieldSourceRateBadge";
export function YieldStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { position } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  return (
    <Well transparent block>
      <div className="space-y-8">
        <div className="flex justify-between">
          <h5 className="flex text-neutral-content">Yield</h5>
          <div className="font-dmMono text-neutral-content">
            <YieldSourceRateBadge
              hyperdriveAddress={hyperdrive.address}
              labelRenderer={(vaultRate) =>
                `${sharesToken.extensions.shortName} @ ${vaultRate.formatted || 0} % APY`
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 lg:gap-16">
          <Animated isActive={position === "Longs"}>
            <FixedRateStat hyperdrive={hyperdrive} />
          </Animated>
          <Animated isActive={position === "Shorts"}>
            <ShortRateStat hyperdrive={hyperdrive} />
          </Animated>
          <Animated isActive={position === "LP"}>
            <Stat
              label="LP APY (7d)"
              value={
                lpApyStatus !== "loading" ? (
                  <span className="flex items-center gap-1.5">
                    {lpApy === undefined
                      ? "no data"
                      : `${(lpApy * 100).toFixed(2) === "-0.00" ? "0.00" : (lpApy * 100).toFixed(2)}%`}{" "}
                  </span>
                ) : (
                  <Skeleton className="w-20" />
                )
              }
              description={`The LP's annual return projection assuming the past 7-day performance rate continues for a year.`}
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
        "gradient-text z-20 scale-105": isActive,
      })}
    >
      {children}
    </div>
  );
}
