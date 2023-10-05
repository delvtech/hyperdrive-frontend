import { ClosedShort } from "@hyperdrive/sdk";
import { QueryStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useClosedShorts } from "src/ui/hyperdrive/shorts/hooks/useClosedShorts";
import { Address } from "viem";

interface UseClosedShortsRowsOptions {
  account: Address | undefined;
  hyperdrive: Hyperdrive | undefined;
}

export function useClosedShortRows({
  account,
  hyperdrive,
}: UseClosedShortsRowsOptions): {
  closedShortRows: Row[] | undefined;
  closedShortRowsStatus: QueryStatus;
} {
  const { closedShorts = [], closedShortsStatus: closedShortRowsStatus } =
    useClosedShorts({
      account,
      hyperdriveAddress: hyperdrive?.address,
    });

  const closedShortRows = hyperdrive
    ? closedShorts.map((short) =>
        createClosedShortRow({
          hyperdrive,
          short,
        }),
      )
    : undefined;

  return {
    closedShortRows,
    closedShortRowsStatus,
  };
}

function createClosedShortRow({
  short,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  short: ClosedShort;
}): Row {
  const {
    baseToken: { decimals: baseDecimals, symbol: baseSymbol },
  } = hyperdrive;

  return {
    cells: [
      <span key="type" className="font-semibold uppercase italic text-accent">
        Short
      </span>,
      <span key="size" className="italic">
        {formatBalance({
          balance: short.bondAmount,
          decimals: baseDecimals,
          places: 4,
        })}
      </span>,
      <span key="value" className="inline-flex items-center gap-1 italic">
        {`${formatBalance({
          balance: short.baseAmountReceived,
          decimals: baseDecimals,
          places: 2,
        })} ${baseSymbol}`}
      </span>,
      <span key="maturity" className="italic">
        {new Date(Number(short.maturity * 1000n)).toLocaleDateString()}
      </span>,
      <span key="closed-on" className="italic">
        {new Date(Number(short.closedTimestamp * 1000n)).toLocaleDateString()}
      </span>,
    ],
  };
}
