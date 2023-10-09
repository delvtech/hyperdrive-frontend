import { useQuery } from "@tanstack/react-query";
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
};

// Helper function to map events to RowType
const mapEventsToRowType = (events: TransactionData[]): RowType[] => {
  return events.map((event) => ({
    type: event.eventName,
    value: event.baseAmount.toString(),
    account: event.trader,
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

  return {
    status: longsStatus ?? shortsStatus,
    data: mappedEvents,
  };
}
