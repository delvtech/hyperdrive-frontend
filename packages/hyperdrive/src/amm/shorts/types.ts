import { Address } from "viem";

export interface Short {
  hyperdriveAddress: Address;
  assetId: bigint;
  bondAmount: bigint;
  /**
   * Time in seconds when this short will mature
   */
  maturity: bigint;
}

export interface ClosedShort extends Short {
  // A closed short will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
