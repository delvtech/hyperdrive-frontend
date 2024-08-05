import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  type AppConfig,
  type Protocol,
  findBaseToken,
} from "@hyperdrive/appconfig";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import LoadingState from "src/ui/base/components/LoadingState";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { LpApyCell } from "src/ui/markets/AllMarketsTable/LpApyCell";
import { ShortRateCell } from "src/ui/markets/YieldSourceMarketsTable/ShortRateCell";
import {
  type YieldSourceMarketsTableRowData,
  useRowData,
} from "src/ui/markets/YieldSourceMarketsTable/useRowData";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import type { Address } from "viem";

const columnHelper = createColumnHelper<YieldSourceMarketsTableRowData>();

const EMPTY_ARRAY: YieldSourceMarketsTableRowData[] = [];

export function YieldSourceMarketsTableMobile({
  protocol,
}: {
  protocol: Protocol;
}): ReactElement {
  const navigate = useNavigate();
  const { data: rowData, status } = useRowData(protocol);
  const appConfig = useAppConfig();

  const tableInstance = useReactTable({
    columns: getMobileColumns(appConfig),
    data: rowData || EMPTY_ARRAY,
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
                    <td key={cell.id} className="py-10 last:w-5 ">
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
      resetScroll
      params={{ address: hyperdriveAddress }}
      className="daisy-btn-circle daisy-btn-xs flex items-center justify-center bg-gray-600 hover:bg-gray-700"
    >
      <ChevronRightIcon className="h-3" />
    </Link>
  );
}

function formatMobileColumnData(
  row: YieldSourceMarketsTableRowData,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    baseTokenAddress: row.market.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    {
      id: "term",
      name: "Term",
      value: (
        <span className="flex flex-row items-center justify-start">
          {convertMillisecondsToDays(
            Number(row.market.poolConfig.positionDuration * 1000n),
          )}{" "}
          days
        </span>
      ),
    },
    { name: "Fixed APR", value: `${formatRate(row.fixedApr)}` },
    {
      name: "Short APR",
      value: <ShortRateCell hyperdrive={row.market} />,
    },
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
          {formatCompact({
            value: row.liquidity,
            decimals: row.market.decimals,
          })}{" "}
          {baseToken.symbol}
        </span>
      ),
    },
  ];
}

function getMobileColumns(appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "ColumnPairs",
      cell: ({ row }) => {
        const data = formatMobileColumnData(row.original, appConfig);
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
