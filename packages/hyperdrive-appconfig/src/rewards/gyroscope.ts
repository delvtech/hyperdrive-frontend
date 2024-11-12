import { RewardsResolver } from "./types";
import { GYD_ICON_URL } from "../tokens/tokenIconsUrls";

export const fetchGyroscopeRewards: RewardsResolver = async () => {
  return [
    {
      type: "info",
      message: "This pool is eligible for 2x SPIN Rewards",
      iconUrl: GYD_ICON_URL,
    },
  ];
};
