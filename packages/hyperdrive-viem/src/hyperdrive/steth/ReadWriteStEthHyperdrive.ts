import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadWriteStEthHyperdrive as ReadWriteStEthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export interface ReadWriteStEthHyperdriveOptions
  extends ReadWriteHyperdriveOptions {}

export class ReadWriteStEthHyperdrive extends ReadWriteStEthHyperdriveBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteStEthHyperdriveOptions) {
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
