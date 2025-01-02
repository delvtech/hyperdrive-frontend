import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import "src/base/makeQueryKey";

interface MarketQueryKeys {
  poolList: {
    chainId: number;
  };
  poolListData: {
    hypedrives: HyperdriveConfig[] | undefined;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    markets: MarketQueryKeys;
  }
}
