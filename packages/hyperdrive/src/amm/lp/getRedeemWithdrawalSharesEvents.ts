import { HyperdriveABI } from "src/abis/Hyperdrive";
import { EventOptions } from "src/base/EventOptions";
import {
  Address,
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
  fromBlock?: bigint | "earliest";
  toBlock?: bigint | "latest";
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getRedeemWithdrawalSharesEvents({
  args: { provider },
  hyperdriveAddress,
  publicClient,
  options,
}: GetRedeemWithdrawalSharesEventsOptions): Promise<
  RedeemWithdrawalSharesEvent[]
> {
  const redeemWithdrawalShareLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "RedeemWithdrawalShares",
      args: { provider },
      fromBlock: options?.fromBlock || "earliest",
      toBlock: options?.toBlock || "latest",
    }),
  });

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
