import { ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import { Address, PublicClient } from "viem";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import {
  SimpleCache,
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";

interface CreateReadHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  namespace?: string;
}

export function createReadHyperdrive({
  address,
  publicClient,
  cache,
  namespace,
}: CreateReadHyperdriveOptions): ReadHyperdrive {
  return new ReadHyperdrive({
    contract: createCachedReadContract({
      abi: IHyperdrive.abi,
      address,
      publicClient,
      cache,
      namespace,
    }),
    network: createNetwork(publicClient),
  });
}
