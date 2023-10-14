/* eslint-disable react/jsx-key */
import { ClosedShort } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useAccount } from "wagmi";

interface ClosedShortsTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<ClosedShort>();
const columns = (hyperdrive: Hyperdrive) => [
  columnHelper.display({
    header: `ID`,
    cell: ({ row }) => <span>{Number(row.original.maturity)}</span>,
  }),
  columnHelper.display({
    header: `Matures on`,
    cell: ({ row }) => {
      const maturity = new Date(Number(row.original.maturity * 1000n));
      return <span>{maturity.toLocaleDateString()}</span>;
    },
  }),
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return formatBalance({
        balance: bondAmountValue,
        decimals: hyperdrive.baseToken.decimals,
      });
    },
  }),
  columnHelper.accessor("baseAmountReceived", {
    header: `Amount received`,
    cell: (baseAmountReceived) => {
      const amountReceived = baseAmountReceived.getValue();
      return formatBalance({
        balance: amountReceived,
        decimals: hyperdrive.baseToken.decimals,
        places: 4,
      });
    },
  }),
  columnHelper.accessor("closedTimestamp", {
    header: `Closed`,
    cell: (closedTimestamp) => {
      return (
        <span>
          {new Date(
            Number(closedTimestamp.getValue() * 1000n),
          ).toLocaleDateString()}
        </span>
      );
    },
  }),
];

export function ClosedShortsTable({
  hyperdrive,
}: ClosedShortsTableProps): ReactElement {
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedShorts } = useQuery({
    queryKey: makeQueryKey("closedShortPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getClosedShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: closedShorts || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="text-lg font-thin" key={header.id}>
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
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
              >
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
