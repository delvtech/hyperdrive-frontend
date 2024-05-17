import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { ReadEzEthHyperdrive as ReadEzEthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive";

export class ReadEzEthHyperdrive extends ReadEzEthHyperdriveBase {
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
