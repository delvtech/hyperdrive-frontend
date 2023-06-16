import { DSRHyperdriveABI } from "src/abis/DSRHyperdrive";
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
    typeof DSRHyperdriveABI,
    "CloseLong"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof DSRHyperdriveABI,
    "CloseLong"
  >[number];
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
  const transferSingleLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: DSRHyperdriveABI,
      address: hyperdriveAddress,
      eventName: "CloseLong",
      args: { trader: traderAddress },
      fromBlock,
      toBlock,
    }),
  });

  return transferSingleLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: DSRHyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "CloseLong",
    }).args,

    eventLog: log,
  }));
}
