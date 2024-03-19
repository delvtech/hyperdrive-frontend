import {
  createCachedReadContract,
  SimpleCache,
} from "@delvtech/evm-client-viem";
import { ReadContractFactory } from "@delvtech/hyperdrive-js-core";
import { PublicClient } from "viem";

export interface CreateReadContractFactoryOptions {
  publicClient: PublicClient;
  cache?: SimpleCache;
  namespace?: string;
}

export function createReadContractFactory(
  factoryOptions: CreateReadContractFactoryOptions,
): ReadContractFactory {
  return (instanceOptions) => {
    return createCachedReadContract({
      ...factoryOptions,
      ...instanceOptions,
    });
  };
}
