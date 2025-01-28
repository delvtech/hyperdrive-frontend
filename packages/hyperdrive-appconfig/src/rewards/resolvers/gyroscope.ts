import { RewardConfig, RewardResolver } from "src/rewards/types";
import { GYD_ICON_URL } from "src/tokens/tokenIconsUrls";
import { gnosis, mainnet } from "viem/chains";

export const gyroscopeRewards: RewardConfig = {
  resolverId: "fetchGyroscopeRewards",
  chainIds: [mainnet.id, gnosis.id],
};

export const fetchGyroscopeRewards: RewardResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      iconUrl: GYD_ICON_URL,
      pointMultiplier: 2n,
      pointTokenLabel: "SPIN Rewards",
    },
  ];
};
