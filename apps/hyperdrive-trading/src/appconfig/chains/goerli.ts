import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { AppConfig, Token, YieldSource } from "src/appconfig/types";

/* Supported Protocols */
const MakerProtocol: YieldSource = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

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
  markets: [
    {
      name: "Maker DSR",
      address: HyperdriveGoerliAddresses.dsrHyperdrive,
      baseToken: daiBaseToken,
      yieldSource: MakerProtocol,
      termLength: 12,
    },
  ],
};
