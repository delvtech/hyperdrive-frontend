import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
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

export function useTransactionData({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): {
  data: TransactionData[] | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longEvents", { hyperdriveAddress }),
    queryFn: async () => readHyperdrive?.getLongEvents(),
  });

  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("shortEvents", { hyperdriveAddress }),
    queryFn: async () => readHyperdrive?.getShortEvents(),
  });
  const { data: lpEvents } = useQuery({
    queryKey: makeQueryKey("lpEvents", { hyperdriveAddress }),
    queryFn: async () => readHyperdrive?.getLpEvents(),
  });

  // It's important to memoize this table data because creating new arrays of
  // the same data will cause infinite renders in the TransactionTable.
  const data = useMemo(() => {
    const data = [];
    if (longs) {
      data.push(...longs.slice(0, 100));
    }
    if (shorts) {
      data.push(...shorts.slice(0, 100));
    }
    if (lpEvents) {
      data.push(...lpEvents.slice(0, 100));
    }
    return data;
  }, [longs, lpEvents, shorts]);

  return { data };
}
