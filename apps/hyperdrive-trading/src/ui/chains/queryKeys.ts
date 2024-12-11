import "src/base/makeQueryKey";

interface ChainQueryKeys {
  blockNumbers: {
    chainIds: number[];
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    chains: ChainQueryKeys;
  }
}
