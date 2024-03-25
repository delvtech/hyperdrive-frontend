import { createNetwork } from "@delvtech/evm-client-viem";
import { ReadWriteMockErc4626Hyperdrive as ReadWriteMockErc4626HyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteHyperdriveOptions } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteMockErc4626Hyperdrive extends ReadWriteMockErc4626HyperdriveBase {
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
