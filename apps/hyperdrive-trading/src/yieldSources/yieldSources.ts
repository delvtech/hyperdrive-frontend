import { SDAI_ICON_URL, STETH_ICON_URL } from "src/token/tokenIconsUrlsOld";
import { yieldSourceProtocolsOld } from "src/yieldSources/yieldSourceProtocolsOld";

/**
 * @deprecated use @hyperdrive/appconfig instead
 */
export interface YieldSourceOld {
  name: string;
  shortName: string;
  protocol: keyof typeof yieldSourceProtocolsOld;
  iconUrl: string;
}

export const makerDsr: YieldSourceOld = {
  name: "Maker Dai Savings Rate",
  shortName: "Maker DSR",
  protocol: "maker",
  // this is the sDAI logo, which is just a green dai logo
  iconUrl: SDAI_ICON_URL,
};

export const lidoSteth: YieldSourceOld = {
  name: "Lido Staked Ether",
  shortName: "Staked Ether",
  protocol: "lido",
  iconUrl: STETH_ICON_URL,
};

/**
 * @deprecated use @hyperdrive/appconfig instead
 */
export const yieldSourcesOld = {
  makerDsr,
  lidoSteth,
} as const;
