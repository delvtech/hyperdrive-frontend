import { AddLiquidityRewardId } from "src/rewards/actions/lp";
import { OpenShortRewardId } from "src/rewards/actions/short";

export type AnyRewardId = AddLiquidityRewardId | OpenShortRewardId;
