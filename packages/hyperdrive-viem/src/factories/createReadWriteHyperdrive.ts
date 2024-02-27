import {
  SimpleCache,
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { ReadWriteHyperdrive } from "@delvtech/hyperdrive-js-core";
import { Address, PublicClient, WalletClient } from "viem";

interface CreateReadWriteHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  cache?: SimpleCache;
  namespace?: string;
}

export function createReadWriteHyperdrive({
  address,
  publicClient,
  walletClient,
  cache,
  namespace,
}: CreateReadWriteHyperdriveOptions): ReadWriteHyperdrive {
  return new ReadWriteHyperdrive({
    contract: createCachedReadWriteContract({
      abi: IHyperdrive.abi,
      address,
      publicClient,
      walletClient,
      cache,
      namespace,
    }),
    network: createNetwork(publicClient),
  });
}
