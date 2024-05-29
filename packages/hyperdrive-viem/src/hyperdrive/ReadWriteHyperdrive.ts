import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  ReadWriteHyperdrive as ReadWriteHyperdriveBase,
  ReadWriteHyperdriveOptions as ReadWriteHyperdriveOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteHyperdriveOptions
  extends ReadWriteModelOptions<ReadWriteHyperdriveOptionsBase> {}

export class ReadWriteHyperdrive extends ReadWriteHyperdriveBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteHyperdriveOptions) {
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
