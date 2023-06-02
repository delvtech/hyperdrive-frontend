import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { AppConfig, Token } from "src/appconfig/types";
import { makerDSR } from "src/appconfig/yieldSources/yieldSources";

const daiBaseToken: Token = {
  name: "DAI",
  symbol: "DAI",
  address: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
  decimals: 18,
  iconUrl:
    "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024",
};

export const goerliAppConfig: AppConfig = {
  chainId: 5,
  hyperdrives: [
    {
      name: "Dai Savings Rate",
      address: HyperdriveGoerliAddresses.dsrHyperdrive,
      baseToken: daiBaseToken,
      yieldSource: "Maker DSR",
      termLength: 12,
    },
  ],
  yieldSources: {
    "Maker DSR": makerDSR,
  },
};
