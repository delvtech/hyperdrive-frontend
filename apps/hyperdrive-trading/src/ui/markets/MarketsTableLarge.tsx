import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import {
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { MarketTableRowData } from "src/ui/markets/types";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

export function MarketsTableLarge(): ReactElement {
  const { appConfig: config } = useAppConfig();

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
  const { data: marketsRowData = [] } = useMarketRowData(config?.hyperdrives);

  const filteredMarkets = useMemo(() => {
    const marketFilteredByTermLength = termLengthFilter
      ? marketsRowData.filter(
          (marketRowData) =>
            marketRowData.market.termLengthMS === termLengthFilter,
        )
      : marketsRowData;

    if (protocolFilter !== ALL_PROTOCOLS_KEY) {
      return marketFilteredByTermLength.filter(
        (marketRowData) => marketRowData.market.yieldSource === protocolFilter,
      );
    }

    return marketFilteredByTermLength;
  }, [marketsRowData, protocolFilter, termLengthFilter]);

  return (
    <div className="space-y-8 rounded-sm bg-base-100 px-8 py-10">
      <div className="space-y-4">
        {/* Markets search and protocol filter row */}
        <div className="flex items-end gap-6">
          {/* Markets search input, disabled for now */}
          <div className="mr-auto hidden flex-col gap-y-2  lg:flex">
            <div className="flex items-center gap-x-1">
              <p className="font-medium text-neutral-content">Search Markets</p>
            </div>

            <input
              className=" daisy-input w-[250px] rounded-sm border bg-base-300 p-2 text-[1rem] font-medium text-base-content placeholder:text-neutral-content"
              placeholder="Maker DSR"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-neutral-content">
              Filter by protocol
            </p>
            <select
              onChange={(event) => {
                if (event.currentTarget.value === "none") {
                  setSelectedProtocolFilter(ALL_PROTOCOLS_KEY);
                } else {
                  setSelectedProtocolFilter(event.currentTarget.value);
                }
              }}
              defaultValue="none"
              className=" daisy-select w-[20rem] rounded-sm bg-base-300 text-[1rem]"
            >
              <option value="none">All protocols</option>
              {protocols.map((protocol) => (
                <option key={protocol.name} value={protocol.name}>
                  {protocol.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-neutral-content">
              Select term length
            </p>
            <select
              onChange={(event) => {
                if (event.currentTarget.value === "none") {
                  setSelectedTermLengthFilter(ALL_TERM_LENGTHS_KEY);
                } else {
                  setSelectedTermLengthFilter(+event.currentTarget.value);
                }
              }}
              defaultValue="none"
              className=" daisy-select w-[12rem] rounded-sm bg-base-300 text-[1rem]"
            >
              <option value="none">All term lengths</option>
              {termLengths
                .slice()
                .sort((a, b) => a - b)
                .map((termLength) => (
                  <option key={termLength} value={termLength}>
                    {termLength} months
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {/* Markets sortable table */}
      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[2fr_1fr_1fr_1fr] bg-base-100 text-neutral-content  [&>*]:p-5 bg-opacity-100"
          bodyRowClassName="grid-cols-[2fr_1fr_1fr_1fr] bg-transparent text-base-content  [&>*]:p-5"
          cols={[
            {
              cell: "Name",
              sortKey: "name",
            },
            {
              cell: "Term Length",
              sortKey: "termLength",
            },
            {
              cell: "Liquidity",
              sortKey: "liquidity",
            },
            {
              cell: "Fixed Rate",
              sortKey: "longAPR",
            },
          ]}
          rows={filteredMarkets.map((marketRowData) =>
            createMarketRow(marketRowData),
          )}
        />
      </div>
    </div>
  );
}

function createMarketRow({ market, yieldSource }: MarketTableRowData): Row {
  return {
    href: `/trade/${market.address}`,
    cells: [
      <span key="name" className="font-bold">
        <p>{market.name}</p>
        <YieldSourceLabel className=" font-normal" yieldSource={yieldSource} />
      </span>,
      <p key="term" className="font-semibold">
        {convertMillisecondsToMonths(market.termLengthMS)} months
      </p>,

      <span key="liquidity" className="font-semibold">
        $100M
      </span>,
      <span key="apy" className="font-semibold">
        1.25%
      </span>,
    ],
  };
}
