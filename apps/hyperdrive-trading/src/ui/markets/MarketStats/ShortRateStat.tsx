import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { parseUnits } from "src/base/parseUnits";
import { MultiStat } from "src/ui/base/components/MultiStat";
import { useImpliedRate } from "src/ui/hyperdrive/shorts/hooks/useImpliedRate";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function ShortRateStat({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
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
  const isLoadingShortRoi =
    impliedRateStatus === "loading" &&
    impliedRateFetchStatus === "fetching" &&
    impliedRate === undefined;

  const formattedRate = impliedRate ? `${formatRate(impliedRate)}%` : "-";

  return (
    <MultiStat
      stats={[
        {
          id: "shortApr",
          label: "Short APR",
          description:
            "Annualized return on shorts assuming the current variable rate stays the same for 1 year.",
          tooltipPosition: "bottom",
          value: isLoadingShortRoi ? (
            <Skeleton className="w-20" />
          ) : (
            <span className={classNames("flex items-center gap-1.5")}>
              {formattedRate}
            </span>
          ),
        },
        {
          id: "shortRoi",
          label: "Short ROI",
          description:
            "Holding period return on shorts assuming the current variable rate stays the same until maturity.",
          tooltipPosition: "bottom",
          value: isLoadingShortRoi ? (
            <Skeleton className="w-20" />
          ) : (
            <span className={classNames("flex items-center gap-1.5")}>
              {formattedRate}
            </span>
          ),
        },
      ]}
      activeStatId={"shortRoi"}
      onTabChange={(stat: TabbedStatProps) => {
        // TODO: Store in local storage
        throw new Error("Function not implemented.");
      }}
    />
  );
}
