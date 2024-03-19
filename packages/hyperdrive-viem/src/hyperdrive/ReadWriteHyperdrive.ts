import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadWriteHyperdrive as ReadWriteHyperdriveBase,
  ReadWriteHyperdriveOptions as ReadWriteHyperdriveOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteHyperdriveOptions
  extends ReadWriteModelOptions<ReadWriteHyperdriveOptionsBase> {}

export class ReadWriteHyperdrive extends ReadWriteHyperdriveBase {
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
