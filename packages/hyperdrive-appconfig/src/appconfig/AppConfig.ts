import { Address } from "abitype";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols/protocols";
import { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSource, yieldSources } from "src/yieldSources/extensions";

export type KnownTokenExtensions = YieldSource | EmptyExtensions;

export interface AppConfig {
  chainId: number;
  registryAddress: Address;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig<KnownTokenExtensions>[];
  protocols: Partial<typeof protocols>;
  yieldSources: Partial<typeof yieldSources>;
}
