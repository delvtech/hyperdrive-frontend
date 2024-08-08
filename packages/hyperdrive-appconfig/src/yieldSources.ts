import { ProtocolId } from "src/protocols";

export type YieldSourceId = keyof typeof yieldSources;
export interface YieldSource {
  id: YieldSourceId;
  shortName: string;
  protocol: ProtocolId;
  isSharesPeggedToBase: boolean;
}

const makerDsr: YieldSource = {
  id: "makerDsr",
  shortName: "Maker DSR",
  protocol: "maker",
  isSharesPeggedToBase: false,
};

const lidoSteth: YieldSource = {
  id: "lidoSteth",
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
};

const morphoBlueSusdeDai: YieldSource = {
  id: "morphoBlueSusdeDai",
  shortName: "MetaMorpho",
  protocol: "morpho",
  isSharesPeggedToBase: false,
};

const reth: YieldSource = {
  id: "reth",
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  isSharesPeggedToBase: false,
};

const ezEth: YieldSource = {
  id: "ezEth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  isSharesPeggedToBase: false,
};

export const yieldSources = {
  makerDsr,
  lidoSteth,
  morphoBlueSusdeDai,
  reth,
  ezEth,
} as const;
