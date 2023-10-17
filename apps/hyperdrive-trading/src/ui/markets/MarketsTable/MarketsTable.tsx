import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import uniqBy from "lodash.uniqby";
import { ReactElement, useState } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/MarketsTable/useMarketRowData";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { usePublicClient } from "wagmi";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

const columnHelper = createColumnHelper<MarketTableRowData>();

function columns() {
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
  ];
}

export function MarketsTable(): ReactElement {
  const { appConfig: config } = useAppConfig();
  const publicClient = usePublicClient();

  const allProtocols = config?.hyperdrives.map(
    (market) => config?.yieldSources[market.yieldSource],
  );
  const protocols = uniqBy(allProtocols, (protocol) => protocol.name);
  const allTermLengths = config?.hyperdrives.map(
    (market) => market.termLengthMS,
  );
  const termLengths = uniqBy(allTermLengths, (termLength) => termLength);

  const [protocolFilter, setSelectedProtocolFilter] =
    useState<string>(ALL_PROTOCOLS_KEY);
  const [termLengthFilter, setSelectedTermLengthFilter] =
    useState<number>(ALL_TERM_LENGTHS_KEY);

  // TODO: no loading state for now
  const { data: marketsRowData = [], status: marketRowDataStatus } =
    useMarketRowData(config?.hyperdrives);
  const tableInstance = useReactTable({
    columns: columns(),
    data: marketsRowData || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
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
                  console.log("handle go to market");
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

function createMarketRow({
  market,
  yieldSource,
  liquidity,
}: MarketTableRowData): Row {
  return {
    href: `/trade/${market.address}`,
    cells: [
      <span key="name" className="font-bold">
        <p>{market.name}</p>
        <YieldSourceLabel yieldSource={yieldSource} />
      </span>,
      <p key="term" className="font-semibold">
        {convertMillisecondsToDays(market.termLengthMS)} days
      </p>,

      <span
        key="liquidity"
        className="flex flex-row items-center justify-start font-semibold"
      >
        <img className="mr-1 h-4" src={market.baseToken.iconUrl} />
        {formatBalance({
          balance: liquidity,
          decimals: market.baseToken.decimals,
          places: 0,
        })}
      </span>,
      <span key="apy" className="font-semibold">
        1.25%
      </span>,
    ],
  };
}
