import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocalStorage } from "react-use";
import { MultiStat, MultiStatProps } from "src/ui/base/components/MultiStat";
import { useShortRate } from "src/ui/hyperdrive/shorts/hooks/useShortRate";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function ShortRateStat({
  isActive,
  hyperdrive,
}: {
  isActive: boolean;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const [rateType, setRateType] = useLocalStorage<"shortApr" | "shortRoi">(
    "yield-stats-short-rate-type",
    "shortApr",
  );
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });

  const { shortApr, shortRoi, shortRateStatus } = useShortRate({
    bondAmount: hyperdrive.decimals > 6 ? BigInt(1e15) : BigInt(1e6),
    hyperdriveAddress: hyperdrive.address,
    variableApy: vaultRate?.vaultRate ? vaultRate.vaultRate : undefined,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
  });
  const isLoadingShortRate =
    shortRateStatus === "loading" && shortApr === undefined;

  const isNegative = (shortApr?.apr || 0) < 0n;

  const rateClassName = classNames("flex items-center gap-1.5", {
    "gradient-text": isActive && shortRateStatus === "success" && !isNegative,
    "text-error": isActive && isNegative,
  });

  return (
    <MultiStat
      activeStatId={
        rateType! /* Stripping off the undefined because we set a default value
        in useLocalStorage */
      }
      stats={[
        {
          id: "shortApr",
          label: "Short APR",
          description:
            "Annualized return on shorts assuming the current variable rate stays the same for 1 year.",
          tooltipPosition: "bottom",
          value: isLoadingShortRate ? (
            <Skeleton className="w-20" />
          ) : (
            <RewardsTooltip
              hyperdriveAddress={hyperdrive.address}
              positionType="short"
            >
              <span className={rateClassName}>
                {shortApr?.formatted ? `${shortApr.formatted}` : "-"}
              </span>
            </RewardsTooltip>
          ),
        },
        {
          id: "shortRoi",
          label: "Short ROI",
          description:
            "Holding period return on shorts assuming the current variable rate stays the same until maturity.",
          tooltipPosition: "bottom",
          value: isLoadingShortRate ? (
            <Skeleton className="w-20" />
          ) : (
            <RewardsTooltip
              hyperdriveAddress={hyperdrive.address}
              positionType="short"
            >
              <span className={rateClassName}>
                {shortRoi?.formatted ? `${shortRoi.formatted}` : "-"}
              </span>
            </RewardsTooltip>
          ),
        },
      ]}
      onTabChange={(stat: MultiStatProps) => {
        setRateType(stat.id as any);
      }}
    />
  );
}
