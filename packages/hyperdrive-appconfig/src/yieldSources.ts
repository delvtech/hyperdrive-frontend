import { ChainId } from "src/chains/chains";
import { ProtocolId } from "src/protocols";
import { base, gnosis, linea, mainnet } from "viem/chains";

export type YieldSourceId = keyof typeof yieldSources;
export interface YieldSource {
  chainId: ChainId;
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
  chainId: mainnet.id,
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  historicalRatePeriod: 1,
};

const lidoSteth: YieldSource = {
  chainId: mainnet.id,
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
  historicalRatePeriod: 1,
};
const morphoSusdeDai: YieldSource = {
  chainId: mainnet.id,
  id: "morphoSusdeDai",
  shortName: "Morpho sUSDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
const morphoUsdeDai: YieldSource = {
  chainId: mainnet.id,
  id: "morphoUsdeDai",
  shortName: "Morpho USDe/DAI",
  protocol: "morpho",
  historicalRatePeriod: 1,
};
const morphoWstethUsdc: YieldSource = {
  chainId: mainnet.id,
  id: "morphoWstethUsdc",
  shortName: "Morpho wstETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const morphoCbethUsdc: YieldSource = {
  chainId: base.id,
  id: "morphoCbethUsdc",
  shortName: "Morpho cbETH/USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const morphoWstethUsda: YieldSource = {
  chainId: mainnet.id,
  id: "morphoWstethUsda",
  shortName: "Morpho wstETH/USDA",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const cbeth: YieldSource = {
  chainId: base.id,
  id: "cbeth",
  shortName: "cbETH",
  protocol: "coinbase",
  historicalRatePeriod: 1,
};

const reth: YieldSource = {
  chainId: mainnet.id,
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  historicalRatePeriod: 1,
};

const ezeth: YieldSource = {
  chainId: mainnet.id,
  id: "ezeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

const lineaEzeth: YieldSource = {
  chainId: linea.id,
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};

const eeth: YieldSource = {
  chainId: mainnet.id,
  id: "eeth",
  shortName: "Ether.fi Staked ETH",
  protocol: "etherFi",
  historicalRatePeriod: 30,
};

const gnosisWsteth: YieldSource = {
  chainId: gnosis.id,
  id: "gnosisWsteth",
  shortName: "Lido wstETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};

const sxdai: YieldSource = {
  chainId: gnosis.id,
  id: "sxdai",
  shortName: "Savings xDAI",
  protocol: "maker",
  historicalRatePeriod: 7,
};

const stusd: YieldSource = {
  chainId: mainnet.id,
  id: "stusd",
  shortName: "Angle stUSD",
  protocol: "angle",
  historicalRatePeriod: 1,
};

const rseth: YieldSource = {
  chainId: linea.id,
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
};

const usds: YieldSource = {
  chainId: mainnet.id,
  id: "usds",
  shortName: "Savings USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

const susds: YieldSource = {
  chainId: mainnet.id,
  id: "susds",
  shortName: "Staking USDS",
  protocol: "sky",
  historicalRatePeriod: 1,
};

const mwEth: YieldSource = {
  chainId: base.id,
  id: "mwEth",
  shortName: "Moonwell Flagship ETH",
  // This is technically a morpho vault that wraps moonwell, so the protocol
  // should be morpho
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const stkWell: YieldSource = {
  chainId: base.id,
  id: "stkWell",
  shortName: "Moonwell Staked WELL",
  protocol: "moonwell",
  historicalRatePeriod: 1,
};

const snars: YieldSource = {
  chainId: base.id,
  id: "snars",
  shortName: "Numun Staked nARS",
  protocol: "numun",
  historicalRatePeriod: 1,
};

const mwEurc: YieldSource = {
  chainId: base.id,
  id: "mwEurc",
  shortName: "Moonwell Flagship EURC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const mwUsdc: YieldSource = {
  chainId: base.id,
  id: "mwUsdc",
  shortName: "Moonwell Flagship USDC",
  protocol: "morpho",
  historicalRatePeriod: 1,
};

const aeroLp: YieldSource = {
  chainId: base.id,
  id: "aeroLp",
  shortName: "Aerodrome LP",
  protocol: "aerodrome",
  historicalRatePeriod: 1,
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
  usds,
  susds,
  mwEth,
  stkWell,
  snars,
  mwEurc,
  mwUsdc,
  aeroLp,
} as const;
