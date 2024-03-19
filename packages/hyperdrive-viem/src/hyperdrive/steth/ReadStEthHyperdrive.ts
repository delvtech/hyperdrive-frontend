import { createNetwork } from "@delvtech/evm-client-viem";
import {
  ReadStEthHyperdrive as ReadStEthHyperdriveBase,
  ReadStEthHyperdriveOptions as ReadStEthHyperdriveOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { createReadContractFactory } from "src/evm-client/createReadContractFactory";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive";
import { ReadModelOptions } from "src/model/types";

export interface ReadStEthHyperdriveOptions
  extends ReadHyperdriveOptions,
    ReadModelOptions<ReadStEthHyperdriveOptionsBase> {}

export class ReadStEthHyperdrive extends ReadStEthHyperdriveBase {
  constructor({
    address,
    cache,
    name,
    namespace,
    publicClient,
    useSharesAccounting,
  }: ReadStEthHyperdriveOptions) {
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
      useSharesAccounting,
    });
  }
}
