import type { Address } from "@delvtech/drift";
import { ReadClientOptions } from "src/drift/ReadClient";
import { ReadWriteClientOptions } from "src/drift/ReadWriteClient";

interface BaseContractClientOptions {
  address: Address;

  /**
   * The earliest block number to use for event queries.
   */
  epochBlock?: bigint;
}

export interface ReadContractClientOptions
  extends ReadClientOptions,
    BaseContractClientOptions {}

export interface ReadWriteContractClientOptions
  extends ReadWriteClientOptions,
    BaseContractClientOptions {}
