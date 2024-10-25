import { lineaChainConfig } from "src/chains/chains";
import { AnyReward } from "src/rewards/types";

export async function fetchLineaRewards(): Promise<AnyReward[]> {
  return [
    {
      type: "info",
      message: "This pool is eligible for L-XPL Rewards",
      iconUrl: lineaChainConfig.iconUrl,
    },
  ];
}
