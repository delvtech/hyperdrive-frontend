import { mainnet } from "viem/chains";

import { YieldSourceConfig } from "src/yieldSources/types";

export const skyDsr: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "skyDsr",
  shortName: "Sky DAI Savings Rate",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const lidoSteth: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "lidoSteth",
  shortName: "Lido Flagship stETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};
export const morphoSusdeDai: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoUsdeDai: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoWstethUsdc: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const eeth: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
};

export const morphoWstethUsda: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const reth: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

export const ezeth: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

export const stusd: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

export const usds: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "usds",
  shortName: "Savings USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susds: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "susds",
  shortName: "Staking USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susde: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "susde",
  shortName: "Ethena sUSDe",
  protocol: "ethena",
  historicalRatePeriod: 1,
};

export const sgyd: YieldSourceConfig = {
  chainId: mainnet.id,
  id: "sgyd",
  shortName: "Savings GYD",
  protocol: "gyroscope",
  historicalRatePeriod: 1,
};
