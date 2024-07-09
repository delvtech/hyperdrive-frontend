import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  ReadFactory as ReadFactoryBase,
  ReadFactoryOptions as ReadFactoryOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { ReadModelOptions } from "src/model/types";

export interface ReadFactoryOptions
  extends ReadModelOptions<ReadFactoryOptionsBase> {}

export class ReadFactory extends ReadFactoryBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
  }: ReadFactoryOptions) {
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
