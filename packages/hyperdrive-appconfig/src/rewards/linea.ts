import { lineaChainConfig } from "../chains/chains";
import { RewardsResolver } from "./types";

export const fetchLineaRewards: RewardsResolver = async () => {
  return [
    {
      type: "info",
      message: "This pool is eligible for LXP-L Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
};
