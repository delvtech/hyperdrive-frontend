import { PublicClient, Address } from "viem";
import { getCloseShortEvents } from "src/amm/shorts/getCloseShortEvents";
import { ClosedShort } from "src/amm/shorts/types";
import { EventOptions } from "src/base/EventOptions";

export interface GetClosedShortsOptions {
  traderAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export async function getClosedShorts({
  traderAddress,
  hyperdriveAddress,
  publicClient,
  options,
}: GetClosedShortsOptions): Promise<ClosedShort[]> {
  const closedShorts = await getCloseShortEvents({
    args: { traderAddress },
    hyperdriveAddress,
    publicClient,
    options,
  });

  const closedShortsById = await Promise.all(
    closedShorts.map(async (event) => {
      const {
        eventData: { assetId, maturityTime, baseAmount, bondAmount },
      } = event;
      return {
        hyperdriveAddress,
        assetId,
        maturity: maturityTime,
        bondAmount,
        baseAmountReceived: baseAmount,
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );

  return await Promise.all([...Object.values(closedShortsById)]);
}
