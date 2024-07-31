import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocalStorage } from "react-use";
import { MultiStat, MultiStatProps } from "src/ui/base/components/MultiStat";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";

export function FixedRateStat({
  hyperdrive,
  isActive,
}: {
  isActive: boolean;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const {
    fixedApr,
    fixedRoi,
    fixedRateStatus: fixedAprStatus,
  } = useFixedRate(hyperdrive.address);
  const [rateType, setRateType] = useLocalStorage<"fixedApr" | "fixedRoi">(
    "yield-stats-long-rate-type",
    "fixedApr",
  );
  const rateClassName = classNames("flex items-center gap-1.5", {
    "gradient-text": isActive,
  });

  return (
    <MultiStat
      activeStatId={
        rateType! /* Stripping off the undefined because we set a default value
        in useLocalStorage */
      }
      stats={[
        {
          id: "fixedApr",
          label: "Fixed APR",
          value:
            fixedAprStatus === "loading" && fixedApr === undefined ? (
              <Skeleton className="w-20" />
            ) : (
              <span className={rateClassName}>
                {fixedApr?.formatted || "0"}
              </span>
            ),

          description:
            "Annualized fixed rate earned from opening a Long, before fees and slippage are applied.",
          tooltipPosition: isTailwindSmallScreen ? "right" : "bottom",
        },
        {
          id: "fixedRoi",
          label: "Fixed ROI",
          value:
            fixedAprStatus === "loading" && fixedApr === undefined ? (
              <Skeleton className="w-20" />
            ) : (
              <span className={rateClassName}>
                {fixedRoi?.formatted || "0"}
              </span>
            ),

          description:
            "Holding period return from opening a Long, before fees and slippage are applied.",
          tooltipPosition: isTailwindSmallScreen ? "right" : "bottom",
        },
      ]}
      onTabChange={(stat: MultiStatProps) => {
        setRateType(stat.id as any);
      }}
    />
  );
}
