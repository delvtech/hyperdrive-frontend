import { CachedReadWriteContract } from "@delvtech/evm-client";
import { Overwrite } from "src/base/types";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { ReadFactory, ReadFactoryOptions } from "src/factory/ReadFactory";
import { FactoryAbi } from "src/factory/abi";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";

export interface ReadWriteFactoryOptions
  extends Overwrite<ReadFactoryOptions, ReadWriteContractModelOptions> {}

export class ReadWriteFactory extends ReadFactory {
  declare contract: CachedReadWriteContract<FactoryAbi>;
  declare contractFactory: ReadWriteContractFactory;

  constructor(options: ReadWriteFactoryOptions) {
    super(options);
  }

  // TODO:
}
