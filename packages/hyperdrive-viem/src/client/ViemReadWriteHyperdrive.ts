import {
  HyperdriveABI,
  HyperdriveMathABI,
  ReadWriteHyperdrive,
  SimpleCache,
} from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { ViemCachedReadWriteContract } from "src/contract/ViemCachedReadWriteContract";
import { ViemNetwork } from "src/network/ViemNetwork";
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
        abi: HyperdriveABI,
        address,
        publicClient,
        walletClient,
        cache,
        id,
      }),
      mathContract: new ViemCachedReadContract({
        abi: HyperdriveMathABI,
        address: mathAddress,
        publicClient,
        cache,
        id,
      }),
      network: new ViemNetwork(publicClient),
    });
  }
}
