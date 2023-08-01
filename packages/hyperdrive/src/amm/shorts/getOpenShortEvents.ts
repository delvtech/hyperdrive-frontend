import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  PublicClient,
  Address,
  decodeEventLog,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  BlockTag,
} from "viem";
interface OpenShortEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "OpenShort"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "OpenShort">[number];
}
interface GetOpenShortEventsOptions {
  args?: { trader?: Address };
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getOpenShortEvents({
  args,
  fromBlock,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetOpenShortEventsOptions): Promise<OpenShortEvent[]> {
  const openShortLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      args,
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "OpenShort",
      fromBlock,
      toBlock,
    }),
  });

  return openShortLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "OpenShort",
    }).args,

    eventLog: log,
  }));
}
