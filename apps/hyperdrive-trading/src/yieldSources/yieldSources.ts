import { SDAI_ICON_URL, STETH_ICON_URL } from "src/token/tokenIconsUrls";
import { yieldSourceProtocols } from "src/yieldSources/yieldSourceProtocols";

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
  iconUrl: SDAI_ICON_URL,
};

export const lidoSteth: YieldSource = {
  name: "Lido Staked Ether",
  shortName: "Staked Ether",
  protocol: "lido",
  iconUrl: STETH_ICON_URL,
};

export const yieldSources = {
  makerDsr,
  lidoSteth,
} as const;
