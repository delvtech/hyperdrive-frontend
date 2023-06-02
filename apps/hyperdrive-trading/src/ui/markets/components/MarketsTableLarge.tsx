/* eslint-disable react/jsx-key */
import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { Row, SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useAppConfig } from "src/ui/config/useAppConfig";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { MarketTableRowData } from "src/ui/markets/types";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

export function MarketsTableLarge(): ReactElement {
  const { appConfig: config } = useAppConfig();

  const allProtocols = config?.markets.map((market) => market.protocol);
  const protocols = uniqBy(allProtocols, (protocol) => protocol.name);
  const allTermLengths = config?.markets.map((market) => market.termLength);
  const termLengths = uniqBy(allTermLengths, (termLength) => termLength);

  const [protocolFilter, setSelectedProtocolFilter] =
    useState<string>(ALL_PROTOCOLS_KEY);
  const [termLengthFilter, setSelectedTermLengthFilter] =
    useState<number>(ALL_TERM_LENGTHS_KEY);

  // TODO: no loading state for now
  const { data: marketsRowData = [] } = useMarketRowData(config?.markets);

  const filteredMarkets = useMemo(() => {
    const marketFilteredByTermLength = termLengthFilter
      ? marketsRowData.filter(
          (marketRowData) =>
            marketRowData.market.termLength === termLengthFilter,
        )
      : marketsRowData;

    if (protocolFilter !== ALL_PROTOCOLS_KEY) {
      return marketFilteredByTermLength.filter(
        (marketRowData) =>
          marketRowData.market.protocol.name === protocolFilter,
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
              <p className="font-medium text-hyper-blue-300">Search Markets</p>
            </div>

            <input
              className="input w-[250px] rounded-sm border bg-base-300 p-2 font-dm-sans text-[1rem] font-medium text-hyper-blue-100 placeholder:text-hyper-blue-300"
              placeholder="Maker DSR"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-hyper-blue-300">
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
              className="select w-[20rem] rounded-sm bg-base-300 font-dm-sans text-[1rem]"
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
            <p className="font-medium text-hyper-blue-300">
              Select term length
            </p>
            <select
              onChange={(event) => {
                console.log(event.currentTarget.value);
                if (event.currentTarget.value === "none") {
                  setSelectedTermLengthFilter(ALL_TERM_LENGTHS_KEY);
                } else {
                  setSelectedTermLengthFilter(+event.currentTarget.value);
                }
              }}
              defaultValue="none"
              className="select w-[12rem] rounded-sm bg-base-300 font-dm-sans text-[1rem]"
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
          headingRowClassName="grid-cols-[2fr_1fr_1fr_1fr] bg-base-100 text-hyper-blue-200 font-dm-sans [&>*]:p-5 bg-opacity-100"
          bodyRowClassName="grid-cols-[2fr_1fr_1fr_1fr] bg-transparent text-hyper-blue-100 font-dm-sans [&>*]:p-5"
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
              cell: "MSI",
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

function createMarketRow({ market }: MarketTableRowData): Row {
  return {
    href: `/trade/${market.address}`,
    cells: [
      <span className="font-bold">
        <p>{market.name}</p>
        <ProtocolLabel
          className="font-dm-sans font-normal"
          protocol={market.protocol}
        />
      </span>,
      <p className="font-semibold">{market.termLength} months</p>,

      <span className="font-semibold">$100M</span>,
      <span className="font-semibold">1.25%</span>,
    ],
  };
}
