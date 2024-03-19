import {
  createCachedReadWriteContract,
  SimpleCache,
} from "@delvtech/evm-client-viem";
import { ReadWriteContractFactory } from "@delvtech/hyperdrive-js-core";
import { PublicClient, WalletClient } from "viem";

export interface CreateReadWriteContractFactoryOptions {
  publicClient: PublicClient;
  walletClient: WalletClient;
  cache?: SimpleCache;
  namespace?: string;
}

export function createReadWriteContractFactory(
  factoryOptions: CreateReadWriteContractFactoryOptions,
): ReadWriteContractFactory {
  return (instanceOptions) => {
    return createCachedReadWriteContract({
      ...factoryOptions,
      ...instanceOptions,
    });
  };
}
