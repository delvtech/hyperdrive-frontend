import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { TransactionColumn } from "./TransactionsTable";
type TransactionData = {
  assetId: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  eventName: string;
  timestamp: bigint;
  trader: string;
  blockNumber: bigint;
};

export type RowType = {
  type: string;
  value: string;
  account: string;
  time: string;
  blockNumber: string;
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
          event.eventName === "OpenShort" ? event.bondAmount : event.baseAmount,
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
  data: TransactionColumn[];
  status: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive(address);

  const { data: longs, status: longsStatus } = useQuery({
    queryKey: ["longEvent", readHyperdrive?.getLongEvents()],
    queryFn: async () => readHyperdrive?.getLongEvents(),
  });

  const { data: shorts, status: shortsStatus } = useQuery({
    queryKey: ["shortEvent", readHyperdrive?.getShortEvents()],
    queryFn: async () => readHyperdrive?.getShortEvents(),
  });

  const combinedEvents =
    longsStatus === "success" && shortsStatus === "success"
      ? [...(longs ?? []), ...(shorts ?? [])]
      : [];

  return {
    status: longsStatus ?? shortsStatus,
    data: mapEventsToRowType(combinedEvents),
  };
}
