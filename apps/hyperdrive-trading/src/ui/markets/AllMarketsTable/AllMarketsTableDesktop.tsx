import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import type { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import LoadingState from "src/ui/base/components/LoadingState";
import { TextWithTooltip } from "src/ui/base/components/Tooltip/TextWithTooltip";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { LpApyCell } from "src/ui/markets/AllMarketsTable/LpApyCell";
import { YieldSourceApy } from "src/ui/markets/AllMarketsTable/YieldSourceApy";
import {
  type MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import type { Address } from "viem";

const columnHelper = createColumnHelper<MarketTableRowData>();
function getColumns() {
  return [
    columnHelper.accessor("market.poolConfig.positionDuration", {
      header: () => (
        <TextWithTooltip
          label="Term"
          tooltip="The position duration of the market"
        />
      ),
      cell: ({ getValue, row }) => {
        const termLength = getValue();
        return (
          <div key="term" className="flex items-center ">
            <img
              src={row.original.baseToken.iconUrl}
              className="mr-2 h-10 rounded-full p-1"
            />
            <span>
              {row.original.baseToken.symbol} -{" "}
              {convertMillisecondsToDays(Number(termLength * 1000n))} days
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor("market.name", {
      header: () => (
        <p className="text-sm text-neutral-content">Yield Source</p>
      ),
      cell: ({ row }) => {
        return (
          <span key="name" className="flex items-center">
            <img
              src={row.original.yieldSourceProtocol.iconUrl}
              className="mr-2 h-10 rounded-full p-1"
            />
            <div className="flex-col">
              <p className="-mb-1">{row.original.yieldSourceShortName}</p>
              <p className="text-neutral-content/70 ">
                {row.original.yieldSourceProtocol.name}
              </p>
            </div>
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "yield-source-apy",
      header: () => {
        return (
          <TextWithTooltip
            label="Variable Rate"
            tooltip={`The yield source's variable rate (Annual Percentage Yield)`}
          />
        );
      },
      cell: ({ row }) => {
        return (
          <YieldSourceApy
            key="yield-source-apy"
            hyperdriveAddress={row.original.market.address}
          />
        );
      },
    }),
    columnHelper.accessor("longAPR", {
      id: "fixed-apr",
      header: () => (
        <TextWithTooltip
          label="Fixed Rate"
          tooltip={`Fixed rate (Annual Percentage Rate) earned from opening a long, before fees and slippage are applied`}
        />
      ),
      cell: ({ getValue }) => {
        const fixedRate = getValue();
        return (
          <span
            key="fixed-rate"
            className="font-bold lg:flex lg:w-20 lg:justify-end"
          >
            {fixedRate}%
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "lp-apy",
      header: () => (
        <TextWithTooltip
          label="LP APY"
          tooltip={`The LP's yearly projected return, derived from the past 7 days of trading activity.`}
        />
      ),
      cell: ({ row }) => {
        return (
          <LpApyCell
            key="lp-apy"
            hyperdriveAddress={row.original.market.address}
          />
        );
      },
    }),
    columnHelper.accessor("liquidity", {
      id: "liquidity",
      header: () => (
        <TextWithTooltip
          label="Liquidity"
          tooltip="The amount of capital that has been deployed by LPs to the pool"
        />
      ),
      cell: ({ getValue, row }) => {
        const liquidity = getValue();
        return (
          <span
            key="liquidity"
            className="flex flex-row items-center justify-start"
          >
            <img className="mr-1 h-4" src={row.original.baseToken.iconUrl} />
            {formatCompact({
              value: liquidity,
              decimals: row.original.baseToken.decimals,
            })}{" "}
            {row.original.baseToken.symbol}
          </span>
        );
      },
    }),
    columnHelper.display({
      header: "",
      id: "go-to-market",
      cell: ({ row }) => (
        <GoToMarketButton
          key="go-to-market"
          hyperdriveAddress={row.original.market.address}
        />
      ),
    }),
  ];
}

export function AllMarketsTableDesktop(): ReactElement {
  const navigate = useNavigate();
  const { data: marketsRowData, status } = useMarketRowData();
  const memoizedColumns = getColumns();
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (status === "loading") {
    return <LoadingState />;
  }
  return (
    <table className="daisy-table daisy-table-zebra daisy-table-lg w-[1200px]">
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="font-normal text-neutral-content" key={header.id}>
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
                    // In order to round the edges of this row, we need to round the edges of the first and last <td> because border-radius doesn't work on <tr>
                    <td
                      className={classNames({
                        "rounded-l-lg": cell.column.id.includes("termLengthMS"),
                        "rounded-r-lg": cell.column.id.includes("go-to-market"),
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
      className="daisy-btn-circle daisy-btn-md flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-5" />
    </Link>
  );
}
