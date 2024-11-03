import {
  ContractParams,
  Drift,
  ReadWriteAdapter,
  ReplaceProps,
} from "@delvtech/drift";
import { ReadModel, ReadModelOptions } from "src/model/ReadModel";

/**
 * The base options required for all read-write models.
 */
export type ReadWriteModelOptions = ReplaceProps<
  ReadModelOptions,
  {
    drift: Drift<ReadWriteAdapter>;
  }
>;

/**
 * A base class for read-write models.
 */
export class ReadWriteModel extends ReadModel {
  declare drift: Drift<ReadWriteAdapter>;

  constructor(options: ReadWriteModelOptions) {
    super(options);
  }
}

/**
 * The options required to create a read-write model that represents a specific
 * contract.
 */
export type ReadWriteContractModelOptions = ReadWriteModelOptions &
  Omit<ContractParams, "abi" | "adapter">;
