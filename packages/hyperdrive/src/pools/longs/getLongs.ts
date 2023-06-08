import { QueryObserverOptions } from "@tanstack/query-core";
import { DSRHyperdriveABI } from "src/abis/DSRHyperdrive";
import { PublicClient, decodeEventLog, Address, Transport, Chain } from "viem";

export interface GetLongsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

interface OpenLong {
  assetId: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  maturityTime: bigint;
  trader: Address;
  transactionHash: Address | null;
}

/**
 * Fetch a list of token ids for all the longs the account has ever opened
 */
export async function getLongs({
  account,
  hyperdriveAddress,
  publicClient,
}: GetLongsOptions): Promise<OpenLong[]> {
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
      args: { assetId, baseAmount, bondAmount, maturityTime, trader },
    } = decodeEventLog({
      abi: DSRHyperdriveABI,
      ...log,
    });

    return {
      assetId,
      baseAmount,
      bondAmount,
      maturityTime,
      trader,
      transactionHash: log.transactionHash,
    };
  });
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hypedrive/queries package, where it could possibly even be codegened.
 */
export function getLongsQuery({
  hyperdriveAddress,
  publicClient,
  account,
}: Partial<GetLongsOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getLongs>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: ["longs", { hyperdriveAddress, account }],
    queryFn: queryEnabled
      ? () => getLongs({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
