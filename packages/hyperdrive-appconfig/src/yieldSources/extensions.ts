import { protocols } from "src/protocols/protocols";

export interface YieldSource {
  id: string;
  shortName: string;
  protocol: keyof typeof protocols;
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

const metaMorpho: YieldSource = {
  id: "metaMorpho",
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
  metaMorpho,
  reth,
  ezEth,
} as const;
