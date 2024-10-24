import { fetchLineaRewards } from "src/rewards/linea";
import { fetchMorphoRewards } from "src/rewards/morpho";

export const RewardFunctions = {
  fetchMorphoRewards,
  fetchLineaRewards,
} as const;
