import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
const columnHelper = createColumnHelper<MarketTableRowData>();

function getColumns() {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <ul className="flex flex-col items-start justify-between">
            {Object.keys(rowData).map((key) => (
              <li key={key} className="text-left">
                {key}
              </li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <ul className="flex flex-col items-start justify-between">
            {Object.entries(rowData).map(([key, value]) => (
              <li key={key} className="text-left">
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : value.toString()}
              </li>
            ))}
          </ul>
        );
      },
    }),
  ];
}

export default function MobileAllMarketsTable(): JSX.Element {
  const navigate = useNavigate();
  const { data: marketsRowData } = useMarketRowData();
  const memoizedColumns = useMemo(() => getColumns(), []);
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full flex-col items-center overflow-y-scroll">
      <h3 className="w-full font-lato text-h6">Available Markets</h3>
      <div className="daisy-card-bordered daisy-card flex w-full p-6">
        <table className="daisy-table-zebra daisy-table daisy-table-lg">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
                  className="daisy-hover h-16 cursor-pointer items-center hover:border-b-0"
                  onClick={() => {
                    navigate(`/market/${row.original.market}`);
                  }}
                >
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        // In order to round the edges of this row, we need to round the edges of the first and last <td> because border-radius doesn't work on <tr>
                        <td
                          className={classNames({
                            "rounded-l-lg":
                              cell.column.id.includes("termLengthMS"),
                            "rounded-r-lg":
                              cell.column.id.includes("go-to-market"),
                          })}
                          key={cell.id}
                        >
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
    </div>
  );
}
