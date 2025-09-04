import type { Address } from "@delvtech/drift";
import { ReadClientOptions } from "src/drift/ReadClient";
import { ReadWriteClientOptions } from "src/drift/ReadWriteClient";

export interface ReadContractClientOptions extends ReadClientOptions {
  address: Address;
}

export interface ReadWriteContractClientOptions extends ReadWriteClientOptions {
  address: Address;
}
