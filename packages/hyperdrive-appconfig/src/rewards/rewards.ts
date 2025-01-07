import {
  AddLiquidityRewardId,
  OpenLongRewardId,
  OpenShortRewardId,
} from "src/rewards/hyperdrive";

// Add new reward ids to this single union type as needed. For example, if we
// end up with a vaults page and the vaults can earn rewards, then we'd add a
// VaultRewardId to this type.
export type AnyRewardId =
  | OpenLongRewardId
  | OpenShortRewardId
  | AddLiquidityRewardId;
