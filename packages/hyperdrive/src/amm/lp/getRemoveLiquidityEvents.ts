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
    "RemoveLiquidity"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof HyperdriveABI,
    "RemoveLiquidity"
  >[number];
}
interface GetRemoveLiquidityEventsOptions {
  args: { providerAddress?: Address };
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getRemoveLiquidityEvents({
  args: { providerAddress },
  hyperdriveAddress,
  publicClient,
  options,
}: GetRemoveLiquidityEventsOptions): Promise<CloseShortEvent[]> {
  const closeLPLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "RemoveLiquidity",
      args: { provider: providerAddress },
      fromBlock: options?.fromBlock || "earliest",
      toBlock: options?.toBlock || "latest",
    }),
  });

  return closeLPLogs.map((log) => ({
    // This is a typesafe copy of eventLog.args
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "RemoveLiquidity",
    }).args,

    eventLog: log,
  }));
}
