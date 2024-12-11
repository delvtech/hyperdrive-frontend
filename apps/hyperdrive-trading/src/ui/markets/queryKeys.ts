import "src/base/makeQueryKey";

interface MarketQueryKeys {
  poolList: {
    chainId: number;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    markets: MarketQueryKeys;
  }
}
