import { QueryObserverOptions } from "@tanstack/query-core";
import { DSRHyperdriveABI } from "src/abis/DSRHyperdrive";
import {
  PublicClient,
  decodeEventLog,
  Address,
  Transport,
  Chain,
  BlockTag,
  GetFilterLogsReturnType,
  DecodeEventLogReturnType,
} from "viem";

interface GetTransferSingleEvents {
  args: { fromAddress?: Address; toAddress?: Address };
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

interface TransferSingleEvent {
  eventData: DecodeEventLogReturnType<
    typeof DSRHyperdriveABI,
    "TransferSingle"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof DSRHyperdriveABI,
    "TransferSingle"
  >[number];
}

export async function getTransferSingleEvents({
  args: { fromAddress, toAddress },
  fromBlock = 0n,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetTransferSingleEvents): Promise<TransferSingleEvent[]> {
  const transferSingleLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: DSRHyperdriveABI,
      address: hyperdriveAddress,
      eventName: "TransferSingle",
      args: { from: fromAddress, to: toAddress },
      fromBlock,
      toBlock,
    }),
  });

  return transferSingleLogs.map((log) => ({
    eventData: decodeEventLog({
      abi: DSRHyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "TransferSingle",
    }).args,
    eventLog: log,
  }));
}

/**
 * Creates a Query object for consumers who want easy caching via @tanstack/query
 *
 * TODO: Experimenting w/ this idea here for now as proof-of-concept, see:
 * https://twitter.com/DannyDelott/status/1623571402115911680
 *
 * Ultimately @hyperdrive/core should not know about caching and just be pure
 * hyperdrive-typescript library. If this works well in practice we should move
 * this to its own @hypedrive/queries package.
 */
export function getTransferSingleEventsQuery({
  hyperdriveAddress,
  publicClient,
  args: { fromAddress, toAddress } = {},
  fromBlock,
  toBlock,
}: Partial<GetTransferSingleEvents>): QueryObserverOptions<
  Awaited<ReturnType<typeof getTransferSingleEvents>>
> {
  // NOTE: args parameter is optional, don't include it in the enabled criteria
  const queryEnabled = !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: [
      "TransferSingle",
      { hyperdriveAddress, from: fromAddress, to: toAddress },
    ],
    queryFn: queryEnabled
      ? () =>
          getTransferSingleEvents({
            hyperdriveAddress,
            args: { fromAddress: fromAddress, toAddress: toAddress },
            fromBlock,
            toBlock,
            publicClient,
          })
      : undefined,
  };
}
