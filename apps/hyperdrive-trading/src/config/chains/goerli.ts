import { HyperdriveConfig, Protocol, Token } from "src/config/HyperdriveConfig";

/* Supported Protocols */
const MakerProtocol: Protocol = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

const MockProtocol: Protocol = {
  name: "Mock",
};

const supportedProtocols: readonly Protocol[] = [
  MakerProtocol,
  MockProtocol,
] as const;

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
      address: "0x8C9Ccd26fFB734658171EE2B0C6d087e72752c20",
      baseToken: daiBaseToken,
      protocol: MakerProtocol,
      termLength: 6,
    },
  ],
};
