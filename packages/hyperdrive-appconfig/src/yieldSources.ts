import { ProtocolId } from "src/protocols";

export type YieldSourceId = keyof typeof yieldSources;
export interface YieldSource {
  id: YieldSourceId;
  shortName: string;
  protocol: ProtocolId;
  /**
   * If true, the yield source's shares token will be considered 1 to 1 with the
   * base token. Defaults to false.
   *
   * TODO: Move this onto HyperdriveConfig
   */
  isSharesPeggedToBase?: boolean;
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
  historicalRatePeriod: 1,
};
const morphoUsdeDai: YieldSource = {
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
const morphoWstethUsdc: YieldSource = {
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const morphoCbethUsdc: YieldSource = {
  id: "morphoCbethUsdc",
  shortName: "Morpho cbETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const morphoWstethUsda: YieldSource = {
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const cbeth: YieldSource = {
  id: "cbeth",
  shortName: "cbETH",
  protocol: "coinbase",
  historicalRatePeriod: 1,
};

const reth: YieldSource = {
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

const ezeth: YieldSource = {
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

const lineaEzeth: YieldSource = {
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

const eeth: YieldSource = {
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
};

const gnosisWsteth: YieldSource = {
  id: "gnosisWsteth",
  shortName: "Lido wstETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};

const sxdai: YieldSource = {
  id: "sxdai",
  shortName: "Savings xDAI",
  protocol: "maker",
  historicalRatePeriod: 7,
};

const stusd: YieldSource = {
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

const rseth: YieldSource = {
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
};

export const yieldSources = {
  eeth,
  makerDsr,
  lidoSteth,
  morphoSusdeDai,
  morphoUsdeDai,
  morphoWstethUsdc,
  morphoWstethUsda,
  morphoCbethUsdc,
  reth,
  ezeth,
  gnosisWsteth,
  cbeth,
  sxdai,
  stusd,
  lineaEzeth,
  rseth,
} as const;
