import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useMarketRowData } from "src/ui/markets/hooks/useMarketRowData";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

export function MarketsTableMini(): ReactElement {
  const { appConfig } = useAppConfig();

  const allProtocols = appConfig?.hyperdrives.map(
    (market) => appConfig.yieldSources[market.yieldSource],
  );
  const protocols = uniqBy(allProtocols, (protocol) => protocol.name);
  const allTermLengths = appConfig?.hyperdrives.map(
    (market) => market.termLengthMS,
  );
  const termLengths = uniqBy(allTermLengths, (termLength) => termLength);

  const [protocolFilter, setSelectedProtocolFilter] =
    useState<string>(ALL_PROTOCOLS_KEY);
  const [termLengthFilter, setSelectedTermLengthFilter] =
    useState<number>(ALL_TERM_LENGTHS_KEY);

  // TODO: no loading state for now
  const { data: marketsRowData = [] } = useMarketRowData(
    appConfig?.hyperdrives,
  );

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
              className="select w-[10rem] rounded-sm bg-base-300 font-dm-sans text-[1rem]"
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
      <div className="flex flex-col gap-y-8">
        {filteredMarkets.map(({ market }) => {
          return (
            <Link
              to={`/trade/${market.address}`}
              key={market.address}
              className="flex flex-col p-4 font-dm-sans text-hyper-blue-100 hover:bg-base-300"
            >
              <div className="flex">
                <h5 className="font-bold">{market.name}</h5>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Yield Source</p>
                <p>
                  <YieldSourceLabel
                    className="font-dm-sans font-semibold"
                    yieldSource={appConfig?.yieldSources[market.yieldSource]}
                  />
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Term Length</p>
                <p className="font-semibold">
                  {convertMillisecondsToMonths(market.termLengthMS)} months
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Liquidity</p>
                <p className="font-semibold">$100M</p>
              </div>
              <div className="flex">
                <p className="mr-auto text-hyper-blue-200">Fixed Rate</p>
                <p className="font-semibold">1.25%</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
