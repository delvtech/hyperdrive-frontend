export interface Long {
  assetId: bigint;
  bondAmount: bigint;
  /**
   * Time in seconds when this long will mature
   */
  maturity: bigint;

  baseAmountPaid: bigint;
  sharesAmountPaid: bigint;
}

export interface ClosedLong extends Long {
  // A closed long will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
