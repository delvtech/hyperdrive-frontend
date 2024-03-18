import { Network } from "@delvtech/evm-client";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/contract/contractFactory";
import { Prettify } from "src/base/types";
import { ModelOptionsBase } from "src/model/types";

/**
 * The base options required for all read models.
 */
export interface ReadModelOptions extends ModelOptionsBase {
  contractFactory: ReadContractFactory;
}

/**
 * A base class for read-only models.
 * @category Models
 */
export class ReadModel {
  name: string;
  network: Network;
  contractFactory: ReadContractFactory;

  constructor({ name, network, contractFactory }: ReadModelOptions) {
    this.name = name ?? this.constructor.name;
    this.network = network;
    this.contractFactory = contractFactory;
  }
}

/**
 * The options required to create a read model that represents a specific
 * contract.
 */
export type ReadContractModelOptions = Prettify<
  // The abi is omitted because it's assumed the model will import its own ABI
  ReadModelOptions & Omit<ContractFactoryOptions, "abi">
>;
