import {
  Abi,
  AbiParametersToPrimitiveTypes,
  ExtractAbiFunction,
  ExtractAbiFunctionNames,
  AbiStateMutability,
  ExtractAbiEventNames,
  ExtractAbiEvent,
} from "abitype";
type EventName<TAbi extends Abi> = ExtractAbiEventNames<TAbi>;

/**
 * Get a union of function names from an abi
 */
export type FunctionName<
  TAbi extends Abi,
  TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
> = ExtractAbiFunctionNames<TAbi, TAbiStateMutability>;

/**
 * Get an array of argument types for a function from an abi
 */
export type FunctionArgs<
  TAbi extends Abi,
  TFunctionName extends FunctionName<TAbi> = FunctionName<TAbi>,
> = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<TAbi, TFunctionName>["inputs"],
  "inputs"
>;

/**
 * Get the return type of a function from an abi
 */
export type FunctionReturnType<
  TAbi extends Abi,
  TFunctionName extends FunctionName<TAbi> = FunctionName<TAbi>,
> = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<TAbi, TFunctionName>["outputs"],
  "outputs"
>[0];

/**
 * Get a strongly typed function type from an abi
 */
export type ContractFunction<
  TAbi extends Abi,
  TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
> = <TFunctionName extends FunctionName<TAbi, TAbiStateMutability>>(
  fn: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
) => Promise<FunctionReturnType<TAbi, TFunctionName>>;

/**
 * FilterArray<['a', 'b', 'c'], 'b'> = ['a', 'c']
 */
type FilterArray<T extends readonly any[], V> = T extends readonly [
  infer L,
  ...infer R,
]
  ? L extends V
    ? [L, ...FilterArray<R, V>]
    : [...FilterArray<R, V>]
  : [];

/**
 * Events in a contract abi look like this. There's obviously more fields, but
 * these are the ones we care about.
 */
type AbiEventObject = { type: "address" | "uint256" };

/**
 * A mapping of event abi "type" field values to their typescript equivalents.
 */
type TransformEventTypeMap = {
  address: string;
  uint256: bigint;
};

/**
 * The resulting tuple of args values returned in an event from queryFilter.
 */
type TransformEventTypes<Tup extends readonly AbiEventObject[]> =
  Tup extends readonly [
    infer H extends AbiEventObject,
    ...infer R extends readonly AbiEventObject[],
  ]
    ? [TransformEventTypeMap[H["type"]], ...TransformEventTypes<R>]
    : Tup;

/**
 * A strongly typed Event you can expect back from calling queryFilter.
 * eg: TypedEvent<erc20ABI, 'Transfer'> =
 *     { args: [from: string, to: string, amount: number]}
 */

export interface TypedEvent<
  TAbi extends Abi,
  TEventName extends ExtractAbiEventNames<TAbi>,
> extends Event {
  args: TransformEventTypes<
    FilterArray<
      ExtractAbiEvent<TAbi, TEventName>["inputs"],
      { indexed: true } | { indexed: false }
    >
  >;
}

/**
 * A mapping of event abi "type" field values to their typescript equivalents.
 * This is for the filterArgs passed to queryFilter, so each one can also be
 * null.
 */
type TransformFilterTypeMap = {
  address: string | null;
  uint256: bigint | null;
};

/**
 * Identical to TransformEventTypes, however the resulting tuple will have null
 * as an option for each value. These are the accepted filterArgs values when
 * using queryFilter
 */
type TransformFilterTypes<Tup extends readonly AbiEventObject[]> =
  Tup extends readonly [
    infer H extends AbiEventObject,
    ...infer R extends readonly AbiEventObject[],
  ]
    ? [TransformFilterTypeMap[H["type"]], ...TransformFilterTypes<R>]
    : Tup;

/**
 * The filterArgs tuple containing all possible indexed fields you can use with
 * queryFilter, eg:
 *
 * ExtractEventFilterArgs<erc20ABI, 'Transfer'> =
 *   [from: string | null, to: string | null]
 */
export type EventFilter<
  TAbi extends Abi,
  TEventName extends ExtractAbiEventNames<TAbi>,
> = TransformFilterTypes<
  FilterArray<ExtractAbiEvent<TAbi, TEventName>["inputs"], { indexed: true }>
>;

type BlockTag = "latest" | "earliest" | "pending" | "safe" | "finalized";

export type ContractEventFunction<TAbi extends Abi> = <
  TEventName extends EventName<TAbi>,
>(
  eventName: TEventName,
  fromBlock: bigint | BlockTag,
  toBlock: bigint | BlockTag,
  filter: EventFilter<TAbi, TEventName>,
) => Promise<TypedEvent<TAbi, TEventName>[]>;
