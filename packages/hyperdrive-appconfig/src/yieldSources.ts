import { ProtocolId } from "src/protocols";

export type YieldSourceId = keyof typeof yieldSources;
export interface YieldSource {
  id: YieldSourceId;
  shortName: string;
  protocol: ProtocolId;
  isSharesPeggedToBase: boolean;
  /**
   * Number of days in the past to consider for historical rates. This should be
   * used to calculate LP APY and Yield Source APYs.
   */
  historicalRatePeriod: number;
}

const makerDsr: YieldSource = {
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 1,
};

const lidoSteth: YieldSource = {
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
  historicalRatePeriod: 1,
};
const morphoSusdeDai: YieldSource = {
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 1,
};
const morphoUsdeDai: YieldSource = {
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 1,
};
const morphoWstethUsdc: YieldSource = {
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 1,
};

const reth: YieldSource = {
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 1,
};

const ezEth: YieldSource = {
  id: "ezEth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 14,
};

const eEth: YieldSource = {
  id: "eEth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  isSharesPeggedToBase: false,
  historicalRatePeriod: 30,
};

export const yieldSources = {
  eEth,
  makerDsr,
  lidoSteth,
  morphoSusdeDai,
  morphoUsdeDai,
  morphoWstethUsdc,
  reth,
  ezEth,
} as const;
