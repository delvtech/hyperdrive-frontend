import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/MarketsTable/useMarketRowData";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

const columnHelper = createColumnHelper<MarketTableRowData>();

function getColumns() {
  return [
    columnHelper.accessor("market.termLengthMS", {
      header: "Term",
      cell: ({ getValue, row }) => {
        const termLength = getValue();
        return (
          <div key="term" className="flex items-center ">
            <img
              src={row.original.market.baseToken.iconUrl}
              className="mr-2 h-8 rounded-full border p-1"
            />
            <span>
              {row.original.market.baseToken.symbol} -{" "}
              {convertMillisecondsToDays(termLength)} days
            </span>
          </div>
        );
        // return <p key="term">{convertMillisecondsToDays(termLength)} days</p>;
      },
    }),
    columnHelper.accessor("market.name", {
      header: "Yield Source",
      cell: ({ getValue, row }) => {
        const marketName = getValue();
        return (
          <span key="name" className="flex items-center">
            <img
              src={row.original.yieldSource.iconUrl}
              className="mr-2 h-8 rounded-full border p-1"
            />
            <div className="flex-col">
              <p className="mb-[-4px]">{marketName}</p>
              <p className="text-body text-secondary opacity-50">
                {row.original.yieldSource.protocol}
              </p>
            </div>
          </span>
        );
      },
    }),
    columnHelper.display({
      header: "Yield Source APY",
      cell: () => {
        return <YieldSourceApy key="yield-source-apy" />;
      },
    }),
    columnHelper.accessor("longAPR", {
      header: "Fixed Rate",
      cell: ({ getValue }) => {
        const fixedRate = getValue();
        return <span key="fixed-rate">{fixedRate}%</span>;
      },
    }),
    columnHelper.display({
      header: "LP APY",
      cell: ({ row }) => {
        return <LpApyCell key="lp-apy" hyperdrive={row.original.market} />;
      },
    }),
    columnHelper.accessor("liquidity", {
      header: "Liquidity",
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

export function MarketsTable({
  markets,
}: {
  markets: Hyperdrive[];
}): ReactElement {
  const navigate = useNavigate();
  // // TODO: no loading state for now
  const { data: marketsRowData } = useMarketRowData(markets);
  const memoizedColumns = useMemo(() => getColumns(), []);
  const tableInstance = useReactTable({
    columns: memoizedColumns,
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full flex-col items-center overflow-y-scroll rounded-md">
      <h3 className="w-full font-lato text-h6">Available Markets</h3>
      <div className="flex w-full rounded-lg border p-6">
        <table className="daisy-table-zebra daisy-table daisy-table-lg ">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
                  className="daisy-hover h-16 cursor-pointer items-center hover:border-b-0 "
                  onClick={() => {
                    navigate(`/market/${row.original.market}`);
                  }}
                >
                  <>
                    {row.getVisibleCells().map((cell) => {
                      const firstCell = cell.column.id.includes("termLengthMS");
                      const lastCell = cell.column.id.includes("go-to-market");
                      return (
                        <td
                          className={`${firstCell && "rounded-l-lg"} ${
                            lastCell && "rounded-r-lg"
                          }`}
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

function LpApyCell({ hyperdrive }: { hyperdrive: Hyperdrive }): ReactElement {
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

function GoToMarketButton({ market }: { market: Hyperdrive }): ReactElement {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/market/${market}`);
      }}
      className="daisy-btn-sm daisy-btn-circle flex items-center justify-center rounded-full border hover:daisy-btn-primary"
    >
      <ArrowRightIcon className="h-4" />
    </button>
  );
}
