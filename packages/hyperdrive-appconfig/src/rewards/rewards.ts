import { fetchEtherfiRewards } from "src/rewards/etherfi";
import { fetchLineaRewards } from "src/rewards/linea";
import { fetchMorphoRewards } from "src/rewards/morpho";

export const rewardFunctions = {
  fetchMorphoRewards,
  fetchLineaRewards,
  fetchEtherfiRewards,
} as const;
