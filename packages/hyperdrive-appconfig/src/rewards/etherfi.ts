import { RewardsResolver } from "./types";
import { EETH_ICON_URL } from "../tokens/tokenIconsUrls";

export const fetchEtherfiRewards: RewardsResolver = async () => {
  return [
    {
      type: "info",
      iconUrl: EETH_ICON_URL,
      message:
        "eEther.fi loyalty points earned in this pool will be boosted 2x.",
    },
  ];
};
