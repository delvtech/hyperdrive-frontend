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
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

const columnHelper = createColumnHelper<MarketTableRowData>();

function getColumns() {
  return [
    columnHelper.accessor("market.name", {
      header: "Name",
      cell: ({ getValue, row }) => {
        const marketName = getValue();
        return (
          <span key="name" className="font-bold">
            <p>{marketName}</p>
            <YieldSourceLabel yieldSource={row.original.yieldSource} />
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
    columnHelper.accessor("market.termLengthMS", {
      header: "Term",
      cell: ({ getValue }) => {
        const termLength = getValue();
        return <p key="term">{convertMillisecondsToDays(termLength)} days</p>;
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
    <div className="flex min-h-[50vh] min-w-[72rem] flex-col items-center overflow-y-scroll">
      <h3 className="w-full font-lato text-h6">Available Markets</h3>
      <table className="daisy-table-zebra daisy-table daisy-table-lg border">
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
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center"
                onClick={() => {
                  navigate(`/market/${row.original.market}`);
                }}
              >
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
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
