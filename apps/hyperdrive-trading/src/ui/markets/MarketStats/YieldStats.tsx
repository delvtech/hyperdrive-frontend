import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
export function YieldStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const { fixedAPR, fixedAPRStatus } = useCurrentFixedAPR(hyperdrive.address);
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });

  return (
    <div className="flex flex-wrap gap-16">
      <Stat
        label="Fixed APR"
        value={
          fixedAPRStatus === "loading" && fixedAPR === undefined ? (
            <Skeleton className="w-20" />
          ) : (
            <span className="flex items-center gap-1.5">
              {fixedAPR?.formatted || "0"}%
            </span>
          )
        }
        description="Fixed rate earned from opening longs, before fees and slippage are applied."
      />
      <Stat
        label="Yield Source APY"
        value={
          vaultRateStatus === "loading" && vaultRate === undefined ? (
            <Skeleton className="w-20" />
          ) : (
            <div className="flex flex-row">{vaultRate?.formatted || 0}%</div>
          )
        }
        description={`The yield source backing the hy${baseToken.symbol} in this pool.`}
        tooltipPosition={"right"}
      />
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
    </div>
  );
}