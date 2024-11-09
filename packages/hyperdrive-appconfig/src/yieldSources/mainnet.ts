import { YieldSourceDefinition } from "src/yieldSources/types";
import { mainnet } from "viem/chains";

export const makerDsr: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  historicalRatePeriod: 1,
};

export const lidoSteth: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
  historicalRatePeriod: 1,
};
export const morphoSusdeDai: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoUsdeDai: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoWstethUsdc: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const eeth: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
  rewardsFn: "fetchEtherfiRewards",
};

export const morphoWstethUsda: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const reth: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

export const ezeth: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

export const stusd: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

export const usds: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "usds",
  shortName: "Savings USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susds: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "susds",
  shortName: "Staking USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susde: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "susde",
  shortName: "Ethena sUSDe",
  protocol: "ethena",
  historicalRatePeriod: 1,
};

export const sgyd: YieldSourceDefinition = {
  chainId: mainnet.id,
  id: "sgyd",
  shortName: "Savings GYD",
  protocol: "gyroscope",
  historicalRatePeriod: 1,
  rewardsFn: "fetchGyroscopeRewards",
};
