import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";

export interface AppConfig {
  chainId: number;
  hyperdrives: HyperdriveConfig[];

  yieldSources: typeof yieldSources;
  yieldSourceProtocols: typeof yieldSourceProtocols;
}
