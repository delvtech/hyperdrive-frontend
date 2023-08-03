import uniqBy from "lodash.uniqby";
import { ReactElement, useMemo, useState } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import {
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  MarketTableRowData,
  useMarketRowData,
} from "src/ui/markets/MarketsTable/useMarketRowData";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { PublicClient } from "viem";
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
    publicClient as PublicClient,
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
    <div className="flex flex-col space-y-8 overflow-x-auto rounded-sm bg-base-300">
      {/* Markets sortable table */}
      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-auto bg-base-300 text-neutral-content bg-opacity-100"
          bodyRowClassName="grid-cols-auto bg-transparent text-base-content"
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
        {formatBalance(liquidity)}
      </span>,
      <span key="apy" className="font-semibold">
        1.25%
      </span>,
    ],
  };
}
