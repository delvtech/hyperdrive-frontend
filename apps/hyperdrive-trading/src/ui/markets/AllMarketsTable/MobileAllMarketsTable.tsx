import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { LpApyCell, YieldSourceApy } from "./AllMarketsTable";
const columnHelper = createColumnHelper<MarketTableRowData>();
const mobileColumnGetters = (row: MarketTableRowData) => [
  {
    name: "Term",
    value: `${convertMillisecondsToDays(row.market.termLengthMS)} days`,
  },
  { name: "Yield Source", value: row.yieldSource.name },
  { name: "Yield Source APY", value: <YieldSourceApy /> },
  { name: "Fixed Rate", value: row.longAPR },
  { name: "LP APY", value: <LpApyCell hyperdrive={row.market} /> },
  {
    name: "Liquidity",
    value: (
      <span
        key="liquidity"
        className="flex flex-row items-center justify-start"
      >
        <img className="mr-1 h-4" src={row.market.baseToken.iconUrl} />
        {formatBalance({
          balance: row.liquidity,
          decimals: row.market.baseToken.decimals,
          places: 0,
        })}
      </span>
    ),
  },
];
function getColumns() {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const rowData = row.original;
        const data = mobileColumnGetters(rowData);
        return (
          <ul className="flex flex-col items-start justify-between">
            {data.map((column) => (
              <li key={column.name} className="text-left">
                {column.name}
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
        const data = mobileColumnGetters(rowData);
        return (
          <ul className="flex flex-col items-start justify-between">
            {data.map((column) => (
              <li key={column.name} className="text-left">
                {column.value}
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
    data: marketsRowData?.concat(marketsRowData) ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full flex-col items-center overflow-y-scroll">
      <h3 className="w-full font-lato text-h6">Available Markets</h3>
      <div className="daisy-card-bordered daisy-card flex w-full">
        <table className="daisy-table-zebra daisy-table daisy-table-lg">
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
