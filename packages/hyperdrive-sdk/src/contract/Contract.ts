import { Abi, Address, AbiStateMutability } from "abitype";
import {
  FunctionName,
  FunctionArgs,
  FunctionReturnType,
  EventName,
  EventFilter,
  Event,
} from "src/base/abitype";

export interface ReadableContract<TAbi extends Abi> {
  abi: TAbi;
  address: Address;
  read: ContractFunction<TAbi>;
  getEvents: ContractEventFunction<TAbi>;
}
export interface WritableContract<TAbi extends Abi>
  extends ReadableContract<TAbi> {
  write: ContractFunction<TAbi, "nonpayable" | "payable">;
}

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export type Contract<TAbi extends Abi> =
  | WritableContract<TAbi>
  | WritableContract<TAbi>;

/**
 * Eth RPC block tag strings
 */
export type BlockTag = "latest" | "earliest" | "pending" | "safe" | "finalized";

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

/**
 * A strongly typed function signature for calling contract methods based on an
 * abi.
 */
export type ContractFunction<
  TAbi extends Abi,
  TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
> = <TFunctionName extends FunctionName<TAbi, TAbiStateMutability>>(
  fn: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
  options?: ContractReadOptions,
) => Promise<FunctionReturnType<TAbi, TFunctionName>>;

export interface ContractEventFunctionOptions<
  TAbi extends Abi,
  TEventName extends EventName<TAbi>,
> {
  filter?: EventFilter<TAbi, TEventName>;
  fromBlock?: bigint | BlockTag;
  toBlock?: bigint | BlockTag;
}

/**
 * A strongly typed function signature for fetching contract events based on an
 * abi.
 */
export type ContractEventFunction<TAbi extends Abi> = <
  TEventName extends EventName<TAbi>,
>(
  eventName: TEventName,
  options?: ContractEventFunctionOptions<TAbi, TEventName>,
) => Promise<Event<TAbi, TEventName>[]>;
