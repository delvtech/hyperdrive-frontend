import { base } from "viem/chains";

import { YieldSource } from "src/yieldSources/types";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    morphoCbethUsdc: "morphoCbethUsdc";
    cbeth: "cbeth";
    mwEth: "mwEth";
    mwEurc: "mwEurc";
    mwUsdc: "mwUsdc";
    mwAero: "mwAero";
    stkWell: "stkWell";
    snars: "snars";
  }
}

export const morphoCbethUsdc: YieldSource = {
  chainId: base.id,
  id: "morphoCbethUsdc",
  shortName: "Morpho cbETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const cbeth: YieldSource = {
  chainId: base.id,
  id: "cbeth",
  shortName: "cbETH",
  protocol: "coinbase",
  historicalRatePeriod: 1,
};
export const mwEth: YieldSource<"fetchMorphoRewards"> = {
  chainId: base.id,
  id: "mwEth",
  shortName: "Moonwell Flagship ETH",
  // This is technically a morpho vault that wraps moonwell, so the protocol
  // should be morpho
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewards: {
    functionName: "fetchMorphoRewards",
    args: ["0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1", base.id],
  },
};

export const mwAero: YieldSource<"fetchMoonwellRewards"> = {
  chainId: base.id,
  id: "mwAero",
  shortName: "Moonwell Aero",
  protocol: "moonwell",
  historicalRatePeriod: 1,
  rewards: {
    functionName: "fetchMoonwellRewards",
    args: ["0x73902f619CEB9B31FD8EFecf435CbDf89E369Ba6", base.id],
  },
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

export const mwEurc: YieldSource<"fetchMorphoRewards"> = {
  chainId: base.id,
  id: "mwEurc",
  shortName: "Moonwell Flagship EURC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewards: {
    functionName: "fetchMorphoRewards",
    args: ["0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026", base.id],
  },
};

export const mwUsdc: YieldSource<"fetchMorphoRewards"> = {
  chainId: base.id,
  id: "mwUsdc",
  shortName: "Moonwell Flagship USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
  rewards: {
    functionName: "fetchMorphoRewards",
    args: ["0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca", base.id],
  },
};
