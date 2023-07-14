import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import {
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/MarketsTable/useMarketRowData";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { usePublicClient } from "wagmi";

const ALL_PROTOCOLS_KEY = "All Markets";
const ALL_TERM_LENGTHS_KEY = 0;

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
  const { data: marketsRowData = [] } = useMarketRowData(
    config?.hyperdrives,
    publicClient as any,
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
    <div className="flex flex-col space-y-8 overflow-x-auto rounded-sm bg-base-100">
      {/* Markets sortable table */}
      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[1.5fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] bg-base-100 text-neutral-content text-[10px]  bg-opacity-100"
          bodyRowClassName="grid-cols-[1.5fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] bg-transparent text-base-content text-[8px] md:text-md "
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

function createMarketRow({
  market,
  yieldSource,
  liquidity,
}: MarketTableRowData): Row {
  const formattedLiquidity = liquidity && parseInt(liquidity).toLocaleString();
  return {
    href: `/trade/${market.address}`,
    cells: [
      <span key="name" className="font-bold">
        <p>{market.name}</p>
        <YieldSourceLabel yieldSource={yieldSource} />
      </span>,
      <p key="term" className="font-semibold">
        {convertMillisecondsToMonths(market.termLengthMS)} months
      </p>,

      <span
        key="liquidity"
        className="flex flex-row items-center justify-start font-semibold"
      >
        <img className="mr-1 h-4" src={market.baseToken.iconUrl} />
        {formattedLiquidity}
      </span>,
      <span key="apy" className="font-semibold">
        1.25%
      </span>,
    ],
  };
}
