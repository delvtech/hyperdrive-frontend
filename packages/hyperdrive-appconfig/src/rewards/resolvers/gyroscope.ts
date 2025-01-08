import { RewardsResolver } from "src/rewards/types";
import { GYD_ICON_URL } from "src/tokens/tokenIconsUrls";

export const fetchGyroscopeRewards: RewardsResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      iconUrl: GYD_ICON_URL,
      pointMultiplier: 2n,
      pointTokenLabel: "SPIN Rewards",
    },
  ];
};
