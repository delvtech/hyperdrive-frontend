import { Hyperdrive } from "src/appconfig/types";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useTransactionData(hyperdrive: Hyperdrive): any[] {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  // const events = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["openLongEvents", readHyperdrive?.getOpenLongEvents()],
  //       queryFn: async () => readHyperdrive?.getOpenLongEvents(),
  //     },
  //     {
  //       queryKey: ["openShortEvents", readHyperdrive?.getOpenShortEvents()],
  //       queryFn: async () => readHyperdrive?.getOpenShortEvents(),
  //     },
  //   ],
  // });

  return [
    {
      type: "Open Long",
      value: "1000",
      account: "0x1234",
    },
    {
      type: "Open Short",
      value: "1000",
      account: "0x1234",
    },
  ];
}
