import { useQueries } from "@tanstack/react-query";
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
export function useTransactionData(hyperdrive: Hyperdrive): RowType[] {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const events = useQueries({
    queries: [
      {
        queryKey: ["longEvent", readHyperdrive?.getLongEvents()],
        queryFn: async () => readHyperdrive?.getLongEvents(),
      },
      {
        queryKey: ["shortEvents", readHyperdrive?.getShortEvents()],
        queryFn: async () => readHyperdrive?.getShortEvents(),
      },
    ],
  });

  const combinedEvents = events.flatMap<TransactionData>(
    ({ data: eventData }) => eventData,
  );
  const mappedEvents = combinedEvents.map((event) => {
    return {
      type: event.eventName,
      value: event.baseAmount.toString(),
      account: event.trader,
    };
  });

  return mappedEvents;
}
