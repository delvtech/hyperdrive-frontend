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
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { YieldSourceApy } from "src/ui/markets/AllMarketsTable/YieldSourceApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

function formatMobileColumnData(row: MarketTableRowData) {
  return [
    {
      name: "Term",
      value: (
        <span className="flex flex-row items-center justify-start">
          <img src={row.baseToken.iconUrl} className="mr-2 inline h-4" />
          {row.baseToken.symbol} -{" "}
          {convertMillisecondsToDays(
            Number(row.market.poolConfig.positionDuration * 1000n),
          )}{" "}
          days
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
          {row.yieldSourceShortName}
        </span>
      ),
    },
    {
      name: "Yield Source APY",
      value: <YieldSourceApy yieldSourceAddress={row.market.sharesToken} />,
    },
    { name: "Fixed Rate", value: row.longAPR },
    {
      name: "LP APY",
      value: <LpApyCell hyperdriveAddress={row.market.address} />,
    },
    {
      name: "Liquidity",
      value: (
        <span
          key="liquidity"
          className="flex flex-row items-center justify-start"
        >
          <img className="mr-1 h-4" src={row.baseToken.iconUrl} />
          {formatBalance({
            balance: row.liquidity,
            decimals: row.baseToken.decimals,
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
      cell: ({ row }) => (
        <GoToMarketButton hyperdriveAddress={row.original.market.address} />
      ),
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
              // Add this back in when we have a route for the market details
              // onClick={() => {
              //   navigate({
              //     params: { address: row.original.market.address },
              //     search: {
              //       openOrClosed: "Open",
              //       position: "Longs",
              //     },
              //     from: ALL_MARKETS_ROUTE,
              //     to: MARKET_DETAILS_ROUTE,
              //   });
              // }}
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
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const { lpApy } = useLpApy(hyperdriveAddress);
  return <span>{lpApy?.toFixed(2)}%</span>;
}

function GoToMarketButton({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  return (
    <Link
      from={MARKET_DETAILS_ROUTE}
      search={{ position: "Longs", openOrClosed: "Open" }}
      params={{ address: hyperdriveAddress }}
      className="daisy-btn-circle daisy-btn-xs flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-3" />
    </Link>
  );
}
