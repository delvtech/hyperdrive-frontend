import { HyperdriveConfig } from "src/config/HyperdriveConfig";

const supportedProtocols = ["Maker", "Mock"] as const;

export const goerliHyperdriveConfig: HyperdriveConfig<
  typeof supportedProtocols
> = {
  chainId: 5,
  protocols: supportedProtocols,
  supportedTermLengths: [3, 6, 12],
  markets: [
    {
      address: "0x000000",
      baseToken: {},
      protocol: "Maker",
      termLength: 3,
    },
  ],
};
