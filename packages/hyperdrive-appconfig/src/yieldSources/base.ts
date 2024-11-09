import { YieldSourceDefinition } from "src/yieldSources/types";
import { base } from "viem/chains";

export const morphoCbethUsdc: YieldSourceDefinition = {
  chainId: base.id,
  id: "morphoCbethUsdc",
  shortName: "Morpho cbETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoCbethUsdcRewards",
};

export const cbeth: YieldSourceDefinition = {
  chainId: base.id,
  id: "cbeth",
  shortName: "cbETH",
  protocol: "coinbase",
  historicalRatePeriod: 1,
};
export const mwEth: YieldSourceDefinition = {
  chainId: base.id,
  id: "mwEth",
  shortName: "Moonwell Flagship ETH",
  // This is technically a morpho vault that wraps moonwell, so the protocol
  // should be morpho
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMwethRewards",
};
export const stkWell: YieldSourceDefinition = {
  chainId: base.id,
  id: "stkWell",
  shortName: "Moonwell Staked WELL",
  protocol: "moonwell",
  historicalRatePeriod: 1,
};

export const snars: YieldSourceDefinition = {
  chainId: base.id,
  id: "snars",
  shortName: "Numun Staked nARS",
  protocol: "numun",
  historicalRatePeriod: 1,
};

export const mwEurc: YieldSourceDefinition = {
  chainId: base.id,
  id: "mwEurc",
  shortName: "Moonwell Flagship EURC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMweurcRewards",
};

export const mwUsdc: YieldSourceDefinition = {
  chainId: base.id,
  id: "mwUsdc",
  shortName: "Moonwell Flagship USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMwusdcRewards",
};

export const aeroUsdcAero: YieldSourceDefinition = {
  chainId: base.id,
  id: "aeroUsdcAero",
  shortName: "Aerodrome USDC/AERO",
  protocol: "aerodrome",
  historicalRatePeriod: 1,
  rewardsFn: "fetchAeroRewards",
};
