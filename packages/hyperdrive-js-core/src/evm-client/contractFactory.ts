import type {
  CachedReadContract,
  CachedReadWriteContract,
  SimpleCache,
} from "@delvtech/evm-client";
import type { Abi } from "abitype";

export interface ContractFactoryOptions<TAbi extends Abi = Abi> {
  abi: TAbi;
  address: `0x${string}`;
  cache?: SimpleCache;
  namespace?: string;
}

/**
 * A factory function that creates a `CachedReadContract` instance.
 */
export type ReadContractFactory = <TAbi extends Abi = Abi>(
  options: ContractFactoryOptions<TAbi>,
) => CachedReadContract<TAbi>;

/**
 * A factory function that creates a `CachedReadWriteContract` instance.
 */
export type ReadWriteContractFactory = <TAbi extends Abi = Abi>(
  options: ContractFactoryOptions<TAbi>,
) => CachedReadWriteContract<TAbi>;
