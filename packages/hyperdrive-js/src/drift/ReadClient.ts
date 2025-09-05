import { Drift } from "@delvtech/drift";
import { getEventsWithSplitAndRetry } from "src/drift/utils/getEventsWithSplitAndRetry";

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
    eventQueryRetries = 3,
    eventQueryRetryBackoff = (attempt: number) => 2 ** attempt * 100,
  }: ReadClientOptions) {
    this.debugName = debugName ?? this.constructor.name;
    this.drift = drift;

    if (eventQueryRetries > 0) {
      // Overwrite the getEvents method to split failed requests into multiple
      // smaller requests to accommodate block range and/or event count limits.
      drift.extend({
        getEvents({
          fromBlock = "earliest",
          toBlock = "latest",
          ...restParams
        }) {
          return getEventsWithSplitAndRetry({
            params: {
              fromBlock,
              toBlock,
              ...restParams,
            },
            drift,
            retries: eventQueryRetries,
            backoff: eventQueryRetryBackoff,
          });
        },
      });
    }
  }
}
