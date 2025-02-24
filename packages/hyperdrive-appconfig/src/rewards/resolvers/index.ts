import { aeroRewards, fetchAeroRewards } from "src/rewards/resolvers/aero";
import {
  bigShortEnergyRewards,
  fetchBigShortEnergyRewards,
} from "src/rewards/resolvers/bigShortEnergy";
import {
  etherfiRewards,
  fetchEtherfiRewards,
} from "src/rewards/resolvers/etherfi";
import {
  fetchGyroscopeRewards,
  gyroscopeRewards,
} from "src/rewards/resolvers/gyroscope";
import {
  fetchHypervueMilesRewards,
  hypervueMilesRewards,
} from "src/rewards/resolvers/hypervueMiles";
import { fetchLineaRewards, lineaRewards } from "src/rewards/resolvers/linea";
import {
  fetchMorphoCbethUsdcRewards,
  fetchMorphoMwethRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
  morphoCbethUsdcRewards,
  morphoMwethRewards,
  morphoMweurcRewards,
  morphoMwusdcRewards,
} from "src/rewards/resolvers/morpho";

export const rewardConfigs = {
  etherfiRewards,
  aeroRewards,
  lineaRewards,
  morphoMweurcRewards,
  morphoMwusdcRewards,
  morphoMwethRewards,
  morphoCbethUsdcRewards,
  gyroscopeRewards,
  hypervueMilesRewards,
  bigShortEnergyRewards,
} as const;

export type RewardConfigId = keyof typeof rewardConfigs;

export const rewardResolvers = {
  fetchLineaRewards,
  fetchMorphoMweurcRewards,
  fetchMorphoMwusdcRewards,
  fetchMorphoMwethRewards,
  fetchEtherfiRewards,
  fetchMorphoCbethUsdcRewards,
  fetchAeroRewards,
  fetchGyroscopeRewards,
  fetchHypervueMilesRewards,
  fetchBigShortEnergyRewards,
} as const;

export type RewardResolverId = keyof typeof rewardResolvers;
