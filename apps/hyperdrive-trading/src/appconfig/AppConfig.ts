import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { yieldSourceProtocols } from "src/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/yieldSources/yieldSources";

export interface AppConfig {
  chainId: number;
  hyperdrives: HyperdriveConfig[];

  yieldSources: typeof yieldSources;
  yieldSourceProtocols: typeof yieldSourceProtocols;
}
