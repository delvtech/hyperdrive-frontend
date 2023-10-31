import { Address } from "abitype";

export interface Short {
  hyperdriveAddress: Address;
  assetId: bigint;
  bondAmount: bigint;
  checkpointId: bigint;
  maturityCheckpointId: bigint;
  /**
   * Time in seconds when this short will mature
   */
  maturity: bigint;
}

export interface ClosedShort extends Short {
  baseAmountReceived: bigint;
  closedTimestamp: bigint;
}

export interface OpenShort extends Short {
  baseAmountPaid: bigint;
  openedTimestamp: bigint;
}
