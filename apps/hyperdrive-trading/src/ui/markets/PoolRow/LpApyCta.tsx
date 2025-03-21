import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { LpApyStat } from "src/ui/markets/PoolRow/LpApyStat";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";

interface LpApyCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function LpApyCta({ hyperdrive }: LpApyCtaProps): ReactElement {
  const { lpApy, lpApyStatus } = useLpApy({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const label = lpApy ? `LP APY (${lpApy.ratePeriodDays}d)` : "LP APY";

  return (
    <PoolStat
      label={label}
      overlay={
        <RewardsTooltipContent
          chainId={hyperdrive.chainId}
          hyperdriveAddress={hyperdrive.address}
          position="addLiquidity"
          baseRate={lpApy?.lpApy}
          netRate={lpApy?.netLpApy}
        />
      }
      isLoading={lpApyStatus === "loading"}
      isNew={lpApy?.isNew}
      value={
        <LpApyStat
          chainId={hyperdrive.chainId}
          hyperdriveAddress={hyperdrive.address}
        />
      }
    />
  );
}
