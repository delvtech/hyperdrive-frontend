import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { GradientBadge } from "src/ui/base/components/GradientBadge";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useRewards } from "src/ui/rewards/useRewards";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";
export function VariableApyStat({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): ReactNode {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });
  const { rewards } = useRewards(hyperdrive);
  const { vaultRate: yieldSourceRate, vaultRateStatus: yieldSourceRateStatus } =
    useYieldSourceRate({
      chainId,
      hyperdriveAddress,
    });
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const multiplierLabel =
    longPriceStatus === "success" && longPrice
      ? `${calculateMarketYieldMultiplier(longPrice).format({ decimals: 1 })}x`
      : undefined;

  if (yieldSourceRateStatus !== "success") {
    return <Skeleton width={100} />;
  }
  if (!rewards?.length && multiplierLabel && yieldSourceRate) {
    return (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <PercentLabel
          value={formatRate({
            rate: yieldSourceRate.netVaultRate,
            includePercentSign: false,
          })}
          className="mr-1 text-h4"
        />
        <GradientBadge>{multiplierLabel}</GradientBadge>
      </div>
    );
  }

  return (
    <RewardsTooltip
      chainId={chainId}
      hyperdriveAddress={hyperdriveAddress}
      baseRate={yieldSourceRate?.vaultRate}
      netRate={yieldSourceRate?.netVaultRate}
    >
      <PercentLabel
        value={formatRate({
          rate: yieldSourceRate?.netVaultRate ?? 0n,
          includePercentSign: false,
        })}
        className="mr-2 text-h4"
      />
      <GradientBadge>{multiplierLabel}</GradientBadge>
      <span className="mx-1">⚡</span>
    </RewardsTooltip>
  );
}
