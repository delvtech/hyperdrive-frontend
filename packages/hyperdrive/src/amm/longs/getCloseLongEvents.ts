import { HyperdriveABI } from "src/abis/Hyperdrive";
import { EventOptions } from "src/base/EventOptions";
import {
  PublicClient,
  Address,
  decodeEventLog,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  CallParameters,
} from "viem";

interface CloseLongEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "CloseLong"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "CloseLong">[number];
}
interface GetCloseLongEventsOptions {
  args: { traderAddress?: Address };
  fromBlock?: bigint | "earliest";
  toBlock?: bigint | "latest";
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getCloseLongEvents({
  args: { traderAddress },
  hyperdriveAddress,
  publicClient,
  options,
}: GetCloseLongEventsOptions): Promise<CloseLongEvent[]> {
  const closeLongLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "CloseLong",
      args: { trader: traderAddress },
      fromBlock: options?.fromBlock || "earliest",
      toBlock: options?.toBlock || "latest",
    }),
  });

  return closeLongLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "CloseLong",
    }).args,

    eventLog: log,
  }));
}
