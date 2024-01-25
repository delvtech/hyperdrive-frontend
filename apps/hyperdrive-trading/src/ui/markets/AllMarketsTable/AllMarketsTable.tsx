import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
import { Route } from "src/routes/market.$address";
import { TextWithTooltip } from "src/ui/base/components/Tooltip/TextWithTooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/AllMarketsTable/useMarketRowData";
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
          <ul className="flex flex-col items-start gap-2">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatMobileColumnData(row.original);
        return (
          <ul className="flex flex-col items-start gap-2">
            {data.map((column) => (
              <li key={column.name}>{column.value}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: () => <ChevronRightIcon className="h-4" />,
    }),
  ];
}

function getColumns() {
  return [
    columnHelper.accessor("market.termLengthMS", {
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
              src={row.original.market.baseToken.iconUrl}
              className="mr-2 h-10 rounded-full p-1"
            />
            <span>
              {row.original.market.baseToken.symbol} -{" "}
              {convertMillisecondsToDays(termLength)} days
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
              <p className="-mb-1">{row.original.yieldSource.shortName}</p>
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
      cell: () => {
        return <YieldSourceApy key="yield-source-apy" />;
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
        return <LpApyCell key="lp-apy" hyperdrive={row.original.market} />;
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
    columnHelper.display({
      header: "",
      id: "go-to-market",
      cell: ({ row }) => (
        <GoToMarketButton market={row.original.market} key={"go-to-market"} />
      ),
    }),
  ];
}

export function AllMarketsTable(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const navigate = useNavigate();
  const { data: marketsRowData } = useMarketRowData();
  const memoizedColumns = isTailwindSmallScreen
    ? getMobileColumns()
    : getColumns();
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full max-w-6xl flex-col items-center overflow-y-scroll p-2 md:p-4 md:px-0">
      <h3 className="mb-5 w-full pl-1 text-h5 text-neutral-content">
        Available Markets
      </h3>
      <div className="daisy-card daisy-card-bordered flex w-full md:p-6">
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
                  className="daisy-hover h-16 cursor-pointer items-center border-b-0 text-gray-50"
                  onClick={() => {
                    navigate({
                      params: { address: row.original.market.address },
                      search: {
                        openOrClosed: "Open",
                        position: "Longs",
                      },
                      to: Route.fullPath,
                    });
                  }}
                >
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        // In order to round the edges of this row, we need to round the edges of the first and last <td> because border-radius doesn't work on <tr>
                        <td
                          className={classNames({
                            "rounded-l-lg":
                              cell.column.id.includes("termLengthMS"),
                            "rounded-r-lg":
                              cell.column.id.includes("go-to-market"),
                            "text-sm": isTailwindSmallScreen,
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
      </div>
    </div>
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
      from={Route.fullPath}
      search={() => ({ position: "Longs", openOrClosed: "Open" })}
      params={{ address: market.address }}
      className="daisy-btn-circle daisy-btn-md flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      <ArrowRightIcon className="h-5" />
    </Link>
  );
}
