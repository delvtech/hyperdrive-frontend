import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadWriteREthHyperdrive as ReadWriteREthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteREthHyperdrive extends ReadWriteREthHyperdriveBase {
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
