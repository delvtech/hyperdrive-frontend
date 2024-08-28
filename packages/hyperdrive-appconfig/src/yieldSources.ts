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

const reth: YieldSource = {
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

const ezEth: YieldSource = {
  id: "ezEth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

const eEth: YieldSource = {
  id: "eEth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
};

const gnosisWsteth: YieldSource = {
  id: "gnosisWsteth",
  shortName: "Gnosis wstETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};

const sxDai: YieldSource = {
  id: "sxDai",
  shortName: "Savings xDAI",
  protocol: "maker",
  historicalRatePeriod: 1,
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
  gnosisWsteth,
  sxDai,
} as const;
