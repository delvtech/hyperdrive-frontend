import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  Address,
  BlockTag,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  PublicClient,
  decodeEventLog,
} from "viem";

interface RedeemWithdrawalSharesEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "RedeemWithdrawalShares"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof HyperdriveABI,
    "RedeemWithdrawalShares"
  >[number];
}

interface GetRedeemWithdrawalSharesEventsOptions {
  args: { provider?: Address };
  fromBlock?: bigint | BlockTag;
  toBlock?: bigint | BlockTag;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getRedeemWithdrawalSharesEvents({
  args: { provider },
  fromBlock = 0n,
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetRedeemWithdrawalSharesEventsOptions): Promise<
  RedeemWithdrawalSharesEvent[]
> {
  const redeemWithdrawalShareLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "RedeemWithdrawalShares",
      args: { provider },
      fromBlock,
      toBlock,
    }),
  });

  console.log(redeemWithdrawalShareLogs);

  return redeemWithdrawalShareLogs.map((log) => ({
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      topics: log.topics,
      data: log.data,
      eventName: "RedeemWithdrawalShares",
    }).args,
    eventLog: log,
  }));
}
