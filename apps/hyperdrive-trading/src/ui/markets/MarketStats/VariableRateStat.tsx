import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function VariableRateStat({
  isActive,
  hyperdrive,
}: {
  isActive: boolean;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];
  const isNewPool = useIsNewPool({ hyperdrive });

  const isLoadingVaultRate =
    vaultRateStatus === "loading" && vaultRate === undefined;

  const rateClassName = classNames("flex items-center gap-1.5", {
    "gradient-text": isActive && vaultRateStatus === "success",
  });

  return (
    <Stat
      label={`Variable APY (${yieldSource.historicalRatePeriod}d)`}
      description={`The yield rate earned on deposits into ${yieldSource.shortName} in the last ${yieldSource.historicalRatePeriod} days.`}
      tooltipPosition="bottom"
      value={
        isLoadingVaultRate ? (
          <Skeleton className="w-20" />
        ) : (
          <RewardsTooltip
            chainId={hyperdrive.chainId}
            hyperdriveAddress={hyperdrive.address}
            positionType="short"
          >
            {vaultRate === undefined || isNewPool ? (
              <span className="flex flex-row">✨New✨</span>
            ) : (
              <span className={rateClassName}>
                {vaultRate?.formatted || "-"}
              </span>
            )}
          </RewardsTooltip>
        )
      }
    />
  );
}
