import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import "src/base/makeQueryKey";
import { Address } from "viem";

interface PortfolioQueryKeys {
  openLongPositions: {
    account: Address | undefined;
    hyperdrives: HyperdriveConfig[];
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    portfolio: PortfolioQueryKeys;
  }
}
