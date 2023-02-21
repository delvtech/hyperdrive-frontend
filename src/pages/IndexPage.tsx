import { MarketsTable } from "components/MarketsTable";
import { StatBubble } from "components/StatBubble";
import { MarketData } from "hyperdrive/types";
import { useHyperdriveConfig } from "hyperdrive/useHyperdriveConfig";
import { PropsWithChildren } from "react";
import { useQuery } from "react-query";

interface SectionProps extends PropsWithChildren {
  headerText: string;
}
export function Section({ children, headerText }: SectionProps) {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="text-4xl text-white font-Akira">{headerText}</h2>
      {children}
    </div>
  );
}

export function IndexPage() {
  const { data } = useMarketsData();

  return (
    <div className="flex flex-col w-full max-w-5xl px-10 m-auto mt-16 gap-y-20">
      <Section headerText="Protocol">
        <div className="flex flex-wrap gap-4">
          <StatBubble label="TVL" value="$101M" />
          <StatBubble label="Volume (Daily)" value="$6.7M" />
          <StatBubble label="Volume (All time)" value="$240M" />
          <StatBubble label="Yield Sources" value="27" />
        </div>
      </Section>

      <Section headerText="Markets">
        {data && <MarketsTable markets={data} />}
      </Section>
    </div>
  );
}

function useMarketsData() {
  const config = useHyperdriveConfig();
  const markets = config.markets;

  return useQuery({
    queryKey: "markets-data",
    queryFn: (): Promise<MarketData[]> => {
      return Promise.resolve(
        markets.map((market) => {
          // TODO stubbed for now
          return {
            address: market.address,
            token: market.baseToken,
            yieldSource: "Aave",
            fixedApr: 100,
            variableApr: 100,
            lpApr: 100,
            tvl: 100,
          };
        }),
      );
    },
  });
}
