import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  PublicClient,
  Address,
  decodeEventLog,
  Transport,
  Chain,
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
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getOpenShortEvents({
  fromBlock,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetOpenShortEventsOptions): Promise<OpenShortEvent[]> {
  const openShortLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
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
