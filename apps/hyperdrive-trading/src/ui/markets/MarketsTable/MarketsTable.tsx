import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MARKETS_MODAL_KEY } from "src/ui/markets/MarketSelect/AllMarketsBreadcrumb";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/MarketsTable/useMarketRowData";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";

const columnHelper = createColumnHelper<MarketTableRowData>();

function getColumns() {
  return [
    columnHelper.accessor("market.name", {
      header: "Name",
      cell: ({ getValue, row }) => {
        const marketName = getValue();
        return (
          <span key="name" className="font-bold">
            <p>{marketName}</p>
            <YieldSourceLabel yieldSource={row.original.yieldSource} />
          </span>
        );
      },
    }),
    columnHelper.accessor("market.termLengthMS", {
      header: "Term",
      cell: ({ getValue }) => {
        const termLength = getValue();
        return (
          <p key="term" className="font-semibold">
            {convertMillisecondsToDays(termLength)} days
          </p>
        );
      },
    }),
    columnHelper.accessor("liquidity", {
      header: "Liquidity",
      cell: ({ getValue, row }) => {
        const liquidity = getValue();
        return (
          <span
            key="liquidity"
            className="flex flex-row items-center justify-start font-semibold"
          >
            <img
              className="mr-1 h-4"
              src={row.original.market.baseToken.iconUrl}
            />
            {formatBalance({
              balance: liquidity,
              decimals: row.original.market.baseToken.decimals,
              places: 0,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("longAPR", {
      header: "Fixed Rate",
      cell: ({ getValue }) => {
        const fixedRate = getValue();
        return <span key="fixed-rate">{fixedRate}%</span>;
      },
    }),
  ];
}

export function MarketsTable({
  markets,
}: {
  markets: Hyperdrive[];
}): ReactElement {
  // const { appConfig: config } = useAppConfig();
  const navigate = useNavigate();
  // // TODO: no loading state for now
  const { data: marketsRowData } = useMarketRowData(markets);
  const memoizedColumns = useMemo(() => getColumns(), []);
  // console.log("infinite loop?", marketsRowData);
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex max-h-96 flex-col items-center overflow-y-scroll">
      <h3 className="mb-4 font-lato">Markets</h3>
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
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center"
                onClick={() => {
                  navigate(`/trade/${row.original.market}`);
                  (window as any)[MARKETS_MODAL_KEY].close();
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
  );
}
