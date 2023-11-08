import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";
import { SimpleCache } from "@hyperdrive/evm-client";
import {
  ViemCachedReadContract,
  ViemCachedReadWriteContract,
  ViemNetwork,
} from "@hyperdrive/evm-client-viem";
import { ReadWriteHyperdrive } from "@hyperdrive/sdk";
import { Address, PublicClient, WalletClient } from "viem";

interface ViemReadWriteHyperdriveOptions {
  address: Address;
  mathAddress: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  cache?: SimpleCache;
  id?: string;
}

export class ViemReadWriteHyperdrive extends ReadWriteHyperdrive {
  constructor({
    address,
    mathAddress,
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
      mathContract: new ViemCachedReadContract({
        abi: MockHyperdriveMath.abi,
        address: mathAddress,
        publicClient,
        cache,
        id,
      }),
      network: new ViemNetwork(publicClient),
    });
  }
}
