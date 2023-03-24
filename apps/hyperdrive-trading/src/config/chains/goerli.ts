import { HyperdriveConfig, Protocol } from "src/config/HyperdriveConfig";

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

export const goerliHyperdriveConfig: HyperdriveConfig<
  typeof supportedProtocols
> = {
  chainId: 5,
  markets: [
    {
      name: "Maker DSR",
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 3,
    },
    {
      name: "Maker DSR 2",
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 6,
    },
    {
      name: "Maker DSR",
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 12,
    },
  ],
};
