import { Market } from "./types";

export interface HyperdriveConfig {
  markets: Market[];
}

const localhostConfig: HyperdriveConfig = {
  markets: [
    {
      baseToken: {
        name: "BASE",
        symbol: "BASE",
        logoUrl: "/src/public/logos/usdc-logo.png",
        address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        decimals: 18,
      },
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      positionDuration: 183 * (4.32 * 1e7),
    },
  ],
};

export const hyperdriveConfigs: Record<SupportedChainId, HyperdriveConfig> = {
  31337: localhostConfig,
};

export type SupportedChainId = 31337;
