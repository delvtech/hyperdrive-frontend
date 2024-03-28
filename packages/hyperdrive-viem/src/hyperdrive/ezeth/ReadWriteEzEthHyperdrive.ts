import { createNetwork } from "@delvtech/evm-client-viem";
import { ReadWriteEzEthHyperdrive as ReadWriteEzEthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteEzEthHyperdrive extends ReadWriteEzEthHyperdriveBase {
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
      contractFactory: createReadWriteContractFactory({
        publicClient,
        walletClient,
        cache,
        namespace,
      }),
      name,
      namespace,
      network: createNetwork(publicClient),
    });
  }
}
