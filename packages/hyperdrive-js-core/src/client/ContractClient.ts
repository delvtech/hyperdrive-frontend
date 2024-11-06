import { SimpleCache } from "@delvtech/drift";
import { Address } from "abitype";
import { ReadClientOptions } from "src/client/ReadClient";
import { ReadWriteClientOptions } from "src/client/ReadWriteClient";

/**
 * Additional options required for clients that represent a specific contract.
 */
export interface ContractClientOptions {
  /**
   * The address of the contract.
   */
  address: Address;

  /**
   * The cache to use for the contract.
   */
  cache?: SimpleCache;

  /**
   * The namespace to use for the cache.
   */
  cacheNamespace?: PropertyKey;
}

export interface ReadContractClientOptions
  extends ReadClientOptions,
    ContractClientOptions {}

export interface ReadWriteContractClientOptions
  extends ReadWriteClientOptions,
    ContractClientOptions {}
