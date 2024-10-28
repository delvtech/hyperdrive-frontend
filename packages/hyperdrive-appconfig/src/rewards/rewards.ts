import { fetchEtherfiRewards } from "src/rewards/etherfi";
import { fetchLineaRewards } from "src/rewards/linea";
import { fetchMoonwellRewards } from "src/rewards/moonwell";
import { fetchMorphoRewards } from "src/rewards/morpho";

export const rewardFunctions = {
  fetchMorphoRewards,
  fetchLineaRewards,
  fetchEtherfiRewards,
  fetchMoonwellRewards,
} as const;
