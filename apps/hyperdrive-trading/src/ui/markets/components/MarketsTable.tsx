/* eslint-disable react/jsx-key */

import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { SupportedChainId } from "src/config/hyperdrive.config";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import Button from "src/ui/base/components/Button";
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
    <div className="p-10 space-y-6 rounded bg-base-200">
      <h2 className="text-3xl font-bold font-quantico text-off-white">
        Markets
      </h2>

      <div className="flex flex-wrap items-center gap-6">
        {/* TODO: abstract to own component */}
        <input
          className="px-6 py-2 text-center bg-transparent border rounded border-giga-blue-300 font-quantico text-giga-blue-100 placeholder:text-giga-blue-300"
          placeholder="Search Markets"
        />

        <div className="flex flex-wrap gap-2">
          <Button
            active={protocolFilter === ALL_MARKETS_KEY}
            onClick={() => setSelectedProtocolFilter(ALL_MARKETS_KEY)}
          >
            All Markets
          </Button>

          {protocols.map((protocol) => (
            <Button
              key={`protocol-${protocol}`}
              active={protocolFilter === protocol.name}
              onClick={() => setSelectedProtocolFilter(protocol.name)}
            >
              {protocol.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {termLengths.map((termLength) => (
          <Button
            key={`termLengths-${termLength}-months`}
            active={termLengthFilter === termLength}
            onClick={() => setSelectedTermLengthFilter(termLength)}
          >
            {termLength} months
          </Button>
        ))}
      </div>

      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-7 bg-transparent text-giga-blue-100 font-quantico text-md [&>*]:p-5"
          bodyRowClassName="grid-cols-7 bg-transparent text-off-white font-rubik [&>*]:p-5"
          cols={[
            {
              cell: "Name",
              sortKey: "name",
            },
            {
              cell: "Protocol",
              sortKey: "protocol",
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
            {
              cell: "LP APR",
              sortKey: "lpAPR",
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
    // TODO: link to trade page with query parameter
    href: `/trade`,
    cells: [
      <span className="font-semibold">{market.name}</span>,
      <ProtocolLabel protocol={market.protocol} />,
      <TokenLabel className="font-semibold" token="DAI" />,
      "$100M",
      <span className="font-semibold">1.25%</span>,
      <span className="font-semibold">1.25%</span>,
      <span className="font-semibold">1.25%</span>,
    ],
  };
}
