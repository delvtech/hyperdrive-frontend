import type { Prettify } from "src/base/types";
import type {
  ContractFactoryOptions,
  ReadWriteContractFactory,
} from "src/evm-client/contractFactory";
import { ReadModel, type ReadModelOptions } from "src/model/ReadModel";

/**
 * The base options required for all read-write models.
 */
export interface ReadWriteModelOptions extends ReadModelOptions {
  contractFactory: ReadWriteContractFactory;
}

/**
 * A base class for read-write models.
 */
export class ReadWriteModel extends ReadModel {
  declare contractFactory: ReadWriteContractFactory;

  constructor(options: ReadWriteModelOptions) {
    super(options);
  }
}

/**
 * The options required to create a read-write model that represents a specific
 * contract.
 */
export type ReadWriteContractModelOptions = Prettify<
  // The abi is omitted because it's assumed the model will import its own ABI
  ReadWriteModelOptions & Omit<ContractFactoryOptions, "abi">
>;
