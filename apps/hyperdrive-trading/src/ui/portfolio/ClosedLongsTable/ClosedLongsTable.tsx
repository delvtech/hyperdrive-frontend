import { ClosedLong } from "@hyperdrive/sdk";
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
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useAccount } from "wagmi";

interface ClosedLongsTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<ClosedLong>();
function formatClosedLongMobileColumnData(
  closedLong: ClosedLong,
  hyperdrive: Hyperdrive,
) {
  return [
    {
      name: "Matures on",
      value: (
        <span>
          {new Date(Number(closedLong.maturity * 1000n)).toLocaleDateString()}
        </span>
      ),
    },
    {
      name: `Size (hy${hyperdrive.baseToken.symbol})`,
      value: (
        <span>
          {formatBalance({
            balance: closedLong.bondAmount,
            decimals: hyperdrive.baseToken.decimals,
            places: 2,
          })}
        </span>
      ),
    },
    {
      name: `Amount received (${hyperdrive.baseToken.symbol})`,
      value: (
        <BaseAmountReceivedCell
          hyperdrive={hyperdrive}
          closedLong={closedLong}
        />
      ),
    },
    {
      name: "Closed on",
      value: (
        <span>
          {new Date(
            Number(closedLong.closedTimestamp * 1000n),
          ).toLocaleDateString()}
        </span>
      ),
    },
  ];
}

function getMobileColumns(hyperdrive: Hyperdrive) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedLongMobileColumnData(row.original, hyperdrive);
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatClosedLongMobileColumnData(row.original, hyperdrive);
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li className="flex flex-row" key={column.name}>
                {column.value}
              </li>
            ))}
          </ul>
        );
      },
    }),
  ];
}

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
        return (
          <BaseAmountReceivedCell
            hyperdrive={hyperdrive}
            closedLong={row.original}
          />
        );
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
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: closedLongs, isLoading } = useQuery({
    queryKey: makeQueryKey("closedLongPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getClosedLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive)
      : getColumns(hyperdrive),
    data: [...(closedLongs || [])].reverse(), // show most recently closed first, TODO: refactor to interactive column sorting
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll md:w-[750px]">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky font-normal text-gray-400"
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
          {isLoading ? (
            <TableSkeleton numColumns={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-24 items-center">
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="align-top text-lg" key={cell.id}>
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
  closedLong,
  hyperdrive,
}: {
  closedLong: ClosedLong;
  hyperdrive: Hyperdrive;
}) {
  const currentValueLabel = formatBalance({
    balance: closedLong.baseAmount,
    decimals: hyperdrive.baseToken.decimals,
    places: 4,
  });

  return (
    <div className="flex flex-col items-center gap-1 lg:flex-row">
      <span className="font-bold">{currentValueLabel?.toString()}</span>
    </div>
  );
}
