import { ContractWriteOptions as BaseContractWriteOptions } from "@delvtech/evm-client";
import {
  ContractFactoryOptions,
  ReadWriteContractFactory,
} from "src/contract/contractFactory";
import { Prettify } from "src/base/types";
import { ModelOptionsBase } from "src/model/types";

/**
 * The base options required for all read-write models.
 */
export interface ReadWriteModelOptions extends ModelOptionsBase {
  contractFactory: ReadWriteContractFactory;
}

/**
 * The options required to create a read-write model that represents a specific
 * contract.
 */
export type ReadWriteContractModelOptions = Prettify<
  // The abi is omitted because it's assumed the model will import its own ABI
  ReadWriteModelOptions & Omit<ContractFactoryOptions, "abi">
>;

export type ContractWriteOptions = Prettify<
  BaseContractWriteOptions & {
    onTransactionMined?: (hash: `0x${string}`) => void;
  }
>;
