import { fixed, FixedPoint, parseFixed } from "@delvtech/fixed-point-wasm";
import { PoolConfig, PoolInfo } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";
import { linea, mainnet } from "viem/chains";

// TODO @cashd: Move to AppConfig
// https://github.com/delvtech/hyperdrive-frontend/issues/1341
const eligibleMarketsForMorphoRewards: Record<number, Address[]> = {
  [mainnet.id]: [
    // 182d Morpho wstETH/USDC
    "0xc8D47DE20F7053Cc02504600596A647A482Bbc46",
    // 182d Morpho Blue wstETH/USDA
    "0x7548c4F665402BAb3a4298B88527824B7b18Fe27",
  ],
};

const eligibleMarketsForLineaRewards: Record<number, Address[]> = {
  [linea.id]: [
    // 182d KelpDAO rsETH
    "0xB56e0Bf37c4747AbbC3aA9B8084B0d9b9A336777",
  ],
};

// Source: https://docs.morpho.org/rewards/concepts/programs
const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);

type RewardType = "MorphoFlatRate" | "LineaLXPL";

type Reward = {
  id: RewardType;
  name: string;
  amount: string;
};

function getWeightMorpho(
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

  // Morpho share price is in 24 decimals, but FixedPoint only supports 18 max.
  const shareReserves = fixed(poolInfo.shareReserves / BigInt(1e6));
  const minShareReserves = fixed(poolConfig.minimumShareReserves / BigInt(1e6));
  const netShareReserves = shareReserves.sub(minShareReserves);

  return netShareReserves.div(presentValue);
}

export function useRewards(
  hyperdrive: HyperdriveConfig,
  positionType: "short" | "lp",
): Reward[] | undefined {
  const { poolInfo } = usePoolInfo({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { presentValue } = usePresentValue({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const rewards = [];

  // Add any morpho rewards for this market
  if (
    eligibleMarketsForMorphoRewards[hyperdrive.chainId]?.includes(
      hyperdrive.address,
    )
  ) {
    const morphoRate = MorphoFlatRatePerYear.mul(
      getWeightMorpho(
        hyperdrive.poolConfig,
        positionType,
        poolInfo,
        presentValue,
      ),
    );

    const morphoReward: Reward = {
      id: "MorphoFlatRate",
      name: "MORPHO",
      amount: morphoRate.format({
        decimals: 2,
      }),
    };
    rewards.push(morphoReward);
  }

  // Add any linea rewards for this market
  if (
    eligibleMarketsForLineaRewards[hyperdrive.chainId]?.includes(
      hyperdrive.address,
    )
  ) {
    const lineaReward: Reward = {
      id: "LineaLXPL",
      name: "LXPL",
      amount: "1",
    };
    rewards.push(lineaReward);
  }

  return rewards;
}
