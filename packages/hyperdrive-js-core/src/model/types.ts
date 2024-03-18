import { Network } from "@delvtech/evm-client";

export interface ModelOptionsBase {
  network: Network;

  /**
   * An arbitrary name for the instance. This is for convenience only (e.g., for
   * use as a display name or in logging) and has no affect on the model's
   * behavior.
   */
  name?: string;
}
