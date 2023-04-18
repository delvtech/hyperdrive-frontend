/* eslint-disable react/jsx-key */

import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SupportedChainId } from "src/config/hyperdrive.config";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import { Button } from "src/ui/base/components/Button";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";
import { TokenLabel } from "src/ui/token/components/TokenLabel";
import { useChainId } from "wagmi";

const ALL_MARKETS_KEY = "All Markets";
const DEFAULT_TERM_LENGTH = 6;

export function MarketsTableMini(): ReactElement {
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
        {/* Markets search and protocol filter row */}
        <div className="flex flex-wrap items-center gap-6 px-4">
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

          <div className="flex flex-wrap gap-2">
            {/* Market Duration button group */}
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
      <div className="flex gap-y-8 flex-col">
        {filteredMarkets.map(({ market }) => {
          return (
            <Link
              to={`/trade/${market.address}`}
              key={market.address}
              className="flex flex-col text-hyper-blue-100 font-dm-sans hover:bg-base-300 p-4"
            >
              <div className="flex">
                <h5 className="font-bold">{market.name}</h5>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Protocol</p>
                <p>
                  <ProtocolLabel
                    className="font-semibold font-dm-sans"
                    protocol={market.protocol}
                  />
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Token</p>
                <p>
                  <TokenLabel
                    className="font-semibold font-dm-sans"
                    token="DAI"
                  />
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Liquidity</p>
                <p className="font-semibold">$100M</p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">APR</p>
                <p className="font-semibold">1.25%</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
