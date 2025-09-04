import {
  Abi,
  Drift,
  EventLog,
  EventName,
  GetEventsParams,
  type RangeBlock,
} from "@delvtech/drift";
import { HyperdriveSdkError } from "src/HyperdriveSdkError";

class EventFetchError extends HyperdriveSdkError {
  constructor(chainId: number, chunkedParams: GetEventsParams<Abi, string>[]) {
    const { event, address } = chunkedParams[0];
    let message = `Failed to fetch "${event}" events from ${address} on chain ${chainId}.`;
    message += "\n  Requested block ranges:";
    for (const params of chunkedParams) {
      message += `\n    - ${params.fromBlock} to ${params.toBlock}`;
    }
    super(message);
  }
}

/**
 * @internal
 */
export async function getEventsWithSplitAndRetry<
  A extends Abi,
  E extends EventName<A>,
>({
  params,
  drift,
  epochBlock = 0n,
  retries = 3,
  backoff = (attempt: number) => 2 ** attempt * 100,
}: {
  params: GetEventsParams<A, E>;
  drift: Drift;
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
  retries?: number;
  /**
   * The time (in milliseconds) to wait before each retry attempt.
   *
   * @default 2 ** attempt * 100
   */
  backoff?: number | ((attempt: number) => number);
}): Promise<EventLog<A, E>[]> {
  const backoffFn = typeof backoff === "number" ? () => backoff : backoff;
  const chainId = await drift.getChainId();
  const rangeMap = new Map<string, EventLog<A, E>[]>();
  let chunks: GetEventsParams<A, E>[] = [params];

  for (let attempt = 0; attempt <= retries; attempt++) {
    const nextChunks: GetEventsParams<A, E>[][] = [];
    let hadErrors = false;

    const events = await Promise.all(
      chunks.map(async (params, i) => {
        // 1. Check the range map (fast)
        const rangeKey = [params.fromBlock, params.toBlock].join("-");
        let cachedEvents = rangeMap.get(rangeKey);
        if (cachedEvents) {
          nextChunks[i] = [params];
          return cachedEvents;
        }

        // 2. Check the cache (most-likely fast, but cache dependent)
        cachedEvents = await drift.cache.getEvents(params);
        if (cachedEvents) {
          rangeMap.set(rangeKey, cachedEvents);
          nextChunks[i] = [params];
          return cachedEvents;
        }

        // 3. Try to fetch (network dependent)
        try {
          const events = await drift.adapter.getEvents(params);
          rangeMap.set(rangeKey, events);
          drift.cache.preloadEvents({
            ...params,
            value: events,
          });
          nextChunks[i] = [params];
          return events;
        } catch {
          // 4. Split on failure
          hadErrors = true;
          const halves = await splitParams(drift, params, epochBlock);
          if (!halves) {
            // Throw if the params can't be split further
            throw new EventFetchError(chainId, chunks);
          }
          nextChunks[i] = halves;
          return [];
        }
      }),
    );

    // Return the events if there were no errors
    if (!hadErrors) {
      return events.flat();
    }

    const error = new EventFetchError(chainId, chunks);

    // Throw if this was the last attempt
    if (attempt === retries) {
      throw error;
    }

    chunks = nextChunks.flat();
    let warning = error.message;
    warning += `\n  Number of attempts left: ${retries - attempt}`;
    warning += `\n  Retrying with ${chunks.length} requests...`;
    console.warn(warning);

    // Exponential backoff before retrying
    const retryDelay = backoffFn(attempt);
    const jitteredRetryDelay = Math.floor(retryDelay * (0.5 + Math.random()));
    await sleep(jitteredRetryDelay);
  }

  throw new EventFetchError(chainId, [params]);
}

async function resolveRangeBlock(
  drift: Drift,
  block: RangeBlock | undefined,
  epochBlock = 0n,
): Promise<bigint | undefined> {
  if (typeof block === "bigint") {
    return block;
  }
  if (block === "earliest") {
    return epochBlock;
  }
  const { number } = await drift.getBlock(block);
  return number;
}

async function splitParams<A extends Abi, E extends EventName<A>>(
  drift: Drift,
  { fromBlock, toBlock, ...restParams }: GetEventsParams<A, E>,
  epochBlock = 0n,
): Promise<[GetEventsParams<A, E>, GetEventsParams<A, E>] | null> {
  if (fromBlock === toBlock) {
    return null;
  }
  fromBlock = await resolveRangeBlock(drift, fromBlock, epochBlock);
  if (fromBlock === undefined) {
    return null;
  }
  toBlock = await resolveRangeBlock(drift, toBlock, epochBlock);
  if (toBlock === undefined || fromBlock >= toBlock) {
    return null;
  }
  const blockRangeSize = toBlock - fromBlock;
  const middleBlock = fromBlock + blockRangeSize / 2n;
  return [
    {
      fromBlock,
      toBlock: middleBlock,
      ...restParams,
    },
    {
      fromBlock: middleBlock + 1n,
      toBlock,
      ...restParams,
    },
  ];
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
