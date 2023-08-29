import { Abi, Address, AbiStateMutability } from "abitype";
import {
  FunctionName,
  FunctionArgs,
  FunctionReturnType,
  EventName,
  BlockTag,
  EventFilter,
  TypedEvent,
} from "src/base/abitype";

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export interface Contract<TAbi extends Abi> {
  abi: TAbi;
  address: Address;
  read: ContractFunction<TAbi>;
  write: ContractFunction<TAbi, "nonpayable" | "payable">;
  getEvents: ContractEventFunction<TAbi>;
}

/**
 * Get a strongly typed function type from an abi
 */
export type ContractFunction<
  TAbi extends Abi,
  TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
> = <TFunctionName extends FunctionName<TAbi, TAbiStateMutability>>(
  fn: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
  options?: ReadCallOptions,
) => Promise<FunctionReturnType<TAbi, TFunctionName>>;

export type ReadCallOptions =
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

export type ContractEventFunction<TAbi extends Abi> = <
  TEventName extends EventName<TAbi>,
>(
  eventName: TEventName,
  options?: {
    filter?: EventFilter<TAbi, TEventName>;
    fromBlock?: bigint | BlockTag;
    toBlock?: bigint | BlockTag;
  },
) => Promise<TypedEvent<TAbi, TEventName>[]>;
