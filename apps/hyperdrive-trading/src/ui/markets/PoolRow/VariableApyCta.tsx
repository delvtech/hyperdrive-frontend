import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { VariableApyStat } from "src/ui/markets/PoolRow/VariableApyStat";
import { useOpenShortRewards } from "src/ui/rewards/hooks/useOpenShortRewards";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

interface YieldMultiplierCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function VariableApyCta({
  hyperdrive,
}: YieldMultiplierCtaProps): ReactElement {
  const { vaultRate: yieldSourceRate } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { rewards } = useOpenShortRewards({ hyperdriveConfig: hyperdrive });

  const label = yieldSourceRate
    ? `Variable APY (${yieldSourceRate.ratePeriodDays}d)`
    : "Variable APY";

  return (
    <PoolStat
      label={label}
      overlay={
        rewards?.length ? (
          <RewardsTooltipContent
            chainId={hyperdrive.chainId}
            position="openShort"
            hyperdriveAddress={hyperdrive.address}
            baseRate={yieldSourceRate?.vaultRate}
            netRate={yieldSourceRate?.netVaultRate}
          />
        ) : null
      }
      value={
        <VariableApyStat
          hyperdriveAddress={hyperdrive.address}
          chainId={hyperdrive.chainId}
        />
      }
    />
  );
}
