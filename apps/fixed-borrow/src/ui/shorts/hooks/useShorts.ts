import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { useQuery } from "@tanstack/react-query";
import { PublicClient, decodeEventLog, Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseShortsOptions<SelectResult> {
  account: Address | undefined;
  hyperdriveMarket: Address | undefined;
  select?: (shorts: bigint[]) => SelectResult;
}

export function useShorts<SelectResult = bigint[]>({
  account,
  hyperdriveMarket,
  select,
}: UseShortsOptions<SelectResult>): {
  shorts: SelectResult | undefined;
  shortsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const queryEnabled = !!account && !!hyperdriveMarket;
  const { data: shorts, status: shortsStatus } = useQuery({
    queryKey: ["user-shorts", { account, hyperdriveMarket, publicClient }],
    enabled: queryEnabled,
    select: select,
    queryFn: queryEnabled
      ? () =>
          getShorts({
            account,
            hyperdriveAddress: hyperdriveMarket,
            // Casting as any since wagmi and viem are being silly and don't
            // agree on the type of PublicClient in ways that don't seem to
            // matter in any practical way.
            publicClient: publicClient as any,
          })
      : undefined,
  });

  return { shorts, shortsStatus };
}

export interface GetShortsOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

/** Fetches all open and closed shorts for an account.
 * @deprecated use sdk instead
 */
async function getShorts({
  account,
  hyperdriveAddress,
  publicClient,
}: GetShortsOptions): Promise<bigint[]> {
  const openShortFilter = await publicClient.createContractEventFilter({
    abi: IHyperdrive.abi,
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
      abi: IHyperdrive.abi,
      data: log.data,
      topics: log.topics,
      eventName: "OpenShort",
    }),
  );

  return mintEvents.map((short) => short.args.assetId);
}
