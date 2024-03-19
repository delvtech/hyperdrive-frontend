import { createNetwork } from "@delvtech/evm-client-viem";
import { ReadWriteStEthHyperdrive as ReadWriteStEthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
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
