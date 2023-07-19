import { getOpenLongEvents } from "src/amm/longs/getOpenLongEvents";
import { getOpenShortEvents } from "src/amm/shorts/getOpenShortEvents";
import { Address, Chain, PublicClient, Transport, formatUnits } from "viem";

export async function getTradingVolume(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
  currentBlockNumber: bigint,
): Promise<string> {
  console.log(7137n.toString(), "currentBlockNumber");

  let blockNumber24hAgo = currentBlockNumber - 7137n;
  // If the block number 24h ago is negative, set it to 0. Useful for anvil because blocknumbers are low. Should remove this for mainnet
  if (blockNumber24hAgo < 0n) {
    blockNumber24hAgo = 0n;
  }

  const shortEvents = await getOpenShortEvents({
    fromBlock: blockNumber24hAgo,
    hyperdriveAddress,
    publicClient,
  });
  const longEvents = await getOpenLongEvents({
    fromBlock: blockNumber24hAgo,
    hyperdriveAddress,
    publicClient,
  });
  const longEventAmounts = longEvents.map((event) =>
    parseInt(formatUnits(event.eventData.bondAmount, 18)),
  );

  const shortEventAmounts = shortEvents.map((event) =>
    parseInt(formatUnits(event.eventData.bondAmount, 18)),
  );
  const summedLongs = longEventAmounts.reduce((a, b) => a + b, 0);
  const summedShorts = shortEventAmounts.reduce((a, b) => a + b, 0);
  const totalVolume = summedLongs + summedShorts;

  return totalVolume.toString();
}

export function getTradingVolumeQuery({
  hyperdriveAddress,
  publicClient,
  currentBlockNumber,
}: {
  hyperdriveAddress: Address | undefined;
  publicClient: any;
  currentBlockNumber: bigint;
}): any {
  return {
    queryKey: ["tradingVolume", { hyperdriveAddress, publicClient }],
    queryFn: () =>
      getTradingVolume(
        hyperdriveAddress as Address,
        publicClient,
        currentBlockNumber,
      ),
  };
}
