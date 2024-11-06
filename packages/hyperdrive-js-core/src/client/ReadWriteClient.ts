import { Drift, ReadWriteAdapter } from "@delvtech/drift";
import { ReadClient, ReadClientOptions } from "src/client/ReadClient";

/**
 * The base options required for all read-write clients.
 */
export interface ReadWriteClientOptions extends ReadClientOptions {
  drift: Drift<ReadWriteAdapter>;
}

/**
 * A base class for read-write clients.
 */
export class ReadWriteClient extends ReadClient {
  declare drift: Drift<ReadWriteAdapter>;

  constructor(options: ReadWriteClientOptions) {
    super(options);
  }
}
