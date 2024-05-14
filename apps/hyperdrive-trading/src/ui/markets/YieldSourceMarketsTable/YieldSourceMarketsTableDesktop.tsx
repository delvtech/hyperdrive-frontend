import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AppConfig, Protocol, findBaseToken } from "@hyperdrive/appconfig";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import LoadingState from "src/ui/base/components/LoadingState";
import { TextWithTooltip } from "src/ui/base/components/Tooltip/TextWithTooltip";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { LpApyCell } from "src/ui/markets/AllMarketsTable/LpApyCell";
import {
  YieldSourceMarketsTableRowData,
  useRowData,
} from "src/ui/markets/YieldSourceMarketsTable/useRowData";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

const columnHelper = createColumnHelper<YieldSourceMarketsTableRowData>();

export function YieldSourceMarketsTableDesktop({
  protocol,
}: {
  protocol: Protocol;
}): ReactElement {
  const navigate = useNavigate();
  const { data: rowData, status } = useRowData(protocol);
  const appConfig = useAppConfig();

  const tableInstance = useReactTable({
    columns: getColumns(appConfig),
    data: rowData || [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (status === "loading") {
    return <LoadingState />;
  }

  return (
    <table className="daisy-table daisy-table-zebra daisy-table-lg mt-8">
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
              className="daisy-hover h-20 cursor-pointer border-b-0 text-gray-50"
              onClick={() => {
                navigate({
                  params: { address: row.original.market.address },
                  resetScroll: true,
                  search: {
                    openOrClosed: "Open",
                    position: "Longs",
                  },
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
                        "rounded-l-lg": cell.column.id.includes("term"),
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
      resetScroll
      search={() => ({
        position: "Longs" as const,
        openOrClosed: "Open" as const,
      })}
      params={{ address: hyperdriveAddress }}
      className="daisy-btn-circle daisy-btn-md flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-5" />
    </Link>
  );
}

function getColumns(appConfig: AppConfig) {
  return [
    columnHelper.accessor("market.poolConfig.positionDuration", {
      id: "term",
      header: () => (
        <TextWithTooltip
          label="Term"
          tooltip="The position duration of the market"
        />
      ),
      cell: ({ getValue }) => {
        const termLength = getValue();
        return (
          <div key="term" className="flex items-center">
            {convertMillisecondsToDays(Number(termLength * 1000n))} days
          </div>
        );
      },
    }),
    columnHelper.accessor("fixedApr", {
      id: "fixed-apr",
      header: () => (
        <TextWithTooltip
          label="Fixed APR"
          tooltip={`Fixed rate (Annual Percentage Rate) earned from opening a long, before fees and slippage are applied`}
        />
      ),
      cell: ({ getValue }) => {
        const fixedRate = getValue();
        return (
          <span key="fixed-rate" className="lg:flex lg:w-20 lg:justify-end">
            {formatRate(fixedRate)}%
          </span>
        );
      },
    }),
    columnHelper.accessor("shortApy", {
      id: "short-apy",
      header: () => (
        <TextWithTooltip
          label="Short APY"
          tooltip="Effective rate of return that a Short position accrues, taking into consideration the fixed rate paid to open the Short, the variable rate being earned (on full face value), and the maximum loss on capital."
        />
      ),
      cell: ({ getValue }) => {
        const shortApy = getValue();
        return (
          <span key="short-apy" className="lg:flex lg:w-20 lg:justify-end">
            {formatRate(shortApy)}%
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
        const baseToken = findBaseToken({
          baseTokenAddress: row.original.market.baseToken,
          tokens: appConfig.tokens,
        });
        return (
          <span
            key="liquidity"
            className="flex flex-row items-center justify-start"
          >
            {formatCompact({
              value: liquidity,
              decimals: baseToken.decimals,
            })}{" "}
            {baseToken.symbol}
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
