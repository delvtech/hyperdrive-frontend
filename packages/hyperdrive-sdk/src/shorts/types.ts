import { Address } from "abitype";

interface Short {
  hyperdriveAddress: Address;
  assetId: bigint;
  bondAmount: bigint;
  /**
   * Time in seconds when this short will mature
   */
  maturity: bigint;
}

export interface ClosedShort extends Short {
  baseAmountReceived: bigint;
  closedTimestamp: bigint;
}
