import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadWriteErc4626Hyperdrive as ReadWriteErc4626HyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteErc4626Hyperdrive extends ReadWriteErc4626HyperdriveBase {
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
