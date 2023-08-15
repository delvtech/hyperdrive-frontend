import { HyperdriveABI } from "src/abis/Hyperdrive";
import {
  PublicClient,
  decodeEventLog,
  Address,
  GetFilterLogsReturnType,
  DecodeEventLogReturnType,
} from "viem";

interface GetTransferSingleEvents {
  args: { fromAddress?: Address; toAddress?: Address };
  fromBlock?: bigint | "earliest";
  toBlock?: bigint | "latest";
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

interface TransferSingleEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "TransferSingle"
  >["args"];
  eventLog: GetFilterLogsReturnType<
    typeof HyperdriveABI,
    "TransferSingle"
  >[number];
}

export async function getTransferSingleEvents({
  args: { fromAddress, toAddress },
  fromBlock = "earliest",
  toBlock = "latest",
  hyperdriveAddress,
  publicClient,
}: GetTransferSingleEvents): Promise<TransferSingleEvent[]> {
  const transferSingleLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: HyperdriveABI,
      address: hyperdriveAddress,
      eventName: "TransferSingle",
      args: { from: fromAddress, to: toAddress },
      fromBlock,
      toBlock,
    }),
  });

  return transferSingleLogs.map((log) => ({
    eventData: decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "TransferSingle",
    }).args,
    eventLog: log,
  }));
}
