/* eslint-disable react/jsx-key */
import { OpenShort } from "@hyperdrive/sdk";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useAccount } from "wagmi";
interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
  shorts: OpenShort[];
}

const columnHelper = createColumnHelper<OpenShort>();
const columns = (hyperdrive: Hyperdrive) => [
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return dnum.format([bondAmountValue, hyperdrive.baseToken.decimals], {
        digits: 2,
      });
    },
  }),
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount Paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return dnum.format([amountPaid, hyperdrive.baseToken.decimals], {
        digits: 4,
      });
    },
  }),
  columnHelper.accessor("hyperdriveAddress", {
    header: "Current Value",
    cell: ({ row }) => {
      return <CurrentValueCell row={row} />;
    },
  }),
  columnHelper.accessor("openedTimestamp", {
    header: "Current Price",
    cell: ({ row }) => {
      return <CurrentPriceCell row={row} hyperdrive={hyperdrive} />;
    },
  }),
];

function CurrentValueCell({ row }: { row: Row<OpenShort> }) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress: row.original.hyperdriveAddress,
    maturityTime: row.original.maturity,
    shortAmountIn: row.original.bondAmount,
    minBaseAmountOut: parseUnits("0", 18),
    destination: account,
  });
  const value =
    baseAmountOut &&
    dnum.format([row.original.bondAmount - baseAmountOut, 18], {
      digits: 2,
    });

  return <span>{value?.toString()}</span>;
}

function CurrentPriceCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  return (
    <span>
      {longPrice &&
        `${formatBalance({
          balance: longPrice?.price,
          decimals: hyperdrive.baseToken.decimals,
          places: 3,
        })} ${hyperdrive.baseToken.symbol}`}
    </span>
  );
}

export function OpenShortsTable({
  hyperdrive,
  shorts,
}: OpenOrdersTableProps): ReactElement {
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: shorts,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-lg font-thin text-neutral-content"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              className="h-16 grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
