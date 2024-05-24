import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { MultiStat } from "src/ui/base/components/MultiStat";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";

export function FixedRateStat({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { fixedAPR, fixedAPRStatus } = useCurrentFixedAPR(hyperdrive.address);
  return (
    <MultiStat
      stats={[
        {
          id: "fixedApr",
          label: "Fixed APR",
          value:
            fixedAPRStatus === "loading" && fixedAPR === undefined ? (
              <Skeleton className="w-20" />
            ) : (
              <span className={classNames("flex items-center gap-1.5")}>
                {fixedAPR?.formatted || "0"}%
              </span>
            ),

          description:
            "Annualized fixed rate earned from opening longs, before fees and slippage are applied.",
          tooltipPosition: isTailwindSmallScreen ? "right" : "bottom",
        },
        {
          id: "fixedRoi",
          label: "Fixed ROI",
          value:
            fixedAPRStatus === "loading" && fixedAPR === undefined ? (
              <Skeleton className="w-20" />
            ) : (
              <span className={classNames("flex items-center gap-1.5")}>
                {fixedAPR?.formatted || "0"}%
              </span>
            ),

          description:
            "Holding period return for the duration of the term, before fees and slippage are applied.",
          tooltipPosition: isTailwindSmallScreen ? "right" : "bottom",
        },
      ]}
      onTabChange={(stat: TabbedStatProps): void => {
        // TODO: Store in local storage
        throw new Error("Function not implemented.");
      }}
      activeStatId={"fixedApr"}
    />
  );
}
