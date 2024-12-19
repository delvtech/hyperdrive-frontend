import "src/base/makeQueryKey";
import { Address } from "viem";
interface HyperdriveQueryKeys {
  unpausedPools: {
    chainId: number;
    filterPoolsWithoutRewards?: boolean;
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
  previewOpenShort: {
    chainId: number;
    hyperdriveAddress: Address;
    amountOfBondsToShort: bigint | undefined;
    asBase: boolean;
    blockNumber: bigint | undefined;
  };
}
declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    hyperdrive: HyperdriveQueryKeys;
  }
}
