import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  ReadWriteRegistry as ReadWriteRegistryBase,
  ReadWriteRegistryOptions as ReadWriteRegistryOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteRegistryOptions
  extends ReadWriteModelOptions<ReadWriteRegistryOptionsBase> {}

export class ReadWriteRegistry extends ReadWriteRegistryBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteRegistryOptions) {
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
