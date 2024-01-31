import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { YieldSourceApy } from "src/ui/markets/AllMarketsTable/YieldSourceApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { ALL_MARKETS_ROUTE, MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

function formatMobileColumnData(row: MarketTableRowData) {
  return [
    {
      name: "Term",
      value: (
        <span className="flex flex-row items-center justify-start">
          <img src={row.market.baseToken.iconUrl} className="mr-2 inline h-4" />
          {row.market.baseToken.symbol} -{" "}
          {convertMillisecondsToDays(row.market.termLengthMS)} days
        </span>
      ),
    },
    {
      name: "Yield Source",
      value: (
        <span className="flex flex-row items-center justify-start">
          <img
            src={row.yieldSourceProtocol.iconUrl}
            className="mr-2 inline h-4"
          />
          {row.yieldSource.shortName}
        </span>
      ),
    },
    {
      name: "Yield Source APY",
      value: <YieldSourceApy hyperdrive={row.market} />,
    },
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
}

const columnHelper = createColumnHelper<MarketTableRowData>();
function getMobileColumns() {
  return [
    columnHelper.display({
      id: "ColumnPairs",
      cell: ({ row }) => {
        const data = formatMobileColumnData(row.original);
        return (
          <div className="flex flex-col gap-2">
            {data.map((column, i) => (
              <div key={i} className="flex w-full justify-between gap-4">
                <p className="text-neutral-content">{column.name}</p>
                <p key={column.name}>{column.value}</p>
              </div>
            ))}
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: ({ row }) => <GoToMarketButton market={row.original.market} />,
    }),
  ];
}

export function AllMarketsTableMobile(): ReactElement {
  const navigate = useNavigate();
  const { data: marketsRowData } = useMarketRowData();
  const memoizedColumns = getMobileColumns();
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="daisy-table daisy-table-zebra daisy-table-lg">
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => {
          return (
            <tr
              key={row.id}
              className="daisy-hover h-16 cursor-pointer border-b-0 text-gray-50"
              onClick={() => {
                navigate({
                  params: { address: row.original.market.address },
                  search: {
                    openOrClosed: "Open",
                    position: "Longs",
                  },
                  from: ALL_MARKETS_ROUTE,
                  to: MARKET_DETAILS_ROUTE,
                });
              }}
            >
              <>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="py-10 last:w-5">
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
  );
}
function LpApyCell({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { lpApy } = useLpApy(hyperdrive);
  return <span>{lpApy?.toFixed(2)}%</span>;
}

function GoToMarketButton({
  market,
}: {
  market: HyperdriveConfig;
}): ReactElement {
  return (
    <Link
      from={MARKET_DETAILS_ROUTE}
      search={{ position: "Longs", openOrClosed: "Open" }}
      params={{ address: market.address }}
      className="daisy-btn-circle daisy-btn-xs flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-3" />
    </Link>
  );
}
