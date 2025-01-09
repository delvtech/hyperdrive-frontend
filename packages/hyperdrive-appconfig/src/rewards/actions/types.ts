import { AddLiquidityRewardId } from "src/rewards/actions/lp";
import { OpenShortRewardId } from "src/rewards/actions/short";
import { YieldSourceRewardId } from "src/rewards/actions/yieldSource";

export type AnyRewardId =
  | AddLiquidityRewardId
  | OpenShortRewardId
  | YieldSourceRewardId;
