import { Abi, Address } from "abitype";
import {
  FunctionName,
  FunctionArgs,
  FunctionReturnType,
  EventName,
  EventFilter,
  EventArgs,
} from "src/base/abitype";

/**
 * Interface representing a readable contract with specified ABI.
 * Provides methods to read and simulate write operations on the contract.
 */
export interface IReadContract<TAbi extends Abi = Abi> {
  abi: TAbi;
  address: Address;

  /**
   * Reads a specified function from the contract.
   */
  read<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>>;

  /**
   * Simulates a write operation on a specified function of the contract.
   */
  simulateWrite<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>>;

  /**
   * Retrieves specified events from the contract.
   */
  getEvents<TEventName extends EventName<TAbi>>(
    eventName: TEventName,
    options?: ContractGetEventsOptions<TAbi, TEventName>,
  ): Promise<ContractEvent<TAbi, TEventName>[]>;
}

/**
 * Interface representing a writable contract with specified ABI.
 * Extends IReadContract to also include write operations.
 */
export interface IReadWriteContract<TAbi extends Abi = Abi>
  extends IReadContract<TAbi> {
  /**
   * Writes to a specified function on the contract.
   */
  write<TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>>;
}

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export type Contract<TAbi extends Abi = Abi> =
  | IReadContract<TAbi>
  | IReadWriteContract<TAbi>;

export interface ContractGetEventsOptions<
  TAbi extends Abi,
  TEventName extends EventName<TAbi> = EventName<TAbi>,
> {
  filter?: EventFilter<TAbi, TEventName>;
  fromBlock?: bigint | BlockTag;
  toBlock?: bigint | BlockTag;
}

/**
 * A strongly typed event object based on an abi
 */
export interface ContractEvent<
  TAbi extends Abi,
  TEventName extends EventName<TAbi> = EventName<TAbi>,
> {
  eventName: TEventName;
  args: EventArgs<TAbi, TEventName>;
  data?: `0x${string}`;
  blockNumber?: bigint;
  transactionHash?: `0x${string}`;
}

// ETH JSON-RPC Types
// TODO: Find or build an OS types package (e.g., @types/evm-json-rpc)
// https://github.com/ethereum/execution-apis/tree/main

// https://github.com/ethereum/execution-apis/blob/main/src/schemas/block.yaml#L105
export type BlockTag = "latest" | "earliest" | "pending" | "safe" | "finalized";

// https://github.com/ethereum/execution-apis/blob/main/src/eth/execute.yaml#L1
export type ContractReadOptions =
  | {
      blockNumber?: bigint;
      blockTag?: never;
    }
  | {
      blockNumber?: never;
      /**
       * @default 'latest'
       */
      blockTag?: BlockTag;
    };

// https://github.com/ethereum/execution-apis/blob/main/src/schemas/transaction.yaml#L274
export type ContractWriteOptions = {
  type?: `0x${string}`;
  nonce?: bigint;
  to?: Address;
  from?: Address;
  /**
   * Gas limit
   */
  gas?: bigint;
  value?: bigint;
  input?: `0x${string}`;
  /**
   * The gas price willing to be paid by the sender in wei
   */
  gasPrice?: bigint;
  /**
   * Maximum fee per gas the sender is willing to pay to miners in wei
   */
  maxPriorityFeePerGas?: bigint;
  /**
   * The maximum total fee per gas the sender is willing to pay (includes the
   * network / base fee and miner / priority fee) in wei
   */
  maxFeePerGas?: bigint;
  /**
   * EIP-2930 access list
   */
  accessList?: {
    address: `0x${string}`;
    storageKeys: `0x${string}`[];
  }[];
  /**
   * Chain ID that this transaction is valid on.
   */
  chainId?: bigint;
  /**
   * Called when a transaction is submitted on chain.
   */
  onSubmitted?: (hash: `0x${string}`) => void;
};
