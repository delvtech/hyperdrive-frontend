import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { OpenLongPositionReceived } from "@delvtech/hyperdrive-js";
import "src/base/makeQueryKey";
import { Address } from "viem";
import { OpenShortPositionsData } from "./shorts/usePortfolioShortsData";

interface PortfolioQueryKeys {
  openLongPositions: {
    account: Address | undefined;
    hyperdrives: HyperdriveConfig[];
  };
  totalOpenLongsValue: {
    account: Address | undefined;
    longs:
      | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
      | undefined;
  };
  openShortPositions: {
    account: Address | undefined;
    hyperdrives: HyperdriveConfig[];
  };
  totalOpenShortsValue: {
    account: Address | undefined;
    shorts:
      | (OpenShortPositionsData & { hyperdrive: HyperdriveConfig })[]
      | undefined;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    portfolio: PortfolioQueryKeys;
  }
}
