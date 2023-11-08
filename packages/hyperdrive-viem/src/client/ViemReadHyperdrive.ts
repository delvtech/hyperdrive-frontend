import { ReadHyperdrive } from "@hyperdrive/sdk";
import {
  ViemCachedReadContract,
  ViemNetwork,
} from "@hyperdrive/evm-client-viem";
import { Address, PublicClient } from "viem";
import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { SimpleCache } from "@hyperdrive/evm-client";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";

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
        abi: IHyperdrive.abi,
        address,
        publicClient,
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
