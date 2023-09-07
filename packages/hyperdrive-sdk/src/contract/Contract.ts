import { Abi, Address, AbiStateMutability } from "abitype";
import {
  FunctionName,
  FunctionArgs,
  FunctionReturnType,
  EventName,
  EventFilter,
  EventArgs,
} from "src/base/abitype";

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export interface IContract<TAbi extends Abi> {
  /**
   * The ABI for this contract
   */
  abi: TAbi;
  /**
   * The address this contract is deployed at
   */
  address: Address;
  /**
   * Call a read-only function on a contract, and return the response.
   */
  read: ContractFunction<TAbi>;
  /**
   * Simulate/validate a contract interaction. This is useful for retrieving
   * return data and revert reasons of contract write functions.
   */
  simulateWrite: ContractWriteFunction<TAbi>;
  /**
   * Returns a list of event logs since the filter was created.
   */
  getEvents: ContractEventFunction<TAbi>;

  /**
   * Execute a write function on a contract.
   */
  write: ContractWriteFunction<TAbi>;
}

/**
 * A strongly typed function signature for calling contract methods based on an
 * abi
 */
export type ContractFunction<
  TAbi extends Abi,
  TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
  TOptions = ContractReadOptions,
> = <TFunctionName extends FunctionName<TAbi, TAbiStateMutability>>(
  fn: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
  options?: TOptions,
) => Promise<FunctionReturnType<TAbi, TFunctionName>>;

/**
 * A strongly typed function signature for calling contract write methods based
 * on an abi
 */
export type ContractWriteFunction<TAbi extends Abi> = ContractFunction<
  TAbi,
  "nonpayable" | "payable",
  ContractWriteOptions
>;

export interface ContractGetEventsOptions<
  TAbi extends Abi,
  TEventName extends EventName<TAbi>,
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
  TEventName extends EventName<TAbi>,
> {
  eventName: TEventName;
  args: EventArgs<TAbi, TEventName>;
  data?: `0x${string}`;
  blockNumber?: bigint;
  transactionHash?: `0x${string}`;
}

/**
 * A strongly typed function signature for fetching contract events based on an
 * abi
 */
export type ContractEventFunction<TAbi extends Abi> = <
  TEventName extends EventName<TAbi>,
>(
  eventName: TEventName,
  options?: ContractGetEventsOptions<TAbi, TEventName>,
) => Promise<ContractEvent<TAbi, TEventName>[]>;

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
};
