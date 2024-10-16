import {
  HyperdriveConfig,
  WELL_ICON_URL,
} from "@delvtech/hyperdrive-appconfig";
import {
  useMorphoRate,
  useMorphoVaultRewards,
} from "src/ui/rewards/useMorphoRate";
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
    // 182d Morpho cbETH/USDC
    "0xFcdaF9A4A731C24ed2E1BFd6FA918d9CF7F50137",
    // 182d Moonwell Flagship ETH
    "0xceD9F810098f8329472AEFbaa1112534E96A5c7b",
  ],
};

export const eligibleMarketsForMorphoVaultRewards: Record<number, Address[]> = {
  [base.id]: [
    // 182d Moonwell Flagship ETH
    "0xceD9F810098f8329472AEFbaa1112534E96A5c7b",
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

type RewardType = "MorphoFlatRate" | "MorphoVault" | "LineaLXPL";

type Reward = {
  id: RewardType;
  name: string;
  amount: string;
  iconUrl?: string;
};

export function useRewards(hyperdrive: HyperdriveConfig): Reward[] | undefined {
  const { morphoRate } = useMorphoRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    enabled:
      eligibleMarketsForMorphoRewards[hyperdrive.chainId]?.includes(
        hyperdrive.address
      ) ?? false,
  });

  const { morphoVaultReward } = useMorphoVaultRewards({
    hyperdrive,
    enabled:
      eligibleMarketsForMorphoVaultRewards[base.id]?.includes(
        hyperdrive.address
      ) ?? false,
  });

  const rewards = [];

  // Add any morpho rewards for this market
  if (
    eligibleMarketsForMorphoRewards[hyperdrive.chainId]?.includes(
      hyperdrive.address
    )
  ) {
    const morphoReward: Reward = {
      id: "MorphoFlatRate",
      name: "MORPHO",
      amount: morphoRate
        ? morphoRate.format({
            decimals: 2,
          })
        : "0",
    };
    rewards.push(morphoReward);
  }

  // Add any linea rewards for this market
  if (
    eligibleMarketsForLineaRewards[hyperdrive.chainId]?.includes(
      hyperdrive.address
    )
  ) {
    const lineaReward: Reward = {
      id: "LineaLXPL",
      name: "LXPL",
      amount: "1",
    };
    rewards.push(lineaReward);
  }

  if (
    eligibleMarketsForMorphoVaultRewards[base.id]?.includes(hyperdrive.address)
  ) {
    const vaultReward: Reward = {
      id: "MorphoVault",
      name: morphoVaultReward?.asset.name ?? "WELL",
      iconUrl: WELL_ICON_URL,
      amount: morphoVaultReward?.supplyApr
        ? `${(morphoVaultReward.supplyApr * 100).toFixed(2)}%`
        : "0%",
    };
    rewards.push(vaultReward);
  }

  return rewards;
}
