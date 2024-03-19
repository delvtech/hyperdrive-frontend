import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadWriteErc20 as ReadWriteErc20Base,
  ReadWriteErc20Options as ReadWriteErc20OptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadWriteContractFactory } from "src/evm-client/createReadWriteContractFactory";
import { ReadWriteModelOptions } from "src/model/types";

export interface ReadWriteErc20Options
  extends ReadWriteModelOptions<ReadWriteErc20OptionsBase> {}

export class ReadWriteErc20 extends ReadWriteErc20Base {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    walletClient,
  }: ReadWriteErc20Options) {
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
