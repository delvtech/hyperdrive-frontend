import { lineaChainConfig } from "src/chains/chains";
import { AnyReward } from "src/rewards/types";

export async function fetchLineaRewards(): Promise<AnyReward[]> {
  return [
    {
      type: "info",
      message: "This pool is eligible for LXP-L Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
}
