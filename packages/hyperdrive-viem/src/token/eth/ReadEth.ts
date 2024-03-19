import { createNetwork, SimpleCache } from "@delvtech/evm-client-viem";
import {
  ReadEth as ReadEthBase,
  ReadEthOptions as ReadEthOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadModelOptions } from "src/model/types";

export interface ReadEthOptions extends ReadModelOptions<ReadEthOptionsBase> {
  cache?: SimpleCache;
  namespace?: string;
}

export class ReadEth extends ReadEthBase {
  constructor({ cache, name, namespace, publicClient }: ReadEthOptions) {
    super({
      contractFactory: createReadContractFactory({
        publicClient,
        cache,
        namespace,
      }),
      name,
      network: createNetwork(publicClient),
    });
  }
}
