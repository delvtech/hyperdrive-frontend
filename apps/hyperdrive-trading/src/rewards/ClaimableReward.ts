import { Reward } from "src/rewards/generated/HyperdriveRewardsApi";

export interface ClaimableReward extends Reward {
  merkleType: "HyperdriveMerkle" | "MerklXyz";
}
