import { Address } from "viem";

export interface LpPosition {
  hyperdriveAddress: Address;
  assetId: bigint;
  lpShares: bigint;
}

export interface ClosedLP extends LpPosition {
  // A closed lp will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
