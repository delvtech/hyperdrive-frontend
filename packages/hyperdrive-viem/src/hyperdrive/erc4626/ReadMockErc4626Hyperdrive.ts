import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadMockErc4626Hyperdrive as ReadMockErc4626HyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive";

export class ReadMockErc4626Hyperdrive extends ReadMockErc4626HyperdriveBase {
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
