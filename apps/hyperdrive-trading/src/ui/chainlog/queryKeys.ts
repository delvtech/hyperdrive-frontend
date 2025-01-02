import "src/base/makeQueryKey";

interface ChainlogQueryKeys {
  pools: {
    chainIds: number[];
  };
  factories: {
    chainIds: number[];
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    chainlog: ChainlogQueryKeys;
  }
}
