import {
  OpenLongEvent,
  OpenShortEvent,
  getTradingVolume,
} from "@hyperdrive/core";
import { QueryObserverOptions } from "@tanstack/query-core";
import { sumBigInt } from "src/base/sumBigInt";
import { makeQueryKey } from "src/makeQueryKey";
import { Address, PublicClient } from "viem";

export function getTradingVolumeQuery({
  hyperdriveAddress,
  publicClient,
  currentBlockNumber,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  currentBlockNumber: bigint;
}): QueryObserverOptions<Awaited<ReturnType<typeof getTradingVolume>>> {
  return {
    queryKey: makeQueryKey("tradingVolume", {
      hyperdriveAddress,
      publicClient,
      currentBlockNumber: currentBlockNumber?.toString(),
    }),
    queryFn: () =>
      getTradingVolume(hyperdriveAddress, publicClient, currentBlockNumber),
    enabled: !!currentBlockNumber,
  };
}

function calculateTotalAmount(
  events: OpenShortEvent[] | OpenLongEvent[],
): bigint {
  return sumBigInt(events.map((event) => event.eventData.bondAmount));
}
