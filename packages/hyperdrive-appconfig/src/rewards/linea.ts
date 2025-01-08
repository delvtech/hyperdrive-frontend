import { lineaChainConfig } from "src/chains/chains";
import { RewardsResolver } from "src/rewards/types";

export const fetchLineaRewards: RewardsResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      pointMultiplier: 1n,
      pointTokenLabel: "LXP-L Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
};
