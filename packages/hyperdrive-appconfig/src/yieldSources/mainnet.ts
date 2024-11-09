import { YieldSource } from "src/yieldSources/types";
import { mainnet } from "viem/chains";

export const makerDsr: YieldSource<"makerDsr"> = {
  chainId: mainnet.id,
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  historicalRatePeriod: 1,
};

export const lidoSteth: YieldSource<"lidoSteth"> = {
  chainId: mainnet.id,
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
  historicalRatePeriod: 1,
};
export const morphoSusdeDai: YieldSource<"morphoSusdeDai"> = {
  chainId: mainnet.id,
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoUsdeDai: YieldSource<"morphoUsdeDai"> = {
  chainId: mainnet.id,
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
export const morphoWstethUsdc: YieldSource<"morphoWstethUsdc"> = {
  chainId: mainnet.id,
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const eeth: YieldSource<"eeth"> = {
  chainId: mainnet.id,
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
  rewardsFn: "fetchEtherfiRewards",
};

export const morphoWstethUsda: YieldSource<"morphoWstethUsda"> = {
  chainId: mainnet.id,
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

export const reth: YieldSource<"reth"> = {
  chainId: mainnet.id,
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

export const ezeth: YieldSource<"ezeth"> = {
  chainId: mainnet.id,
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

export const stusd: YieldSource<"stusd"> = {
  chainId: mainnet.id,
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

export const usds: YieldSource<"usds"> = {
  chainId: mainnet.id,
  id: "usds",
  shortName: "Savings USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susds: YieldSource<"susds"> = {
  chainId: mainnet.id,
  id: "susds",
  shortName: "Staking USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

export const susde: YieldSource<"susde"> = {
  chainId: mainnet.id,
  id: "susde",
  shortName: "Ethena sUSDe",
  protocol: "ethena",
  historicalRatePeriod: 1,
};

export const sgyd: YieldSource<"sgyd"> = {
  chainId: mainnet.id,
  id: "sgyd",
  shortName: "Savings GYD",
  protocol: "gyroscope",
  historicalRatePeriod: 1,
  rewardsFn: "fetchGyroscopeRewards",
};
