import { RewardConfig } from "src/rewards/types";
import { EETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { mainnet } from "viem/chains";

export const fetchEtherfiRewards: RewardConfig = {
  id: "fetchEtherfiRewards",
  chainIds: [mainnet.id],
  resolver: async () => {
    return [
      {
        type: "pointMultiplier",
        iconUrl: EETH_ICON_URL,
        pointMultiplier: 2n,
        pointTokenLabel: "Ether.fi Loyalty Points",
      },
    ];
  },
};
