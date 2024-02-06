import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
import { TextWithTooltip } from "src/ui/base/components/Tooltip/TextWithTooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { YieldSourceApy } from "src/ui/markets/AllMarketsTable/YieldSourceApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { ALL_MARKETS_ROUTE, MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

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
        <TextWithTooltip
          label="Yield Source"
          tooltip="The underlying yield bearing asset"
        />
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
            label="Yield Source APY"
            tooltip={`Yield Source APY (Annual Percentage Yield) reflects the annualized rate you could earn from the yield source's variable returns.`}
          />
        );
      },
      cell: ({ row }) => {
        return (
          <YieldSourceApy
            key="yield-source-apy"
            yieldSourceAddress={row.original.market.sharesToken}
          />
        );
      },
    }),
    columnHelper.accessor("longAPR", {
      id: "fixed-apr",
      header: () => (
        <TextWithTooltip
          label="Fixed Rate"
          tooltip={`Fixed rate earned from opening longs, before fees and slippage are applied`}
        />
      ),
      cell: ({ getValue }) => {
        const fixedRate = getValue();
        return <span key="fixed-rate">{fixedRate}%</span>;
      },
    }),
    columnHelper.display({
      id: "lp-apy",
      header: () => (
        <TextWithTooltip
          label="LP APY"
          tooltip={`This indicates the LP's yearly return projection, derived from the past 12 hours' performance. It presumes the same return rate persists throughout the year.`}
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
            {formatBalance({
              balance: liquidity,
              decimals: row.original.baseToken.decimals,
              places: 0,
            })}
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
  const { data: marketsRowData } = useMarketRowData();
  const memoizedColumns = getColumns();
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="daisy-table daisy-table-zebra daisy-table-lg">
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="font-normal text-gray-400" key={header.id}>
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
      search={() => ({ position: "Longs", openOrClosed: "Open" })}
      params={{ address: hyperdriveAddress }}
      className="daisy-btn-circle daisy-btn-md flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-5" />
    </Link>
  );
}
