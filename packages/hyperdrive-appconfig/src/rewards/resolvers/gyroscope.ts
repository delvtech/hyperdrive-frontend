import { RewardConfig } from "src/rewards/types";
import { GYD_ICON_URL } from "src/tokens/tokenIconsUrls";
import { gnosis, mainnet } from "viem/chains";

export const gyroscopeRewards: RewardConfig = {
  id: "gyroscopeRewards",
  chainIds: [mainnet.id, gnosis.id],
  resolver: async () => {
    return [
      {
        type: "pointMultiplier",
        iconUrl: GYD_ICON_URL,
        pointMultiplier: 2n,
        pointTokenLabel: "SPIN Rewards",
      },
    ];
  },
};
