import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadErc20 as ReadErc20Base,
  ReadErc20Options as ReadErc20OptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadModelOptions } from "src/model/types";

export interface ReadErc20Options
  extends ReadModelOptions<ReadErc20OptionsBase> {}

export class ReadErc20 extends ReadErc20Base {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
  }: ReadErc20Options) {
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
