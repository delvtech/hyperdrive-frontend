import {
  Abi,
  AbiParametersToPrimitiveTypes,
  ExtractAbiFunction,
  ExtractAbiFunctionNames,
  Address,
} from "abitype";

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export interface Contract<TAbi extends Abi> {
  abi: TAbi;
  address: Address;
  read: ContractFunction<TAbi>;
}

/**
 * Get a union of function names from an abi
 */
export type FunctionName<TAbi extends Abi> = ExtractAbiFunctionNames<TAbi>;
// TODO: What about write methods that can be called in view mode?
// "pure" | "view"

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
export type ContractFunction<TAbi extends Abi> = <
  TFunctionName extends FunctionName<TAbi>,
>(
  fn: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>,
) => Promise<FunctionReturnType<TAbi, TFunctionName>>;
