import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  ReadWriteFactory as ReadWriteFactoryBase,
  ReadWriteFactoryOptions as ReadWriteFactoryOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteFactoryOptions
  extends ReadWriteModelOptions<ReadWriteFactoryOptionsBase> {}

export class ReadWriteFactory extends ReadWriteFactoryBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteFactoryOptions) {
    super({
      address,
      cache,
      contractFactory: (options) => {
        return createCachedReadWriteContract({
          publicClient,
          walletClient,
          cache,
          namespace,
          ...options,
        });
      },
      name,
      namespace,
      network: createNetwork(publicClient),
    });
  }
}
