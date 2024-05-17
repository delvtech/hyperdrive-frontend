import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadErc4626Hyperdrive as ReadErc4626HyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive";

export class ReadErc4626Hyperdrive extends ReadErc4626HyperdriveBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
  }: ReadHyperdriveOptions) {
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
