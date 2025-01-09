import { fetchAeroRewards } from "src/rewards/resolvers/aero";
import { fetchEtherfiRewards } from "src/rewards/resolvers/etherfi";
import { fetchGyroscopeRewards } from "src/rewards/resolvers/gyroscope";
import { fetchLineaRewards } from "src/rewards/resolvers/linea";
import {
  fetchMorphoCbethUsdcRewards,
  fetchMorphoMwethRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
} from "src/rewards/resolvers/morpho";

export const rewardResolvers = {
  fetchLineaRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
  fetchMorphoMwethRewards,
  fetchEtherfiRewards,
  fetchMorphoCbethUsdcRewards,
  fetchAeroRewards,
  fetchGyroscopeRewards,
} as const;

export type RewardResolverKey = keyof typeof rewardResolvers;
