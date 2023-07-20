import { QueryObserverOptions } from "@tanstack/query-core";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { getOpenLongEvents } from "src/amm/longs/getOpenLongEvents";
import { getOpenShortEvents } from "src/amm/shorts/getOpenShortEvents";
import {
  Address,
  Chain,
  DecodeEventLogReturnType,
  GetFilterLogsReturnType,
  PublicClient,
  Transport,
  formatUnits,
} from "viem";
interface OpenShortEvent {
  eventData: DecodeEventLogReturnType<
    typeof HyperdriveABI,
    "OpenShort"
  >["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "OpenShort">[number];
}
interface OpenLongEvent {
  eventData: DecodeEventLogReturnType<typeof HyperdriveABI, "OpenLong">["args"];
  eventLog: GetFilterLogsReturnType<typeof HyperdriveABI, "OpenLong">[number];
}

/**
 * Calculates the total trading volume based on long and short bond amounts.
 *
 * @param hyperdriveAddress - Address of hyperdrive.
 * @param publicClient - Client to fetch data.
 * @param currentBlockNumber - Current block number.
 * @returns Total trading volume as a string.
 */
export async function getTradingVolume(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
  currentBlockNumber: bigint,
): Promise<{ volume: bigint; formatted: string }> {
  // 7137 is the average number of blocks in 24h
  let blockNumber24hAgo = currentBlockNumber - 7137n;
  // If the block number 24h ago is negative, set it to 0. Useful for anvil because blocknumbers are low. Should remove this for mainnet
  if (blockNumber24hAgo < 0n) {
    blockNumber24hAgo = 0n;
  }

  const [shortEvents, longEvents] = await Promise.all([
    getOpenShortEvents({
      fromBlock: blockNumber24hAgo,
      hyperdriveAddress,
      publicClient,
    }),
    getOpenLongEvents({
      fromBlock: blockNumber24hAgo,
      hyperdriveAddress,
      publicClient,
    }),
  ]);

  const totalVolume =
    calculateTotalAmount(longEvents) + calculateTotalAmount(shortEvents);
  const formattedTotalVolume = formatUnits(totalVolume, 18);

  return { formatted: formattedTotalVolume.toString(), volume: totalVolume };
}

export function getTradingVolumeQuery({
  hyperdriveAddress,
  publicClient,
  currentBlockNumber,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
  currentBlockNumber: bigint;
}): QueryObserverOptions<Awaited<ReturnType<typeof getTradingVolume>>> {
  return {
    queryKey: ["tradingVolume", { hyperdriveAddress, publicClient }],
    queryFn: () =>
      getTradingVolume(hyperdriveAddress, publicClient, currentBlockNumber),
    enabled: !!currentBlockNumber,
  };
}

function calculateTotalAmount(
  events: OpenShortEvent[] | OpenLongEvent[],
): bigint {
  return events.reduce(
    (total, event) => total + event.eventData.bondAmount,
    0n,
  );
}
