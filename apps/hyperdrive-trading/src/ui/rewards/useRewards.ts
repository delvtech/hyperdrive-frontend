import {
  HyperdriveConfig,
  WELL_ICON_URL,
} from "@delvtech/hyperdrive-appconfig";
import {
  useMorphoRate,
  useMorphoVaultRewards,
  vaultAddresses,
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
    // 182d Moonwell Flagship USDC
    "0xD9b66D9a819B36ECEfC26B043eF3B422d5A6123a",
    // 182d Moonwell Flagship EURC
    "0xdd8E1B14A04cbdD98dfcAF3F0Db84A80Bfb8FC25",
  ],
};

export const eligibleMarketsForMorphoVaultRewards: Record<number, Address[]> = {
  [base.id]: [
    // 182d Moonwell Flagship ETH
    "0xceD9F810098f8329472AEFbaa1112534E96A5c7b",
    // 182d Moonwell Flagship USDC
    "0xD9b66D9a819B36ECEfC26B043eF3B422d5A6123a",
    // 182d Moonwell Flagship EURC
    "0xdd8E1B14A04cbdD98dfcAF3F0Db84A80Bfb8FC25",
  ],
};

export const eligibleForAeroRewards: Record<number, Address[]> = {
  [base.id]: [
    // 182d USDC/AERO market
    // TODO: Update to correct market when deployed
    "0x4eEa8EeD4dDf9bEe3bDfA3eC0A7bDf5bAeEa8EeD",
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

export const eligibleForEtherFiRewards: Record<number, Address[]> = {
  [mainnet.id]: [
    // 182d Ether.fi Staked ETH
    "0x158Ed87D7E529CFE274f3036ade49975Fb10f030",
  ],
};

type RewardType =
  | "MorphoFlatRate"
  | "MorphoVault"
  | "MorphoVaultAllocation"
  | "LineaLXPL"
  | "EtherFi";

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
        hyperdrive.address,
      ) ?? false,
  });

  const { morphoVaultData } = useMorphoVaultRewards({
    hyperdrive,
    enabled:
      eligibleMarketsForMorphoVaultRewards[base.id]?.includes(
        hyperdrive.address,
      ) ?? false,
  });

  const rewards = [];

  // Add any morpho rewards for this market
  if (
    eligibleMarketsForMorphoRewards[hyperdrive.chainId]?.includes(
      hyperdrive.address,
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
  if (
    eligibleMarketsForMorphoVaultRewards[base.id]?.includes(hyperdrive.address)
  ) {
    const vaultReward: Reward = {
      id: "MorphoVault",
      name: morphoVaultData?.vault?.state.rewards[0].asset.name ?? "WELL",
      iconUrl: WELL_ICON_URL,
      amount: morphoVaultData?.reward?.supplyApr
        ? `${(morphoVaultData.reward.supplyApr * 100).toFixed(2)}%`
        : "0%",
    };

    if (vaultAddresses[hyperdrive.address].allocation) {
      let vaultAllocationRewardTotal: number = 0;

      const totalAssetsUsd = morphoVaultData.vault?.state.totalAssetsUsd;

      morphoVaultData.vault?.state.allocation?.forEach((allocation) => {
        const rewardsMarket = allocation.market.state.rewards.find(
          (reward) =>
            reward.asset.address ===
            vaultAddresses[hyperdrive.address].allocation?.assets[0].address,
        );

        if (rewardsMarket) {
          const marketRewardsEarned =
            allocation.supplyAssetsUsd * rewardsMarket.supplyApr;
          vaultAllocationRewardTotal += marketRewardsEarned;
        }
      });

      const vaultAllocationReward: Reward = {
        id: "MorphoVaultAllocation",
        name:
          vaultAddresses[hyperdrive.address].allocation?.assets[0].name ?? "",
        iconUrl:
          vaultAddresses[hyperdrive.address].allocation?.assets[0].assetIcon,
        // Vault allocation rewards are calculated by taking the total assets in the vault (in USD), and dividing it by the rewards earned for the vault in each market it has allocated to.
        amount: totalAssetsUsd
          ? `${((vaultAllocationRewardTotal / totalAssetsUsd) * 100).toFixed(2)}%`
          : "0%",
      };
      rewards.push(vaultAllocationReward);
    }
    rewards.push(vaultReward);
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

  // Add any ether.fi rewards for this market
  if (
    eligibleForEtherFiRewards[hyperdrive.chainId]?.includes(hyperdrive.address)
  ) {
    const etherFiReward: Reward = {
      id: "EtherFi",
      name: "eETH",
      amount: "2x",
    };
    rewards.push(etherFiReward);
  }

  return rewards;
}
