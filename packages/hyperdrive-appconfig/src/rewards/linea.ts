import { lineaChainConfig } from "src/chains/chains";
import { InfoReward } from "src/rewards/types";

export async function fetchLineaRewards(): Promise<InfoReward[]> {
  return [
    {
      type: "info",
      message: "This pool is eligible for L-XPL Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
}
