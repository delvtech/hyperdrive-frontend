import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  PublicClient,
  Address,
  decodeEventLog,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  BlockTag,
} from "viem";
interface CloseShortEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "CloseShort"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "CloseShort">[number];
}
interface GetCloseShortEventsOptions {
  args: { traderAddress?: Address };
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getCloseShortEvents({
  args: { traderAddress },
  fromBlock = 0n,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetCloseShortEventsOptions): Promise<CloseShortEvent[]> {
  const closeShortLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "CloseShort",
      args: { trader: traderAddress },
      fromBlock,
      toBlock,
    }),
  });

  return closeShortLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "CloseShort",
    }).args,

    eventLog: log,
  }));
}
