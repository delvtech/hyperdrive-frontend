import { ReadHyperdrive } from "@hyperdrive/sdk";
import { Address, PublicClient } from "viem";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import {
  SimpleCache,
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";

interface ViemReadHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  namespace?: string;
  /**
   * @deprecated Use `namespace` instead
   */
  id?: string;
}

export class ViemReadHyperdrive extends ReadHyperdrive {
  constructor({
    address,
    publicClient,
    cache,
    namespace,
    id,
  }: ViemReadHyperdriveOptions) {
    super({
      contract: createCachedReadContract({
        abi: IHyperdrive.abi,
        address,
        publicClient,
        cache,
        namespace: namespace ?? id,
      }),
      network: createNetwork(publicClient),
    });
  }
}
