import { protocols } from "src/protocols/protocols";
import { TokenConfig } from "src/tokens/TokenConfig";

export interface YieldSourceExtensions {
  shortName: string;
  protocol: keyof typeof protocols;
}

export interface YieldSourceTokenConfig
  extends TokenConfig<YieldSourceExtensions> {
  tags: string[];
  extensions: YieldSourceExtensions;
}
