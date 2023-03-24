import { HyperdriveConfig, Protocol } from "src/config/HyperdriveConfig";

/* Supported Protocols */
const MakerProtocol: Protocol = {
  name: "Maker",
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
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 3,
    },
    {
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 6,
    },
    {
      address: "0x000000",
      baseToken: {},
      protocol: MakerProtocol,
      termLength: 12,
    },
  ],
};
