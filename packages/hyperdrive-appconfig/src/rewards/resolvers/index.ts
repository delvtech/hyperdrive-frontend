import { aeroRewards } from "src/rewards/resolvers/aero";
import { etherfiRewards } from "src/rewards/resolvers/etherfi";
import { gyroscopeRewards } from "src/rewards/resolvers/gyroscope";
import { hypervueMilesRewards } from "src/rewards/resolvers/hypervueMiles";
import { lineaRewards } from "src/rewards/resolvers/linea";
import {
  morphoCbethUsdcRewards,
  morphoMwethRewards,
  morphoMweurcRewards,
  morphoMwusdcRewards,
} from "src/rewards/resolvers/morpho";

export const rewardResolvers = {
  lineaRewards,
  morphoMweurcRewards,
  morphoMwusdcRewards,
  morphoMwethRewards,
  etherfiRewards,
  morphoCbethUsdcRewards,
  aeroRewards,
  gyroscopeRewards,
  hypervueMilesRewards,
} as const;

export type RewardResolverId = keyof typeof rewardResolvers;
