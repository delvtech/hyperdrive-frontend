import { fixed, FixedPoint, parseFixed } from "@delvtech/fixed-point-wasm";
import { PoolConfig, PoolInfo } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";
import { mainnet } from "viem/chains";

// TODO @cashd: Move to AppConfig
// https://github.com/delvtech/hyperdrive-frontend/issues/1341
const eligibleMarketsForMorphoRewards: Record<number, Address[]> = {
  [mainnet.id]: ["0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30"],
};

// Source: https://docs.morpho.org/rewards/concepts/programs
const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);

type RewardType = "MorphoFlatRate";

function getWeight(
  poolConfig: PoolConfig,
  positionType: "short" | "lp",
  poolInfo?: PoolInfo,
  presentValue?: bigint,
): FixedPoint {
  if (!poolInfo || !presentValue) {
    return parseFixed(0);
  }

  if (positionType === "short") {
    return parseFixed(1, 18);
  }

  const shareReserves = fixed(poolInfo.shareReserves);
  const minShareReserves = fixed(poolConfig.minimumShareReserves);
  const netShareReserves = shareReserves.sub(minShareReserves);

  return netShareReserves.div(presentValue);
}

export function useRewards(
  hyperdrive: HyperdriveConfig,
  positionType: "short" | "lp",
):
  | {
      id: RewardType;
      rewardTokenSymbol: string;
      amount: string;
    }[]
  | undefined {
  const appConfig = useAppConfig();

  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
  });
  const { presentValue } = usePresentValue({
    hyperdriveAddress: hyperdrive.address,
  });

  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];
  if (!yieldSource.rewards) {
    return;
  }
  return yieldSource.rewards.map((reward) => {
    if (reward.type === "MorphoFlatRate") {
      const morphoRate = fixed(reward.ratePerYear).mul(
        getWeight(hyperdrive.poolConfig, positionType, poolInfo, presentValue),
      );

      return {
        id: "MorphoFlatRate",
        rewardTokenSymbol: "MORPHO",
        amount: morphoRate.format({
          decimals: 2,
        }),
      };
    }
    throw new Error(`Unsupported reward type: ${reward.type}`);
  });
}
