/**
 * @deprecated use type from @hyperdrive/sdk instead
 */
export interface Long {
  assetId: bigint;
  bondAmount: bigint;
  /**
   * Time in seconds when this long will mature
   */
  maturity: bigint;

  baseAmountPaid: bigint;
}

/**
 * @deprecated use type from @hyperdrive/sdk instead
 */
export interface ClosedLong extends Long {
  // A closed long will include the baseAmount that was redeemed
  baseAmount: bigint;
  closedTimestamp: bigint;
}
