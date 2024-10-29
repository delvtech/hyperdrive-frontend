import { lineaChainConfig } from "src/chains/chains";
import { RewardsResolver } from "src/rewards/types";

export const fetchLineaRewards: RewardsResolver = () => {
  return async () => {
    return [
      {
        type: "info",
        message: "This pool is eligible for LXP-L Rewards",
        iconUrl: lineaChainConfig.iconUrl,
      },
    ];
  };
};
