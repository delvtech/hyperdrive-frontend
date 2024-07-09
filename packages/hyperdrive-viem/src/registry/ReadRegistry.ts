import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  ReadRegistry as ReadRegistryBase,
  ReadRegistryOptions as ReadRegistryOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { ReadModelOptions } from "src/model/types";

export interface ReadRegistryOptions
  extends ReadModelOptions<ReadRegistryOptionsBase> {}

export class ReadRegistry extends ReadRegistryBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
  }: ReadRegistryOptions) {
    super({
      address,
      cache,
      contractFactory: (options) => {
        return createCachedReadContract({
          publicClient,
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
