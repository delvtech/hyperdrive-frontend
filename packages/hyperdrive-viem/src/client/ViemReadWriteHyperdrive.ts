import {
  SimpleCache,
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { ReadWriteHyperdrive } from "@hyperdrive/sdk";
import { Address, PublicClient, WalletClient } from "viem";

interface ViemReadWriteHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  cache?: SimpleCache;
  namespace?: string;
  /**
   * @deprecated Use `namespace` instead
   */
  id?: string;
}

export class ViemReadWriteHyperdrive extends ReadWriteHyperdrive {
  constructor({
    address,
    publicClient,
    walletClient,
    cache,
    namespace,
    id,
  }: ViemReadWriteHyperdriveOptions) {
    super({
      contract: createCachedReadWriteContract({
        abi: IHyperdrive.abi,
        address,
        publicClient,
        walletClient,
        cache,
        namespace: namespace ?? id,
      }),
      network: createNetwork(publicClient),
    });
  }
}
