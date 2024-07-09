import { Address } from "abitype";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

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
