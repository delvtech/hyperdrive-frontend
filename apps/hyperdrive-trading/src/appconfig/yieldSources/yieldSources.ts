export interface YieldSource {
  name: string;
  shortName: string;
  protocol: string;
  iconUrl?: string;
}

export const makerDSR: YieldSource = {
  name: "Dai Savings Rate",
  shortName: "Maker DSR",
  protocol: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

export const yieldSources: Record<string, YieldSource> = {
  "Maker DSR": makerDSR,
};
