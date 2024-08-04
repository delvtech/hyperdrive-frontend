import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import type { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TextWithTooltip } from "src/ui/base/components/Tooltip/TextWithTooltip";
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
    data: rowData || EMPTY_ARRAY,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      sorting: [
        {
          // short terms to at the top
          id: "term",
          desc: false,
        },
      ],
    },
    getSortedRowModel: getSortedRowModel(),
  });

  if (status === "loading") {
    return <LoadingState />;
  }

  if (status === "error") {
    return (
      <div className="flex flex-1 justify-center p-20">
        <NonIdealState heading="No pools found" />
      </div>
    );
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
                        "gradient-text ": cell.column.id.includes("fixed-apr"),
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
          <div key="term" className="text-nowrap">
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
            {formatRate(fixedRate)}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "short-rate",
      header: () => (
        <TextWithTooltip
          label="Short APR"
          tooltip="Annualized return on shorts assuming the current variable rate stays the same until maturity."
        />
      ),
      cell: ({ row }) => {
        return (
          <ShortRateCell key="short-apy" hyperdrive={row.original.market} />
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
            className="flex flex-row items-center justify-start text-nowrap"
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
