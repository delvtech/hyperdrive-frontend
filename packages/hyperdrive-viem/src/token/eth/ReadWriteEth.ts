import { createNetwork, SimpleCache } from "@delvtech/evm-client-viem";
import {
  ReadWriteEth as ReadWriteEthBase,
  ReadWriteEthOptions as ReadWriteEthOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteEthOptions
  extends ReadWriteModelOptions<ReadWriteEthOptionsBase> {
  cache?: SimpleCache;
  namespace?: string;
}

export class ReadWriteEth extends ReadWriteEthBase {
  constructor({
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteEthOptions) {
    super({
      contractFactory: createReadWriteContractFactory({
        publicClient,
        walletClient,
        cache,
        namespace,
      }),
      name,
      network: createNetwork(publicClient),
    });
  }
}
