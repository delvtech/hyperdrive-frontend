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
interface CloseLongEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "CloseLong"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "CloseLong">[number];
}
interface GetCloseLongEventsOptions {
  args: { traderAddress?: Address };
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getCloseLongEvents({
  args: { traderAddress },
  fromBlock = 0n,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetCloseLongEventsOptions): Promise<CloseLongEvent[]> {
  const closeLongLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "CloseLong",
      args: { trader: traderAddress },
      fromBlock,
      toBlock,
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
