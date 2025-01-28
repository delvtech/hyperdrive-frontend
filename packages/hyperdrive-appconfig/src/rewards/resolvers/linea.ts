import { lineaChainConfig } from "src/chains/chains";
import { RewardConfig, RewardResolver } from "src/rewards/types";
import { linea } from "viem/chains";

export const lineaRewards: RewardConfig = {
  resolverId: "fetchLineaRewards",
  chainIds: [linea.id],
};
export const fetchLineaRewards: RewardResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      pointMultiplier: 1n,
      pointTokenLabel: "LXP-L Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
};
