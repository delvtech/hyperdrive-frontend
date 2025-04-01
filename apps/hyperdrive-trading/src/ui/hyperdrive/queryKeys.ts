import "src/base/makeQueryKey";
import { Address } from "viem";
interface HyperdriveQueryKeys {
  unpausedPools: {
    chainId: number;
    filterPoolsWithoutRewards?: boolean;
    showPausedPools?: boolean;
  };
  poolInfo: { chainId: number; hyperdriveAddress: Address };
  currentLongPrice: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  presentValue: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  fixedApr: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  lpApy: {
    chainId: number;
    hyperdriveAddress: Address;
    blockNumber: bigint | undefined;
  };
  previewCloseLong: {
    chainId: number;
    hyperdriveAddress: Address;
    maturityTime: bigint | undefined;
    bondAmountIn: bigint | undefined;
    asBase: boolean;
    zapTokenPrice: bigint | undefined;
    baseTokenPrice: bigint | undefined;
    tokenOutAddress: Address | undefined;
  };
}
declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    hyperdrive: HyperdriveQueryKeys;
  }
}
