import { HyperdriveABI } from "src/abis/Hyperdrive";
import { isHyperdriveShort } from "src/pools/assetId";
import {
  PublicClient,
  decodeEventLog,
  zeroAddress,
  Address,
  Transport,
  Chain,
} from "viem";

interface GetShortsOptions {
  account: Address;
  hyperdriveMarket: Address;
  publicClient: PublicClient<Transport, Chain>;
}

/** Fetches all open and closed shorts for an account. */
export async function getShorts({
  account,
  hyperdriveMarket,
  publicClient,
}: GetShortsOptions): Promise<bigint[]> {
  // Any transfer event from the zero address is considered a mint event on the
  // hyperdrive market. The market is a multi-token, and users can mint longs,
  // shorts, lp shares, and withdrawal shares. This means some digging is
  // required to extract just the shorts.
  const mintFilter = await publicClient.createContractEventFilter({
    abi: HyperdriveABI,
    address: hyperdriveMarket,
    eventName: "TransferSingle",
    args: { from: zeroAddress, to: account },
    // viem requires you to specify fromBlock and toBlock
    fromBlock: 0n,
    toBlock: "latest",
  });

  const mintFilterLogs = await publicClient.getFilterLogs({
    filter: mintFilter,
  });

  const mintEvents = mintFilterLogs.map((log) =>
    decodeEventLog({
      abi: HyperdriveABI,
      data: log.data,
      topics: log.topics,
      eventName: "TransferSingle",
    }),
  );

  return (
    mintEvents
      // casting to bigint because viem marks all event args as optional 🤷‍♂️
      .filter((mintEvent) => isHyperdriveShort(mintEvent.args.id as bigint))
      .map((short) => short.args.id as bigint)
  );
}
