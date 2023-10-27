import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export type TransactionData = {
  assetId?: bigint;
  baseAmount: bigint;
  bondAmount?: bigint;
  eventName: string;
  trader: Address;
  blockNumber: bigint | undefined;
};

export function useTransactionData({ address }: Hyperdrive): {
  data: TransactionData[] | undefined;
} {
  const readHyperdrive = useReadHyperdrive(address);

  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longEvents", { address }),
    queryFn: async () => readHyperdrive?.getLongEvents(),
  });

  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("shortEvents", { address }),
    queryFn: async () => readHyperdrive?.getShortEvents(),
  });
  const { data: lpEvents } = useQuery({
    queryKey: makeQueryKey("lpEvents", { address }),
    queryFn: async () => readHyperdrive?.getLpEvents(),
  });

  const data = [];
  if (longs) {
    data.push(...longs);
  }
  if (shorts) {
    data.push(...shorts);
  }
  if (lpEvents) {
    data.push(...lpEvents);
  }

  return { data };
}
