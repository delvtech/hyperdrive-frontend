import { PublicClient, Address } from "viem";
import { getRemoveLiquidityEvents } from "src/amm/lp/getRemoveLiquidityEvents";
import { EventOptions } from "src/base/EventOptions";

export interface GetClosedLpSharesOptions {
  providerAddress: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
}

export interface ClosedLpShares {
  hyperdriveAddress: `0x${string}`;
  lpAmount: bigint;
  baseAmount: bigint;
  withdrawalShareAmount: bigint;
  closedTimestamp: bigint;
}

export async function getClosedLpShares({
  providerAddress,
  hyperdriveAddress,
  publicClient,
  options,
}: GetClosedLpSharesOptions): Promise<ClosedLpShares[]> {
  const removeLiquidityEvents = await getRemoveLiquidityEvents({
    args: { providerAddress },
    hyperdriveAddress,
    publicClient,
    options,
  });

  return Promise.all(
    removeLiquidityEvents.map(async (event) => {
      const {
        eventData: { lpAmount, baseAmount, withdrawalShareAmount },
      } = event;
      return {
        hyperdriveAddress,
        lpAmount,
        baseAmount,
        withdrawalShareAmount,
        closedTimestamp: (
          await publicClient.getBlock({
            blockNumber: event.eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );
}
