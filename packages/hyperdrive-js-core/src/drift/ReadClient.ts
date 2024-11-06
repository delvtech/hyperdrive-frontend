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

  /**
   * The earliest block to fetch events from.
   */
  earliestBlock?: bigint;
}

/**
 * A base class for read-only clients.
 */
export class ReadClient {
  drift: Drift;
  debugName: string;

  constructor({ debugName, drift, earliestBlock }: ReadClientOptions) {
    this.debugName = debugName ?? this.constructor.name;
    this.drift = drift;

    // Override the contract factory to ensure that events are fetched from the
    // earliest block if necessary.
    if (earliestBlock) {
      const originalContractFactory = this.drift.contract;
      this.drift.contract = (options) => {
        const contract = originalContractFactory(options);

        // Override the getEvents method
        const originalGetEvents = contract.getEvents;
        contract.getEvents = async function (eventName, options) {
          const _options = { ...options };
          const fromBlock = _options?.fromBlock;
          const isBeforeEarliest =
            typeof fromBlock === "bigint" && fromBlock < earliestBlock;
          if (!fromBlock || fromBlock === "earliest" || isBeforeEarliest) {
            _options.fromBlock = earliestBlock;
          }

          return originalGetEvents(eventName, _options);
        };

        return contract as any;
      };
    }
  }
}
