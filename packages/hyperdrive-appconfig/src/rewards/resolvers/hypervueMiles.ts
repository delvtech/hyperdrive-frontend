import { RewardConfig, RewardResolver } from "src/rewards/types";
import { base, gnosis, linea, mainnet } from "viem/chains";

export const HyperVueMilesIconUrl =
  "https://raw.githubusercontent.com/delvtech/hyperdrive-frontend/refs/heads/main/apps/hyperdrive-trading/src/public/hypervue.svg";

export const fetchHypervueMilesLpRewards: RewardResolver = async () => {
  return [
    {
      type: "info",
      iconUrl: HyperVueMilesIconUrl,
      message: "Earns 1 Mile per year for every $1 supplied",
    },
  ];
};

/**
 * Hypervue Miles are rewarded to all chains that Hyperdrive is deployed on.
 * They can be collected off of gnosischain.
 */
const chainIds = [mainnet.id, gnosis.id, linea.id, base.id];
export const hypervueMilesLpRewards: RewardConfig = {
  id: "hypervueMilesLpRewards",
  chainIds,
  resolver: fetchHypervueMilesLpRewards,
};

export const fetchHypervueMilesShortRewards: RewardResolver = async () => {
  return [
    {
      type: "info",
      iconUrl: HyperVueMilesIconUrl,
      message: "Earns 1 Mile per year for every $1 of exposure",
    },
  ];
};
export const hypervueMilesShortRewards: RewardConfig = {
  id: "hypervueMilesShortRewards",
  chainIds,
  resolver: fetchHypervueMilesShortRewards,
};
