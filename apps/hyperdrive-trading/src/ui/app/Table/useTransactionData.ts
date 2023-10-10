import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
type TransactionData = {
  assetId: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  eventName: string;
  timestamp: bigint;
  trader: string;
};

type RowType = {
  type: string;
  value: string;
  account: string;
  timestamp: bigint;
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
const mapEventsToRowType = (events: TransactionData[]): RowType[] => {
  return events.map((event) => ({
    type: mapEventName(event.eventName),
    value: dnum.format(
      [
        event.eventName === "OpenShort" ? event.bondAmount : event.baseAmount,
        18,
      ],
      { digits: 2 },
    ),
    account: event.trader,
    timestamp: event.timestamp,
  }));
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

  const combinedEvents =
    longsStatus === "success" && shortsStatus === "success"
      ? [...longs, ...shorts]
      : [];
  const mappedEvents = mapEventsToRowType(combinedEvents);

  console.log(mappedEvents, "nonsorted mapped events");
  console.log(
    mappedEvents.sort((a, b) => {
      return Number(b.timestamp) - Number(a.timestamp);
    }),
    "sorted mapped events",
  );
  return {
    status: longsStatus ?? shortsStatus,
    data: mappedEvents,
  };
}
