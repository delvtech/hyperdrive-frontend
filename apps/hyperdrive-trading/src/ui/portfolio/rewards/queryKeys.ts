import "src/base/makeQueryKey";
import { Address } from "viem";
interface RewardQueryKeys {
  userRewards: {
    account: Address | undefined;
  };
}
declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    rewards: RewardQueryKeys;
  }
}
