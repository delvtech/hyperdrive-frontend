import { Address } from "viem";

export interface LP {
  hyperdriveAddress: Address;
  assetId: bigint;
  lpShares: bigint;
}

export interface ClosedLP extends LP {
  // A closed lp will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
