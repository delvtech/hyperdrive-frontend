import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { yieldSourceProtocolsOld } from "src/yieldSources/yieldSourceProtocolsOld";
import { yieldSourcesOld } from "src/yieldSources/yieldSources";

/**
 * @deprecated use AppConfig from @hyperdrive/appconfig instead
 */
export interface AppConfigOld {
  chainId: number;
  hyperdrives: HyperdriveConfigOld[];

  yieldSources: typeof yieldSourcesOld;
  yieldSourceProtocols: typeof yieldSourceProtocolsOld;
}
