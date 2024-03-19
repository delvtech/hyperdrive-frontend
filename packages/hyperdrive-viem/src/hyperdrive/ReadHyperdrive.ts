import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadHyperdrive as ReadHyperdriveBase,
  ReadHyperdriveOptions as ReadHyperdriveOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadModelOptions } from "src/model/types";

export interface ReadHyperdriveOptions
  extends ReadModelOptions<ReadHyperdriveOptionsBase> {}

export class ReadHyperdrive extends ReadHyperdriveBase {
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
