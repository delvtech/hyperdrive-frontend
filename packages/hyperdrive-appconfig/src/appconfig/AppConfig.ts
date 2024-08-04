import type { Address } from "abitype";
import type { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import type { protocols } from "src/protocols/protocols";
import type { Tag } from "src/tags";
import type { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import type { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export type KnownTokenExtensions = YieldSourceExtensions | EmptyExtensions;

type SomeProtocols = Partial<typeof protocols>;

export interface AppConfig {
  chainId: number;
  tags: Tag[];
  registryAddress: Address;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig<KnownTokenExtensions>[];
  protocols: SomeProtocols;
}
