import "src/base/makeQueryKey";
import { Address } from "viem";

interface TokenQueryKeys {
  tokenFiatPrice: {
    chainId: number;
    tokenAddress: Address | undefined;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    tokens: TokenQueryKeys;
  }
}
