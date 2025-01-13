import { parseFixed } from "@delvtech/fixed-point-wasm";
import {
  HyperdriveConfig,
  PointMultiplierReward,
} from "@delvtech/hyperdrive-appconfig";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useAddLiquidityRewards } from "src/ui/rewards/hooks/useAddLiquidityRewards";

export function usePointsMultipliers({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): { multiplier: string; label: string }[] | undefined {
  const { rewards } = useAddLiquidityRewards({ hyperdriveConfig: hyperdrive });
  const { longPrice } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const pointRewards = rewards?.filter(
    ({ type }) => type === "pointMultiplier",
  ) as PointMultiplierReward[] | undefined;

  if (!longPrice || !pointRewards) {
    return;
  }

  const multipliers = pointRewards.map(
    ({ pointMultiplier, pointTokenLabel }) => {
      const capitalMultiplier = calculateMarketYieldMultiplier(longPrice);
      return {
        multiplier: capitalMultiplier
          .mul(parseFixed(pointMultiplier))
          .format({ decimals: 0 }),
        label: pointTokenLabel,
      };
    },
  );

  return multipliers;
}
