import { HyperdriveConfig, findYieldSourceToken } from "@hyperdrive/appconfig";
import { useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useImpliedRate } from "src/ui/hyperdrive/shorts/hooks/useImpliedRate";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { YieldSourceRateBadge } from "src/ui/vaults/YieldSourceRateBadge";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
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

  const { fixedAPR, fixedAPRStatus } = useCurrentFixedAPR(hyperdrive.address);
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });

  const { impliedRate, impliedRateStatus, impliedRateFetchStatus } =
    useImpliedRate({
      bondAmount: parseUnits("1", 18),
      hyperdriveAddress: hyperdrive.address,
      variableApy: vaultRate?.vaultRate ? vaultRate.vaultRate : undefined,
      timestamp: BigInt(Math.floor(Date.now() / 1000)),
    });

  const formattedRate = impliedRate ? `${formatRate(impliedRate)}%` : "-";

  return (
    <Well transparent>
      <div className="space-y-8">
        <div className="flex justify-between gap-20">
          <h5 className="flex text-neutral-content">Yield</h5>
          <div className="font-dmMono text-neutral-content">
            <YieldSourceRateBadge
              hyperdriveAddress={hyperdrive.address}
              labelRenderer={(vaultRate) =>
                `${sharesToken.extensions.shortName} @ ${vaultRate.formatted || 0} % APR`
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col">
            <Animated isActive={position === "Longs"}>
              <Stat
                label="Fixed Rate"
                value={
                  fixedAPRStatus === "loading" &&
                  impliedRateFetchStatus !== "idle" &&
                  fixedAPR === undefined ? (
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
            <div className="daisy-join mt-1 flex w-full">
              <span
                className="daisy-btn daisy-join-item daisy-btn-active daisy-btn-xs flex-1"
                data-tip="View as APR"
              >
                APR
              </span>
              <span
                className="daisy-btn daisy-join-item daisy-btn-xs flex-1 text-opacity-80"
                data-tip="View as ROI"
              >
                ROI
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <Animated isActive={position === "Shorts"}>
              <Stat
                label="Implied Short Rate"
                value={
                  impliedRateStatus === "loading" &&
                  impliedRateFetchStatus === "fetching" &&
                  impliedRate === undefined ? (
                    <Skeleton className="w-20" />
                  ) : (
                    <span className={classNames("flex items-center gap-1.5")}>
                      {formattedRate}
                    </span>
                  )
                }
                description="Holding period return on shorts assuming the current variable rate stays the same until maturity."
                tooltipPosition={"right"}
              />
            </Animated>
            <div className="daisy-join mt-1 flex w-full">
              <span
                className="daisy-btn daisy-join-item daisy-btn-active daisy-btn-xs flex-1"
                data-tip="View as APR"
              >
                APR
              </span>
              <span
                className="daisy-btn daisy-join-item daisy-btn-xs flex-1 text-opacity-80"
                data-tip="View as ROI"
              >
                ROI
              </span>
            </div>
          </div>
          <Animated isActive={position === "LP"}>
            <Stat
              label="LP APR (7d)"
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
