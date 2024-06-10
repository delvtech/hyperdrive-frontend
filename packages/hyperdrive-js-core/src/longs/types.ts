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

export interface OpenLongReceived {
  assetId: bigint;
  value: bigint;
  maturity: bigint;
  details: Long | undefined;
}
// TODO: This is a temporary type for describing the OpenLongPositionReceived without the details field. This will be a position a user has received from another account and we will not be able to calculate the bond details for it.
export type OpenLongReceivedWithoutDetails = Omit<OpenLongReceived, "details">;
