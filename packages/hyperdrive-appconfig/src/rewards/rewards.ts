import { fetchAeroRewards } from "./aero";
import { fetchEtherfiRewards } from "./etherfi";
import { fetchGyroscopeRewards } from "./gyroscope";
import { fetchLineaRewards } from "./linea";
import {
  fetchMorphoCbethUsdcRewards,
  fetchMorphoMwethRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
} from "./morpho";

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
