import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
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

type RowType = {
  type: string;
  value: string;
  account: string;
  time: string;
  blockNumber: string;
};

function mapEventName(eventName: string): string {
  switch (eventName) {
    case "OpenLong":
      return "Open Long";
    case "OpenShort":
      return "Open Short";
    case "CloseLong":
      return "Close Long";
    case "CloseShort":
      return "Close Short";
    default:
      return eventName;
  }
}

// Helper function to map events to RowType
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
      time: event.timestamp,
      blockNumber: event.blockNumber.toString(),
    }))
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber));
};

export function useTransactionData({ address }: Hyperdrive): {
  data: RowType[];
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

  console.log("longs", longs);

  const combinedEvents =
    longsStatus === "success" && shortsStatus === "success"
      ? [...(longs ?? []), ...(shorts ?? [])]
      : [];
  const mappedEvents = mapEventsToRowType(combinedEvents);
  const convertedDates = mappedEvents.map((event) => ({
    ...event,
    time: new Date(Number(event.time) * 1000).toLocaleDateString(),
  }));

  return {
    status: longsStatus ?? shortsStatus,
    data: convertedDates,
  };
}
