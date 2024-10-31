import { fetchEtherfiRewards } from "src/rewards/etherfi";
import { fetchLineaRewards } from "src/rewards/linea";
import {
  fetchMwEthRewards,
  fetchMweurcRewards,
  fetchMwUsdcRewards,
} from "src/rewards/morpho";

export const rewardFunctions = {
  fetchLineaRewards,
  fetchMweurcRewards,
  fetchMwUsdcRewards,
  fetchMwEthRewards,
  fetchEtherfiRewards,
} as const;
