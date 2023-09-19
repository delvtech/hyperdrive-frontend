import {
  HyperdriveABI,
  HyperdriveMathABI,
  ReadHyperdrive,
  SimpleCache,
} from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { Address, PublicClient } from "viem";

interface ViemReadHyperdriveOptions {
  address: Address;
  mathAddress: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  id?: string;
}

export class ViemReadHyperdrive extends ReadHyperdrive {
  constructor({
    address,
    mathAddress,
    publicClient,
    cache,
    id,
  }: ViemReadHyperdriveOptions) {
    super({
      contract: new ViemCachedReadContract({
        abi: HyperdriveABI,
        address,
        publicClient,
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
    });
  }
}
