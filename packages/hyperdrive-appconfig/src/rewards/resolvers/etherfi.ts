import { RewardConfig, RewardResolver } from "src/rewards/types";
import { EETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { mainnet } from "viem/chains";

export const fetchEtherfiRewards: RewardResolver = async () => {
  return [
    {
      type: "pointMultiplier",
      iconUrl: EETH_ICON_URL,
      pointMultiplier: 2n,
      pointTokenLabel: "Ether.fi Loyalty Points",
    },
  ];
};

export const etherfiRewards: RewardConfig = {
  id: "etherfiRewards",
  chainIds: [mainnet.id],
  resolver: fetchEtherfiRewards,
};
