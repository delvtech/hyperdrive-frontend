export interface Long {
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

// TODO: This is a temporary type until all the long positions are migrated to the new format with details used for the long which includes all bond details if those are able to be calculated.
export interface OpenLongPositionReceived {
  id: bigint;
  value: bigint;
  maturity: bigint;
  details: Long | undefined;
}
