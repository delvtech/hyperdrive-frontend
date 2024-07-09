import { CachedReadContract } from "@delvtech/evm-client";
import { FactoryAbi, factoryAbi } from "src/factory/abi";
import { ReadContractModelOptions, ReadModel } from "src/model/ReadModel";

export interface ReadFactoryOptions extends ReadContractModelOptions {}

export class ReadFactory extends ReadModel {
  contract: CachedReadContract<FactoryAbi>;

  constructor({
    name = "Hyperdrive Factory",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadFactoryOptions) {
    super({ name, network, contractFactory });
    this.contract = contractFactory({
      abi: factoryAbi,
      address,
      cache,
      namespace,
    });
  }

  // TODO:
}
