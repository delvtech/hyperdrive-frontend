import { base } from "viem/chains";

import { YieldSource } from "src/yieldSources/types";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    morphoCbethUsdc: "morphoCbethUsdc";
    cbeth: "cbeth";
    mwEth: "mwEth";
    mwEurc: "mwEurc";
    mwUsdc: "mwUsdc";
    stkWell: "stkWell";
    snars: "snars";
    aeroUsdcAero: "aeroUsdcAero";
  }
}

export const morphoCbethUsdc: YieldSource = {
  chainId: base.id,
  id: "morphoCbethUsdc",
  shortName: "Morpho cbETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoCbethUsdcRewards",
};

export const cbeth: YieldSource = {
  chainId: base.id,
  id: "cbeth",
  shortName: "cbETH",
  protocol: "coinbase",
  historicalRatePeriod: 1,
};
export const mwEth: YieldSource = {
  chainId: base.id,
  id: "mwEth",
  shortName: "Moonwell Flagship ETH",
  // This is technically a morpho vault that wraps moonwell, so the protocol
  // should be morpho
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMwethRewards",
};
export const stkWell: YieldSource = {
  chainId: base.id,
  id: "stkWell",
  shortName: "Moonwell Staked WELL",
  protocol: "moonwell",
  historicalRatePeriod: 1,
};

export const snars: YieldSource = {
  chainId: base.id,
  id: "snars",
  shortName: "Numun Staked nARS",
  protocol: "numun",
  historicalRatePeriod: 1,
};

export const mwEurc: YieldSource = {
  chainId: base.id,
  id: "mwEurc",
  shortName: "Moonwell Flagship EURC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMweurcRewards",
};

export const mwUsdc: YieldSource = {
  chainId: base.id,
  id: "mwUsdc",
  shortName: "Moonwell Flagship USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewardsFn: "fetchMorphoMwusdcRewards",
};

export const aeroUsdcAero: YieldSource = {
  chainId: base.id,
  id: "aeroUsdcAero",
  shortName: "Aerodrome USDC/AERO",
  protocol: "aerodrome",
  historicalRatePeriod: 1,
  rewardsFn: "fetchAeroRewards",
};
