import { DSRHyperdriveABI } from "src/abis/DSRHyperdrive";
import { PublicClient, decodeEventLog, Address, Transport, Chain } from "viem";

interface GetLongsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

/**
 * Fetch a list of token ids for all the longs the account has ever opened
 */
export async function getLongs({
  account,
  hyperdriveAddress,
  publicClient,
}: GetLongsOptions): Promise<bigint[]> {
  const openLongEventLogs = await publicClient.getFilterLogs({
    filter: await publicClient.createContractEventFilter({
      abi: DSRHyperdriveABI,
      address: hyperdriveAddress,
      eventName: "OpenLong",
      args: { trader: account },
      // viem requires you to specify fromBlock and toBlock despite being optional
      // TODO: Revalidate this with latest viem.
      fromBlock: 0n,
      toBlock: "latest",
    }),
  });

  return openLongEventLogs.map((log) => {
    const {
      args: { assetId },
    } = decodeEventLog({
      abi: DSRHyperdriveABI,
      ...log,
    });

    return assetId;
  });
}
