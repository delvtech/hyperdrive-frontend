import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useMorphoVaultRewards } from "src/ui/rewards/useMorphoRate";
import { eligibleMarketsForMorphoVaultRewards } from "src/ui/rewards/useRewards";
import { base } from "viem/chains";

interface LpApyCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function LpApyCta({ hyperdrive }: LpApyCtaProps): ReactElement {
  const { lpApy, lpApyStatus } = useLpApy({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { morphoVaultData } = useMorphoVaultRewards({
    hyperdrive,
    enabled:
      eligibleMarketsForMorphoVaultRewards[base.id]?.includes(
        hyperdrive.address,
      ) ?? false,
  });

  const label = lpApy ? `LP APY (${lpApy.ratePeriodDays}d)` : "LP APY";
  let totalLpApy = undefined;

  if (lpApy && !lpApy.isNew) {
    totalLpApy = lpApy.lpApy;
    // If this is a eligible for morpho vault rewards we need to add this to the
    // existing lpApy. The supply APR is returned as a floating point number
    // from the Morpho API so we need to scale it up to 18 decimals before
    // adding it to the lpApy.
    if (morphoVaultData) {
      totalLpApy += BigInt((morphoVaultData.reward?.supplyApr ?? 0) * 1e18);
    }
  }

  return (
    <PoolStat
      label={label}
      isLoading={lpApyStatus === "loading"}
      isNew={lpApy?.isNew}
      value={
        totalLpApy ? (
          <RewardsTooltip
            chainId={hyperdrive.chainId}
            hyperdriveAddress={hyperdrive.address}
          >
            <PercentLabel value={formatRate(totalLpApy, 18, false)} />
          </RewardsTooltip>
        ) : (
          "-"
        )
      }
      action={
        <Link
          to="/market/$chainId/$address"
          params={{
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          }}
          search={{ position: "lp" }}
          className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            window.plausible("positionCtaClick", {
              props: {
                poolAddress: hyperdrive.address,
                positionType: "lp",
                statName: label,
                statValue: totalLpApy ? fixed(totalLpApy, 18).toString() : "",
              },
            });
          }}
        >
          Supply
        </Link>
      }
    />
  );
}
