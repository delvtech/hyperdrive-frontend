import "src/base/makeQueryKey";
import { Address } from "viem";

interface RewardsQueryKeys {
  rewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    rewards: RewardsQueryKeys;
  }
}
