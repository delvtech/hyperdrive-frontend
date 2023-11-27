import { ClosedLong } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useAccount } from "wagmi";

interface ClosedLongsTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<ClosedLong>();

function getColumns(hyperdrive: Hyperdrive) {
  return [
    columnHelper.display({
      header: `Matures on`,
      cell: ({ row }) => {
        const maturity = new Date(Number(row.original.maturity * 1000n));
        return <span>{maturity.toLocaleDateString()}</span>;
      },
    }),
    columnHelper.display({
      id: "size",
      header: `Size (hy${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <span>
            {formatBalance({
              balance: row.original.bondAmount,
              decimals: hyperdrive.baseToken.decimals,
              places: 2,
            })}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "baseReceived",
      header: `Amount received (${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return <BaseAmountReceivedCell hyperdrive={hyperdrive} row={row} />;
      },
    }),
    columnHelper.accessor("closedTimestamp", {
      header: `Closed on`,
      cell: ({ row }) => {
        return new Date(
          Number(row.original.closedTimestamp * 1000n),
        ).toLocaleDateString();
      },
    }),
  ];
}
export function ClosedLongsTable({
  hyperdrive,
}: ClosedLongsTableProps): ReactElement {
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedLongs, isLoading } = useQuery({
    queryKey: makeQueryKey("closedLongPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getClosedLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive),
    data: [...(closedLongs || [])].reverse(), // show most recently closed first, TODO: refactor to interactive column sorting
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="sticky top-0 bg-base-100" key={header.id}>
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
          {isLoading ? (
            <TableSkeleton numColumns={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-24 items-center italic">
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
            })
          )}
        </tbody>
      </table>
      {!closedLongs?.length ? <NonIdealState /> : null}
    </div>
  );
}

function BaseAmountReceivedCell({
  row,
  hyperdrive,
}: {
  row: Row<ClosedLong>;
  hyperdrive: Hyperdrive;
}) {
  const currentValueLabel = formatBalance({
    balance: row.original.baseAmount,
    decimals: hyperdrive.baseToken.decimals,
    places: 4,
  });

  return (
    <div className="flex flex-col items-center gap-1 lg:flex-row">
      <span className="font-bold">{currentValueLabel?.toString()}</span>
    </div>
  );
}
