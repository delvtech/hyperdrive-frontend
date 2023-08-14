import { Hash, Address } from "viem";

export interface LongPosition {
  assetId: bigint;

  /**
   * The timestamp, in seconds, when the bonds associated with this long
   * position will mature.
   */
  maturityTimestamp: bigint;
}

////////////////
// Open Longs //
////////////////

export interface OpenLongPosition extends LongPosition {
  /** The account associated with this open long position.  */
  account: Address;

  /**
   * A list of transactions associated with the long position.
   * Multiple transactions can be associated with a single position
   * within the same checkpoint.
   */
  positionTransactions: (SelfOpened | TransferredIn)[];
}

interface OpenLongTransactionBase {
  quantityOfBonds: bigint;

  /** The block when the transaction occurred. */
  blockNumber: bigint;

  transactionHash: Hash;
}

export interface SelfOpened extends OpenLongTransactionBase {
  acquisitionType: "SELF_OPENED";

  /** The amount paid to acquire the bonds. */
  baseAmountIn: bigint;
}

export interface TransferredIn extends OpenLongTransactionBase {
  acquisitionType: "TRANSFER_IN";
  from: Address;
  maturityTimestamp: bigint;
}

//////////////////
// Closed Longs //
//////////////////

/**
 * Represents a closed long position with details on the associated
 * transactions.
 */
export interface ClosedLongPosition extends LongPosition {
  account: Address;
  positionTransactions: (SelfClosed | TransferredIn)[];
}

interface CloseLongTransactionBase {
  /** The quantity of bonds returned to the pool. */
  bondsIn: bigint;

  /** The block when the transaction occurred. */
  blockNumber: bigint;

  transactionHash: Hash;
}

interface SelfClosed extends CloseLongTransactionBase {
  exitType: "SELF_CLOSED";

  /** The amount of base received upon closing the long position. */
  baseAmountOut: bigint;
}

interface TransferredOut extends CloseLongTransactionBase {
  exitType: "TRANSFER_OUT";
  to: Address;
}
