import { useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Transaction } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";
type TransactionData = {
  assetId?: bigint;
  baseAmount: bigint;
  bondAmount?: bigint;
  eventName: string;
  trader: Address;
  blockNumber: bigint | undefined;
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
    case "AddLiquidity":
      return "Add Liquidity";
    case "RemoveLiquidity":
      return "Remove Liquidity";
    case "RedeemWithdrawalShares":
      return "Redeem Withdrawal Shares";
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
          event.eventName === "OpenShort" || event.eventName === "CloseShort"
            ? event.bondAmount || 0n
            : event.baseAmount || 0n,
          18,
        ],
        { digits: 2 },
      ),
      account: event.trader,
      blockNumber: event.blockNumber,
    }))
    .sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber));
}

export function useTransactionData({ address }: Hyperdrive): {
  data: Transaction[] | undefined;
} {
  const readHyperdrive = useReadHyperdrive(address);
  const { data: blockNumber } = useBlockNumber();

  const queryEnabled = !!readHyperdrive && !!blockNumber;
  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longEvents", { address }),
    queryFn: queryEnabled
      ? async () => {
          return readHyperdrive.getLongEvents();
        }
      : undefined,
    enabled: queryEnabled,
  });

  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("shortEvents", { address }),
    queryFn: queryEnabled
      ? async () => readHyperdrive.getShortEvents()
      : undefined,
    enabled: queryEnabled,
  });
  const { data: lpEvents } = useQuery({
    queryKey: makeQueryKey("lpEvents", { address }),
    queryFn: queryEnabled
      ? async () => readHyperdrive.getLpEvents()
      : undefined,
    enabled: !!readHyperdrive,
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

  return { data: data.length ? mapEventsToRowType(data) : undefined };
}
