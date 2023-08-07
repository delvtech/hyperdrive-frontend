import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  PublicClient,
  Address,
  decodeEventLog,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
} from "viem";
export interface OpenLongEvent {
  eventData: DecodeEventLogReturnType<typeof HyperdriveABI, "OpenLong">["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "OpenLong">[number];
}
interface GetOpenLongEventsOptions {
  args?: { traderAddress?: Address };
  fromBlock?: bigint | "earliest";
  toBlock?: bigint | "latest";
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getOpenLongEvents({
  args: { traderAddress } = {},
  fromBlock = "earliest",
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetOpenLongEventsOptions): Promise<OpenLongEvent[]> {
  const openLongLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "OpenLong",
      args: { trader: traderAddress },
      fromBlock,
      toBlock,
    }),
  });

  return openLongLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "OpenLong",
    }).args,

    eventLog: log,
  }));
}
