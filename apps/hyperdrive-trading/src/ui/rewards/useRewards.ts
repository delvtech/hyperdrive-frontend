import { fixed, FixedPoint, parseFixed } from "@delvtech/fixed-point-wasm";
import { PoolConfig, PoolInfo } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";
import { base, linea, mainnet } from "viem/chains";

// TODO @cashd: Move to AppConfig
// https://github.com/delvtech/hyperdrive-frontend/issues/1341
const eligibleMarketsForMorphoRewards: Record<number, Address[]> = {
  [mainnet.id]: [
    // 182d Morpho wstETH/USDC
    "0xc8D47DE20F7053Cc02504600596A647A482Bbc46",
    // 182d Morpho Blue wstETH/USDA
    "0x7548c4F665402BAb3a4298B88527824B7b18Fe27",
  ],
  [base.id]: [
    // 182d Morpho chETH/USDC
    "0xFcdaF9A4A731C24ed2E1BFd6FA918d9CF7F50137",
  ],
};

const eligibleMarketsForLineaRewards: Record<number, Address[]> = {
  [linea.id]: [
    // 182d KelpDAO rsETH
    "0xB56e0Bf37c4747AbbC3aA9B8084B0d9b9A336777",
    // 182d Renzo ezETH
    "0x1cB0E96C07910fee9a22607bb9228c73848903a3",
  ],
};

// Source: https://docs.morpho.org/rewards/concepts/programs
// Mainnet Reward Rates
const MorphoFlatRatePerDay = 1.45e-4;

// Base Reward Rates
const MorphoBaseFlatRatePerDay = 2.2e-4;

// Convert to yearly rates
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);
const MorphoBaseFlatRatePerYear = parseFixed(
  MorphoBaseFlatRatePerDay * 365 * 1000,
);

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
    const morphoRate =
      hyperdrive.chainId === base.id
        ? MorphoBaseFlatRatePerYear.mul(
            getWeightMorpho(
              hyperdrive.poolConfig,
              positionType,
              poolInfo,
              presentValue,
            ),
          )
        : MorphoFlatRatePerYear.mul(
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
