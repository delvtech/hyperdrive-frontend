import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  LpApyCell,
  YieldSourceApy,
} from "src/ui/markets/AllMarketsTable/AllMarketsTable";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
const columnHelper = createColumnHelper<MarketTableRowData>();
const formatMobileColumnData = (row: MarketTableRowData) => [
  {
    name: "Term",
    value: (
      <span>
        {row.market.baseToken.symbol} -{" "}
        {convertMillisecondsToDays(row.market.termLengthMS)} days
      </span>
    ),
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
        const data = formatMobileColumnData(row.original);
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
        const data = formatMobileColumnData(row.original);
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li key={column.name}>{column.value}</li>
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
    data: marketsRowData ?? [],
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
                  onClick={() => {
                    navigate(`/market/${row.original.market}`);
                  }}
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
    </div>
  );
}
