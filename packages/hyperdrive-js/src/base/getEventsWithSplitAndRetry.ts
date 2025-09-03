import {
  Abi,
  Drift,
  EventLog,
  EventName,
  GetEventsParams,
} from "@delvtech/drift";
import { HyperdriveSdkError } from "src/HyperdriveSdkError";

/**
 * @internal
 */
export async function getEventsWithSplitAndRetry<
  A extends Abi,
  E extends EventName<A>,
>({
  params,
  drift,
  epochBlock,
  /**
   * The maximum number of times to split failed event requests into smaller
   * requests before giving up. Defaults to 4.
   */
  retries = 4,
}: {
  params: GetEventsParams<A, E>;
  drift: Drift;
  epochBlock?: bigint;
  retries?: number;
}): Promise<EventLog<A, E>[]> {
  const paramChunks: (GetEventsParams<A, E> | GetEventsParams<A, E>[])[] = [
    params,
  ];
  let error: Error | undefined;

  while (retries) {
    error = undefined;

    const chunkedEvents = await Promise.all(
      paramChunks.flat().map(async (params, i) => {
        let { fromBlock, toBlock } = params;

        // Check the cache for the chunk
        const cachedEvents = await drift.cache.getEvents(params);
        if (cachedEvents) {
          paramChunks[i] = params;
          return cachedEvents;
        }

        const chunk = await drift.adapter
          .getEvents(params)
          // Split the request into 2 smaller requests if it throws an error
          .catch(async (e) => {
            error = new HyperdriveSdkError(e);

            // Throw if the chunk is too small to split
            if (
              [0n, "earliest", fromBlock].includes(toBlock) ||
              // Implies the chunk starts at "finalized", "latest", "safe", or "pending"
              (typeof fromBlock === "string" && fromBlock !== "earliest")
            ) {
              throw error;
            }

            // Coerce fromBlock and toBlock to bigints to find the middle
            if (typeof fromBlock !== "bigint") {
              fromBlock = epochBlock || 0n;
            }
            if (typeof toBlock !== "bigint") {
              const block = await drift.getBlock();
              if (!block?.number) {
                throw error;
              }
              toBlock = block.number;
            }

            // Validate the block range size after coercion
            const blockRangeSize = toBlock - fromBlock;
            if (blockRangeSize <= 0n) {
              throw error;
            }

            // Split the chunk into two smaller chunks
            const middleBlock = fromBlock + blockRangeSize / 2n;
            paramChunks[i] = [
              {
                ...params,
                fromBlock,
                toBlock: middleBlock,
              },
              {
                ...params,
                fromBlock: middleBlock + 1n,
                toBlock,
              },
            ];
          });

        // Cache the chunk if it was fetched successfully
        if (chunk) {
          drift.cache.preloadEvents({
            ...params,
            value: chunk,
          });
          paramChunks[i] = params;
          return chunk;
        }

        // Return an empty array if the chunk failed and was split
        return [];
      }),
    );

    // Return the events if there were no errors
    if (!error) {
      return chunkedEvents.flat();
    }

    console.warn(
      `Failed to fetch '${params.event}' events from ${params.address}. Retrying with ${
        paramChunks.flat().length
      } requests.`,
    );

    retries--;
  }

  throw (
    error ||
    new HyperdriveSdkError(
      `Unknown error fetching '${params.event}' events from ${params.address}`,
    )
  );
}
