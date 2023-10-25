import {
  HyperdriveABI,
  HyperdriveMathABI,
  ReadHyperdrive,
  SimpleCache,
  SimpleCacheKey,
} from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { Address, PublicClient } from "viem";
import { ViemNetwork } from "src/network/ViemNetwork";

interface ViemReadHyperdriveOptions {
  address: Address;
  mathAddress: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  pendingPromisesMap?: Map<SimpleCacheKey, Promise<any>>;
  id?: string;
}

export class ViemReadHyperdrive extends ReadHyperdrive {
  constructor({
    address,
    mathAddress,
    publicClient,
    cache,
    id,
    pendingPromisesMap,
  }: ViemReadHyperdriveOptions) {
    super({
      contract: new ViemCachedReadContract({
        abi: HyperdriveABI,
        address,
        publicClient,
        cache,
        id,
        pendingPromisesMap,
      }),
      mathContract: new ViemCachedReadContract({
        abi: HyperdriveMathABI,
        address: mathAddress,
        publicClient,
        cache,
        id,
        pendingPromisesMap,
      }),
      network: new ViemNetwork({ publicClient, pendingPromisesMap }),
    });
  }
}
