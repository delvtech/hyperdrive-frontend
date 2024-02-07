import { ReadHyperdrive } from "@hyperdrive/sdk";
import {
  ViemCachedReadContract,
  ViemNetwork,
} from "@hyperdrive/evm-client-viem";
import { Address, PublicClient } from "viem";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { SimpleCache } from "@hyperdrive/evm-client";

interface ViemReadHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  id?: string;
}

export class ViemReadHyperdrive extends ReadHyperdrive {
  constructor({ address, publicClient, cache, id }: ViemReadHyperdriveOptions) {
    super({
      contract: new ViemCachedReadContract({
        abi: IHyperdrive.abi,
        address,
        publicClient,
        cache,
        id,
      }),
      network: new ViemNetwork(publicClient),
    });
  }
}
