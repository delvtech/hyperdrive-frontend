import { createNetwork } from "@delvtech/evm-client-viem";
import { ReadREthHyperdrive as ReadREthHyperdriveBase } from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive";

export class ReadREthHyperdrive extends ReadREthHyperdriveBase {
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
      contractFactory: createReadContractFactory({
        publicClient,
        cache,
        namespace,
      }),
      name,
      namespace,
      network: createNetwork(publicClient),
    });
  }
}
