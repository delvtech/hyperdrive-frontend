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
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
import { ALL_MARKETS_ROUTE, MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

function formatMobileColumnData(row: MarketTableRowData) {
  return [
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
}

const columnHelper = createColumnHelper<MarketTableRowData>();
function getMobileColumns() {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatMobileColumnData(row.original);
        return (
          <div className="flex flex-col items-start gap-2 text-neutral-content">
            {data.map((column) => (
              <p key={column.name}>{column.name}</p>
            ))}
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatMobileColumnData(row.original);
        return (
          <div className="flex flex-col items-start gap-2">
            {data.map((column) => (
              <p key={column.name}>{column.value}</p>
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
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { lpApy } = useLpApy(hyperdrive);
  return <span>{lpApy?.toFixed(2)}%</span>;
}

function YieldSourceApy(): ReactElement {
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });
  return (
    <span className="flex items-center gap-1.5">
      {vaultRate?.formatted || 0}% APY
    </span>
  );
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
