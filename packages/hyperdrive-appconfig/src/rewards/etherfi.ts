import { RewardsResolver } from "src/rewards/types";
import { EETH_ICON_URL } from "src/tokens/tokenIconsUrls";

export const fetchEtherfiRewards: RewardsResolver = () => {
  return async () => {
    return [
      {
        type: "info",
        iconUrl: EETH_ICON_URL,
        message:
          "eEther.fi loyalty points earned in this pool will be boosted 2x.",
      },
    ];
  };
};
