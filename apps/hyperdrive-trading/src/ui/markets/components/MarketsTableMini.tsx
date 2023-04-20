import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SupportedChainId } from "src/config/hyperdrive.config";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { ProtocolLabel } from "src/ui/protocol/components/ProtocolLabel";
import { useChainId } from "wagmi";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

export function MarketsTableMini(): ReactElement {
  const chainId = useChainId();
  const config = getHyperdriveConfig(chainId as SupportedChainId);

  const allProtocols = config.markets.map((market) => market.protocol);
  const protocols = uniqBy(allProtocols, (protocol) => protocol.name);
  const allTermLengths = config.markets.map((market) => market.termLength);
  const termLengths = uniqBy(allTermLengths, (termLength) => termLength);

  const [protocolFilter, setSelectedProtocolFilter] =
    useState<string>(ALL_PROTOCOLS_KEY);
  const [termLengthFilter, setSelectedTermLengthFilter] =
    useState<number>(ALL_TERM_LENGTHS_KEY);

  // TODO: no loading state for now
  const { data: marketsRowData = [] } = useMarketRowData(config.markets);

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
    <div className="px-8 py-10 space-y-8 rounded-sm bg-base-100">
      <div className="space-y-4">
        {/* Markets search and protocol filter row */}
        <div className="flex flex-wrap items-center gap-6 px-4">
          {/* Protocol filter button group */}
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
              className="select w-[10rem] text-[1rem] rounded-sm font-dm-sans bg-base-300"
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
                if (event.currentTarget.value === "none") {
                  setSelectedTermLengthFilter(ALL_TERM_LENGTHS_KEY);
                } else {
                  setSelectedTermLengthFilter(+event.currentTarget.value);
                }
              }}
              defaultValue="none"
              className="select w-[12rem] text-[1rem] rounded-sm font-dm-sans bg-base-300"
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
                <p className="mr-auto text-hyper-blue-200">Term Length</p>
                <p className="font-semibold">{market.termLength} months</p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Liquidity</p>
                <p className="font-semibold">$100M</p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">MSI</p>
                <p className="font-semibold">1.25%</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
