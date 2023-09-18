import { HyperdriveABI } from "src/abis/Hyperdrive";
import { EventOptions } from "src/base/EventOptions";
import {
  PublicClient,
  Address,
  decodeEventLog,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
} from "viem";
interface CloseShortEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "CloseShort"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "CloseShort">[number];
}
export interface GetCloseShortEventsOptions {
  args?: { traderAddress?: Address };
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getCloseShortEvents({
  args,
  hyperdriveAddress,
  publicClient,
  options,
}: GetCloseShortEventsOptions): Promise<CloseShortEvent[]> {
  const closeShortLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "CloseShort",
      args: { trader: args?.traderAddress },
      fromBlock: options?.fromBlock || "earliest",
      toBlock: options?.toBlock || "latest",
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
