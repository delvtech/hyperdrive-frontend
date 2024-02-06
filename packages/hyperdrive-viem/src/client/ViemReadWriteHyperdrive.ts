import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { SimpleCache } from "@hyperdrive/evm-client";
import {
  ViemCachedReadWriteContract,
  ViemNetwork,
} from "@hyperdrive/evm-client-viem";
import { ReadWriteHyperdrive } from "@hyperdrive/sdk";
import { Address, PublicClient, WalletClient } from "viem";

interface ViemReadWriteHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  cache?: SimpleCache;
  id?: string;
}

export class ViemReadWriteHyperdrive extends ReadWriteHyperdrive {
  constructor({
    address,
    publicClient,
    walletClient,
    cache,
    id,
  }: ViemReadWriteHyperdriveOptions) {
    super({
      contract: new ViemCachedReadWriteContract({
        abi: IHyperdrive.abi,
        address,
        publicClient,
        walletClient,
        cache,
        id,
      }),
      network: new ViemNetwork(publicClient),
    });
  }
}
