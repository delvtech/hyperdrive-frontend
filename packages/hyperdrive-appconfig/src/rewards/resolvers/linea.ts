import { lineaChainConfig } from "src/chains/chains";
import { RewardConfig } from "src/rewards/types";
import { linea } from "viem/chains";

export const lineaRewards: RewardConfig = {
  id: "lineaRewards",
  chainIds: [linea.id],
  resolver: async () => {
    return [
      {
        type: "pointMultiplier",
        pointMultiplier: 1n,
        pointTokenLabel: "LXP-L Rewards",
        iconUrl: lineaChainConfig.iconUrl,
      },
    ];
  },
};
