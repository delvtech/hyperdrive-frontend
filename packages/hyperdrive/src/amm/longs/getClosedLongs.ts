import { PublicClient, Address } from "viem";
import { ClosedLong } from "./types";
import { getCloseLongEvents } from "src/amm/longs/getCloseLongEvents";

export interface GetClosedLongsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getClosedLongs({
  traderAddress,
  hyperdriveAddress,
  publicClient,
}: GetClosedLongsOptions): Promise<ClosedLong[]> {
  const closedLongs = await getCloseLongEvents({
    args: { traderAddress },
    hyperdriveAddress,
    publicClient,
  });

  const closedLongsById = await Promise.all(
    closedLongs.map(async (event) => {
      const {
        eventData: { assetId, maturityTime, baseAmount, bondAmount },
      } = event;
      return {
        hyperdriveAddress,
        assetId,
        maturity: maturityTime,
        bondAmount,
        baseAmount,
        baseAmountPaid: 0n, // TODO: Remove this
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );

  return Promise.all([...Object.values(closedLongsById)]);
}
