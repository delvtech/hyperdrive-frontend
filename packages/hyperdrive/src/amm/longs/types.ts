import { Hash, Address } from "viem";

export interface LongPosition {
  assetId: bigint;

  /**
   * The timestamp, in seconds, when the bonds associated with this long
   * position will mature.
   */
  maturityTimestamp: number;
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
  positionTransactions: (SelfOpened | TransferredOut)[];
}

interface OpenLongTransactionBase {
  quantityOfBonds: bigint;

  /** The timestamp, in seconds, when the transaction occurred. */
  timestamp: number;

  transactionHash: Hash;
}

interface SelfOpened extends OpenLongTransactionBase {
  acquisitionType: "SELF_OPENED";

  /** The amount paid to acquire the bonds. */
  baseAmountIn: bigint;
}

interface TransferredIn extends OpenLongTransactionBase {
  acquisitionType: "TRANSFER_IN";
  from: Address;
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

  /** The timestamp, in seconds, when the transaction occurred. */
  timestamp: number;

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
