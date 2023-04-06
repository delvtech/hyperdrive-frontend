/* eslint-disable react/jsx-key */

import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { SupportedChainId } from "src/config/hyperdrive.config";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import { Button } from "src/ui/base/components/Button";
import { Row, SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { MarketTableRowData } from "src/ui/markets/types";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";
import { TokenLabel } from "src/ui/token/components/TokenLabel";
import { useChainId } from "wagmi";

const ALL_MARKETS_KEY = "All Markets";
const DEFAULT_TERM_LENGTH = 6;

export function MarketsTable(): ReactElement {
  const chainId = useChainId();
  const config = getHyperdriveConfig(chainId as SupportedChainId);

  const allProtocols = config.markets.map((market) => market.protocol);
  const protocols = uniqBy(allProtocols, (protocol) => protocol.name);
  const allTermLengths = config.markets.map((market) => market.termLength);
  const termLengths = uniqBy(allTermLengths, (termLength) => termLength);

  const [protocolFilter, setSelectedProtocolFilter] =
    useState<string>(ALL_MARKETS_KEY);
  const [termLengthFilter, setSelectedTermLengthFilter] =
    useState<number>(DEFAULT_TERM_LENGTH);

  // TODO: no loading state for now
  const { data: marketsRowData = [] } = useMarketRowData(config.markets);

  const filteredMarkets = useMemo(() => {
    const marketFilteredByTermLength = marketsRowData.filter(
      (marketRowData) => marketRowData.market.termLength === termLengthFilter,
    );

    if (protocolFilter !== ALL_MARKETS_KEY) {
      return marketFilteredByTermLength.filter(
        (marketRowData) =>
          marketRowData.market.protocol.name === protocolFilter,
      );
    }

    return marketFilteredByTermLength;
  }, [marketsRowData, protocolFilter, termLengthFilter]);

  return (
    <div className="px-8 py-10 space-y-8 rounded-sm bg-base-100">
      <div className="space-y-4">
        {/* Market Duration button group */}
        {/* <div className="flex items-center gap-x-4">
          <div className="flex flex-wrap gap-2">
            {termLengths
              .slice()
              .sort((a, b) => a - b)
              .map((termLength) => (
                <Button
                  variant="Future"
                  key={`termLengths-${termLength}-months`}
                  // active={termLengthFilter === termLength}
                  onClick={() => setSelectedTermLengthFilter(termLength)}
                >
                  <p>{termLength} months</p>
                </Button>
              ))}
          </div>
        </div> */}

        {/* Markets search and protocol filter row */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Markets search input */}
          {/* <input
            className="w-[250px] bg-base-200 px-6 py-2 text-center border rounded border-hyper-blue-300 font-quantico text-hyper-blue-100 placeholder:text-hyper-blue-300"
            placeholder="Search Markets"
          /> */}

          {/* Protocol filter button group */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="Future"
              active={protocolFilter === ALL_MARKETS_KEY}
              onClick={() => setSelectedProtocolFilter(ALL_MARKETS_KEY)}
            >
              <p>All Protocols</p>
            </Button>

            {protocols
              .slice()
              .sort()
              .map((protocol) => (
                <Button
                  variant="Future"
                  key={`protocol-${protocol.name}`}
                  active={protocolFilter === protocol.name}
                  onClick={() => setSelectedProtocolFilter(protocol.name)}
                >
                  <ProtocolLabel className="font-bold" protocol={protocol} />
                </Button>
              ))}
          </div>

          <div className="flex flex-wrap gap-2 ml-auto">
            {termLengths
              .slice()
              .sort((a, b) => a - b)
              .map((termLength) => (
                <Button
                  variant="Future"
                  key={`termLengths-${termLength}-months`}
                  active={termLengthFilter === termLength}
                  onClick={() => setSelectedTermLengthFilter(termLength)}
                >
                  <p>{termLength} months</p>
                </Button>
              ))}
          </div>
        </div>
      </div>

      {/* Markets sortable table */}
      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-base-100 text-hyper-blue-200 font-dm-sans [&>*]:p-5 bg-opacity-100"
          bodyRowClassName="grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-transparent text-hyper-blue-100 font-dm-sans [&>*]:p-5"
          cols={[
            {
              cell: "Name",
              sortKey: "name",
            },
            "Token",
            {
              cell: "Liquidity",
              sortKey: "liquidity",
            },
            {
              cell: "Long APR",
              sortKey: "longAPR",
            },
            {
              cell: "Short APR",
              sortKey: "shortAPR",
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
          className="font-normal font-dm-sans"
          protocol={market.protocol}
        />
      </span>,
      <TokenLabel className="font-semibold font-dm-sans" token="DAI" />,
      <span className="font-medium" data-tip="hello">
        $100M
      </span>,
      <span className="font-semibold">1.25%</span>,
      <span className="font-semibold">1.25%</span>,
    ],
  };
}
