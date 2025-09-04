import { Drift } from "@delvtech/drift";
import { getEventsWithSplitAndRetry } from "src/base/getEventsWithSplitAndRetry";

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

  /**
   * The earliest block number to use for event queries.
   */
  epochBlock?: bigint;

  /**
   * The maximum number of times to split failed event requests into smaller
   * requests before giving up.
   *
   * **Caution:** this has the potential to increase the number of requests
   * _exponentially_, so it should be used with care.
   *
   * @default 3
   */
  eventQueryRetries?: number;

  /**
   * The time (in milliseconds) to wait before each event request retry attempt.
   *
   * @default 2 ** attempt * 100
   */
  eventQueryRetryBackoff?: number | ((attempt: number) => number);
}

/**
 * A base class for read-only clients.
 */
export class ReadClient {
  drift: Drift;
  debugName: string;

  constructor({
    debugName,
    drift,
    epochBlock,
    eventQueryRetries: eventFetchRetries = 3,
  }: ReadClientOptions) {
    this.debugName = debugName ?? this.constructor.name;
    this.drift = drift;

    // Add a hook to split failed requests into multiple smaller requests to
    // accommodate block range and/or event count limits.
    drift.hooks.on("before:getEvents", async ({ args, resolve }) => {
      const [{ fromBlock, toBlock, ...restParams }] = args;
      const events = await getEventsWithSplitAndRetry({
        params: {
          fromBlock,
          toBlock,
          ...restParams,
        },
        drift,
        epochBlock,
        retries: eventFetchRetries,
      });
      resolve(events);
    });
  }
}
