import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Transaction } from "src/ui/app/Table/TransactionsTable";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
type TransactionData = {
  assetId: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  eventName: string;
  timestamp: bigint;
  trader: string;
  blockNumber: bigint;
};

function mapEventName(eventName: string): string {
  switch (eventName) {
    case "OpenLong":
      return "Buy";
    case "OpenShort":
      return "Short";
    case "CloseLong":
      return "Sell";
    case "CloseShort":
      return "Cover";
    default:
      return eventName;
  }
}

const mapEventsToRowType = (events: TransactionData[]) => {
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
      account: formatAddress(event.trader),
      time: new Date(Number(event.timestamp) * 1000).toLocaleDateString(),
      blockNumber: event.blockNumber.toString(),
    }))
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber));
};

export function useTransactionData({ address }: Hyperdrive): {
  data: Transaction[];
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

  return {
    data: mapEventsToRowType([...(longs ?? []), ...(shorts ?? [])]),
  };
}
