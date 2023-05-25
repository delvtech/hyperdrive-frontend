import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { HyperdriveConfig, Protocol, Token } from "src/config/HyperdriveConfig";

/* Supported Protocols */
const MakerProtocol: Protocol = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};
const supportedProtocols: readonly Protocol[] = [MakerProtocol] as const;

const daiBaseToken: Token = {
  name: "DAI",
  symbol: "DAI",
  address: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
  decimals: 18,
  iconUrl:
    "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024",
};

export const goerliHyperdriveConfig: HyperdriveConfig<
  typeof supportedProtocols
> = {
  chainId: 5,
  markets: [
    {
      name: "Maker DSR",
      address: HyperdriveGoerliAddresses.makerDsrHyperdrive,
      baseToken: daiBaseToken,
      protocol: MakerProtocol,
      termLength: 12,
    },
  ],
};
