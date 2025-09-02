import type { ContractBaseOptions } from "@delvtech/drift";
import { ReadClientOptions } from "src/drift/ReadClient";
import { ReadWriteClientOptions } from "src/drift/ReadWriteClient";

/**
 * Additional options required for clients that represent a specific contract.
 */
export type ContractClientOptions = Omit<ContractBaseOptions, "abi">;

export interface ReadContractClientOptions
  extends ReadClientOptions,
    ContractClientOptions {}

export interface ReadWriteContractClientOptions
  extends ReadWriteClientOptions,
    ContractClientOptions {}
