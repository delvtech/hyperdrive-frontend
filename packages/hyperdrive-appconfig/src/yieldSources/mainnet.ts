import { mainnet } from "viem/chains";

import { YieldSource } from "src/yieldSources/types";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    makerDsr: "makerDsr";
    lidoSteth: "lidoSteth";
    morphoSusdeDai: "morphoSusdeDai";
    morphoUsdeDai: "morphoUsdeDai";
    morphoWstethUsdc: "morphoWstethUsdc";
    morphoWstethUsda: "morphoWstethUsda";
    reth: "reth";
    ezeth: "ezeth";
    stusd: "stusd";
    eeth: "eeth";
    usds: "usds";
    susds: "susds";
    susde: "susde";
  }
}

export const makerDsr: YieldSource = {
  chainId: mainnet.id,
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  historicalRatePeriod: 1,
};

export const lidoSteth: YieldSource = {
  chainId: mainnet.id,
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
  historicalRatePeriod: 1,
};
export const morphoSusdeDai: YieldSource = {
  chainId: mainnet.id,
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoUsdeDai: YieldSource = {
  chainId: mainnet.id,
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoWstethUsdc: YieldSource = {
  chainId: mainnet.id,
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const eeth: YieldSource<"fetchEtherfiRewards"> = {
  chainId: mainnet.id,
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
  rewards: {
    functionName: "fetchEtherfiRewards",
    args: [],
  },
};

export const morphoWstethUsda: YieldSource = {
  chainId: mainnet.id,
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const reth: YieldSource = {
  chainId: mainnet.id,
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

export const ezeth: YieldSource = {
  chainId: mainnet.id,
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

export const stusd: YieldSource = {
  chainId: mainnet.id,
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

export const usds: YieldSource = {
  chainId: mainnet.id,
  id: "usds",
  shortName: "Savings USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susds: YieldSource = {
  chainId: mainnet.id,
  id: "susds",
  shortName: "Staking USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susde: YieldSource = {
  chainId: mainnet.id,
  id: "susde",
  shortName: "Ethena sUSDe",
  protocol: "ethena",
  historicalRatePeriod: 1,
};
