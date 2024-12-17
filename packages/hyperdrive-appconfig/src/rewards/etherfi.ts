import { RewardsResolver } from "src/rewards/types";
import { EETH_ICON_URL } from "src/tokens/tokenIconsUrls";

export const fetchEtherfiRewards: RewardsResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      iconUrl: EETH_ICON_URL,
      pointMultiplier: 2n,
      pointTokenLabel: "Ether.fi Loyalty Points",
    },
  ];
};
