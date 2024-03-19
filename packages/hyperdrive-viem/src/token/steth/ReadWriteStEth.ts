import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadWriteStEth as ReadWriteStEthBase,
  ReadWriteStEthOptions as ReadWriteStEthOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteStEthOptions
  extends ReadWriteModelOptions<ReadWriteStEthOptionsBase> {}

export class ReadWriteStEth extends ReadWriteStEthBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteStEthOptions) {
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
