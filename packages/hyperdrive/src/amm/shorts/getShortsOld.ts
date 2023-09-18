import { HyperdriveABI } from "src/abis/Hyperdrive";
import { PublicClient, decodeEventLog, Address } from "viem";

export interface GetShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

/** Fetches all open and closed shorts for an account.
 * @deprecated use getOpenShorts instead. This is currently only being used by
 * fixed-borrow.
 */
export async function getShorts({
  account,
  hyperdriveAddress,
  publicClient,
}: GetShortsOptions): Promise<bigint[]> {
  const openShortFilter = await publicClient.createContractEventFilter({
    abi: HyperdriveABI,
    address: hyperdriveAddress,
    eventName: "OpenShort",
    args: { trader: account },
    // viem requires you to specify fromBlock and toBlock
    fromBlock: 0n,
    toBlock: "latest",
  });

  const openShortFilterLogs = await publicClient.getFilterLogs({
    filter: openShortFilter,
  });

  const mintEvents = openShortFilterLogs.map((log) =>
    decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "OpenShort",
    }),
  );

  return mintEvents.map((short) => short.args.assetId);
}
