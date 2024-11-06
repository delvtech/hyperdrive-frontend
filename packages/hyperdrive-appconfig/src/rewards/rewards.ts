import { fetchAeroRewards } from "src/rewards/aero";
import { fetchEtherfiRewards } from "src/rewards/etherfi";
import { fetchGyroscopeRewards } from "src/rewards/gyroscope";
import { fetchLineaRewards } from "src/rewards/linea";
import {
  fetchMorphoCbethUsdcRewards,
  fetchMorphoMwethRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
} from "src/rewards/morpho";

export const rewardFunctions = {
  fetchLineaRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
  fetchMorphoMwethRewards,
  fetchEtherfiRewards,
  fetchMorphoCbethUsdcRewards,
  fetchAeroRewards,
  fetchGyroscopeRewards,
} as const;
