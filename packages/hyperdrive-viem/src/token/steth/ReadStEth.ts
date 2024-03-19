import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadStEth as ReadStEthBase,
  ReadStEthOptions as ReadStEthOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadModelOptions } from "src/model/types";

export interface ReadStEthOptions
  extends ReadModelOptions<ReadStEthOptionsBase> {}

export class ReadStEth extends ReadStEthBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
  }: ReadStEthOptions) {
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
