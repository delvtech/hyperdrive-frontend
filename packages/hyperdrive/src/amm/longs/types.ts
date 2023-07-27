import { Address } from "viem";

export interface Long {
  hyperdriveAddress: Address;
  assetId: bigint;
  bondAmount: bigint;
  /**
   * Time in seconds when this long will mature
   */
  maturity: bigint;

  baseAmountPaid: bigint;
}

export interface ClosedLong extends Long {
  // A closed long will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
