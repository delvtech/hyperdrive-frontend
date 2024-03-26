import { createNetwork } from "@delvtech/evm-client-viem";
import { ReadWriteLsEthHyperdrive as ReadWriteLsEthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteLsEthHyperdrive extends ReadWriteLsEthHyperdriveBase {
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
