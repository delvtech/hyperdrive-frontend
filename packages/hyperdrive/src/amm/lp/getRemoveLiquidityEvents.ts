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
  fromBlock?: bigint;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getRemoveLiquidityEvents({
  args: { providerAddress },
  fromBlock = 0n,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetRemoveLiquidityEventsOptions): Promise<CloseShortEvent[]> {
  const closeLPLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "RemoveLiquidity",
      args: { provider: providerAddress },
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
      eventName: "RemoveLiquidity",
    }).args,

    eventLog: log,
  }));
}
