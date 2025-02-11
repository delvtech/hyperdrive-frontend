import { RewardConfig, RewardResolver } from "src/rewards/types";
import { base, gnosis, linea, mainnet } from "viem/chains";

export const HyperVueMilesIconUrl =
  "https://raw.githubusercontent.com/delvtech/hyperdrive-frontend/refs/heads/main/apps/hyperdrive-trading/src/public/hypervue.svg";

export const fetchHypervueMilesRewards: RewardResolver = async () => {
  return [
    {
      type: "info",
      iconUrl: HyperVueMilesIconUrl,
      message: "Earns 1 Mile per year for every $1 supplied",
    },
  ];
};
export const hypervueMilesRewards: RewardConfig = {
  id: "hypervueMilesRewards",
  chainIds: [mainnet.id, gnosis.id, linea.id, base.id],
  resolver: fetchHypervueMilesRewards,
};
