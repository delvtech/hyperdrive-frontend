import { ClosedLong } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useClosedLongs } from "src/ui/hyperdrive/longs/hooks/useClosedLongs";
import { Address, formatUnits } from "viem";

interface UseClosedLongRowsOptions {
  account: Address | undefined;
  hyperdrive: Hyperdrive;
}

export function useClosedLongRows({
  account,
  hyperdrive,
}: UseClosedLongRowsOptions): {
  closedLongRows: Row[] | undefined;
  closedLongRowsStatus: "error" | "success" | "loading";
} {
  const { closedLongs = [], closedLongsStatus: closedLongRowsStatus } =
    useClosedLongs({
      account,
      hyperdriveAddress: hyperdrive?.address,
    });

  const closedLongRows = hyperdrive
    ? closedLongs.map((long) =>
        createClosedLongRow({
          hyperdrive,
          long,
        }),
      )
    : undefined;

  return { closedLongRows, closedLongRowsStatus };
}

function createClosedLongRow({
  long,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  long: ClosedLong;
}): Row {
  const {
    baseToken: { decimals: baseDecimals, symbol: baseSymbol },
  } = hyperdrive;

  return {
    cells: [
      <span
        key="type"
        className="font-semibold uppercase italic text-secondary"
      >
        Long
      </span>,
      <span key="size" className="italic">
        {formatBalance(formatUnits(long.bondAmount, baseDecimals), 4)}
      </span>,
      <span key="value" className="inline-flex items-center gap-1 italic">
        {`${formatBalance(
          formatUnits(long.baseAmount, baseDecimals),
          2,
        )} ${baseSymbol}`}
      </span>,
      <span key="maturity" className="italic">
        {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
      </span>,
      <span key="closed-on" className="italic">
        {new Date(Number(long.closedTimestamp * 1000n)).toLocaleDateString()}
      </span>,
    ],
  };
}
