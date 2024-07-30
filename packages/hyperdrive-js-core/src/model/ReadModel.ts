import { Network } from "@delvtech/evm-client";
import { Prettify } from "src/base/types";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/evm-client/contractFactory";

/**
 * The base options required for all read models.
 */
export interface ReadModelOptions {
  contractFactory: ReadContractFactory;
  network: Network;

  /**
   * An arbitrary name for the instance. This is for convenience only (e.g., for
   * use as a display name or in logging) and has no affect on the model's
   * behavior.
   */
  debugName?: string;
}

/**
 * A base class for read-only models.
 */
export class ReadModel {
  name: string;
  network: Network;
  contractFactory: ReadContractFactory;

  constructor({ debugName: name, network, contractFactory }: ReadModelOptions) {
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
