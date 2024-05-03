import {
  HyperdriveConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Badge } from "src/ui/base/components/Badge";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useImpliedRate } from "src/ui/hyperdrive/shorts/hooks/useImpliedRate";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
export function YieldStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { position } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { fixedAPR, fixedAPRStatus } = useCurrentFixedAPR(hyperdrive.address);
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });

  // TODO: Remove feature flag once calculation is fixed in rust sdk
  const { isFlagEnabled: isImpliedYieldFeatureFlagEnabled } =
    useFeatureFlag("implied-yield");
  const { impliedRate, impliedRateStatus } = useImpliedRate({
    bondAmount: parseUnits("1", 18),
    hyperdriveAddress: hyperdrive.address,
    variableApy: vaultRate ? vaultRate.vaultRate : undefined,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
  });

  const formattedRate = impliedRate ? formatRate(impliedRate) : "0";

  return (
    <Well transparent>
      <div className="space-y-8">
        <div className="flex justify-between gap-20">
          <h5 className="flex text-neutral-content">Yield</h5>
          <div className="font-dmMono text-neutral-content">
            {vaultRateStatus === "loading" && vaultRate === undefined ? (
              <Skeleton className="w-20" />
            ) : (
              <Badge>
                {sharesToken.extensions.shortName} @ {vaultRate?.formatted || 0}
                % APY
              </Badge>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-16">
          <Animated isActive={position === "Longs"}>
            <Stat
              label="Fixed APR"
              value={
                fixedAPRStatus === "loading" && fixedAPR === undefined ? (
                  <Skeleton className="w-20" />
                ) : (
                  <span className={classNames("flex items-center gap-1.5")}>
                    {fixedAPR?.formatted || "0"}%
                  </span>
                )
              }
              description="Fixed rate earned from opening longs, before fees and slippage are applied."
            />
          </Animated>
          {isImpliedYieldFeatureFlagEnabled ? (
            <Animated isActive={position === "Shorts"}>
              <Stat
                label="Variable APY"
                value={
                  impliedRateStatus === "loading" &&
                  impliedRate === undefined ? (
                    <Skeleton className="w-20" />
                  ) : (
                    <span className={classNames("flex items-center gap-1.5")}>
                      {formattedRate}%
                    </span>
                  )
                }
                description="Resulting rate of return that a Short position accrues, taking into consideration the fixed rate paid to open the Short, the variable rate being earned (on full face value), and the maximum loss on capital."
                tooltipPosition={"right"}
              />
            </Animated>
          ) : undefined}
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
              tooltipPosition={isTailwindSmallScreen ? "right" : "bottom"}
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
        "gradient-text z-20 -translate-y-1 scale-105": isActive,
      })}
    >
      {children}
    </div>
  );
}
