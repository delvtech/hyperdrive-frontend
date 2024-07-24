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
import LoadingState from "src/ui/base/components/LoadingState";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { LpApyCell } from "src/ui/markets/AllMarketsTable/LpApyCell";
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
      name: "Variable Rate",
      value: <YieldSourceApy hyperdriveAddress={row.market.address} />,
    },
    { name: "Fixed Rate", value: `${row.longAPR}% APR` },
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
          {formatCompact({
            value: row.liquidity,
            decimals: row.baseToken.decimals,
          })}{" "}
          {row.baseToken.symbol}
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
              <div
                key={i}
                className="flex w-full justify-between gap-4 text-left md:justify-evenly"
              >
                <p className="text-neutral-content md:w-40">{column.name}</p>
                <p className="md:w-40" key={column.name}>
                  {column.value}
                </p>
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
  const { data: marketsRowData, status } = useMarketRowData();
  const memoizedColumns = getMobileColumns();
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  if (status === "loading") {
    return <LoadingState />;
  }

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

function GoToMarketButton({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  return (
    <Link
      from={MARKET_DETAILS_ROUTE}
      params={{ address: hyperdriveAddress }}
      className="daisy-btn-circle daisy-btn-xs flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-3" />
    </Link>
  );
}
