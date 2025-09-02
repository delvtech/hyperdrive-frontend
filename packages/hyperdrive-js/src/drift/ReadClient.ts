import { Drift } from "@delvtech/drift";

/**
 * The base options required for all read clients.
 */
export interface ReadClientOptions {
  drift: Drift;

  /**
   * An arbitrary name for the instance. This is for convenience only (e.g., for
   * use as a display name or in logging) and has no affect on the client's
   * behavior.
   */
  debugName?: string;
}

/**
 * A base class for read-only clients.
 */
export class ReadClient {
  drift: Drift;
  debugName: string;

  constructor({ debugName, drift }: ReadClientOptions) {
    this.debugName = debugName ?? this.constructor.name;
    this.drift = drift;
  }
}
