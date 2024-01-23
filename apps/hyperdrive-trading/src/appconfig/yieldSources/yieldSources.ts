import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";

export interface YieldSource {
  name: string;
  shortName: string;
  protocol: keyof typeof yieldSourceProtocols;
  iconUrl: string;
}

export const makerDsr: YieldSource = {
  name: "Maker Dai Savings Rate",
  shortName: "Maker DSR",
  protocol: "maker",
  // this is the sDAI logo, which is just a green dai logo
  iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
};

export const lidoSteth: YieldSource = {
  name: "Lido Staked Ether",
  shortName: "Staked Ether",
  protocol: "lido",
  iconUrl: "https://cryptologos.cc/logos/steth-steth-logo.png?v=029",
};

export const yieldSources = {
  makerDsr,
  lidoSteth,
} as const;
