import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Transaction } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
type TransactionData = {
  assetId: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  eventName: string;
  timestamp: bigint;
  trader: Address;
  blockNumber: bigint | undefined;
};

function mapEventName(eventName: string): string {
  switch (eventName) {
    case "OpenLong":
      return "Buy";
    case "OpenShort":
      return "Open Short";
    case "CloseLong":
      return "Sell";
    case "CloseShort":
      return "Close Short";
    default:
      return eventName;
  }
}

function mapEventsToRowType(events: TransactionData[]) {
  return events
    .map((event) => ({
      type: mapEventName(event.eventName),
      value: dnum.format(
        [
          event.eventName === "OpenShort" || "CloseShort"
            ? event.bondAmount
            : event.baseAmount,
          18,
        ],
        { digits: 2 },
      ),
      account: event.trader,
      time: new Date(Number(event.timestamp) * 1000).toLocaleDateString(),
      blockNumber: event.blockNumber,
    }))
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber));
}

export function useTransactionData({ address }: Hyperdrive): {
  data: Transaction[] | undefined;
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

  return { data: data.length ? mapEventsToRowType(data) : undefined };
}
