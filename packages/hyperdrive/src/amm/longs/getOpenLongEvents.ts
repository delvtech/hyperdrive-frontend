import { HyperdriveABI } from "src/abis/Hyperdrive";
import { EventOptions } from "src/base/EventOptions";
import {
  Address,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  PublicClient,
  decodeEventLog,
} from "viem";
export interface OpenLongEvent {
  eventData: DecodeEventLogReturnType<typeof HyperdriveABI, "OpenLong">["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "OpenLong">[number];
}
interface GetOpenLongEventsOptions {
  args?: { traderAddress?: Address };
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getOpenLongEvents({
  args: { traderAddress } = {},
  hyperdriveAddress,
  publicClient,
  options,
}: GetOpenLongEventsOptions): Promise<OpenLongEvent[]> {
  const openLongLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "OpenLong",
      args: { trader: traderAddress },
      fromBlock: options?.fromBlock || "earliest",
      toBlock: options?.toBlock || "latest",
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
