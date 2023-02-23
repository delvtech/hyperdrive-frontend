import { MarketActionButtonGroup } from "components/MarketActionsButtonGroup";
import { LongPositionForm } from "components/PositionForms/Long/LongPositionForm";
import { LpPositionForm } from "components/PositionForms/LP/LpPositionForm";
import { ShortPositionForm } from "components/PositionForms/Short/ShortPositionForm";
import { getMarketByAddress } from "hyperdrive/getMarketByAddress";
import { MarketAction, OrderType } from "hyperdrive/types";
import { useHyperdriveConfig } from "hyperdrive/useHyperdriveConfig";
import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { match } from "ts-pattern";

export function MarketPage(): ReactElement {
  const params = useParams();
  const config = useHyperdriveConfig();
  const marketAddress = params.address;
  const market = getMarketByAddress(marketAddress, config);

  const [marketAction, setMarketAction] = useState<MarketAction>("LONG");
  const [orderType, setOrderType] = useState<OrderType>("OPEN");

  return (
    <div className="flex flex-col items-center w-full max-w-lg px-10 m-auto mt-16 gap-y-12">
      <div className="flex items-center w-full text-white gap-x-4">
        <h2 className="text-3xl font-Akira">USDC Market</h2>
        <div className="flex p-2 rounded-lg h-fit max-h-fit bg-racing-green">
          <span className="text-xs font-bold text-black ">Lending</span>
        </div>
      </div>

      <div className="flex flex-col w-full text-white gap-y-10">
        <MarketActionButtonGroup
          selectedAction={marketAction}
          selectedOrderType={orderType}
          onMarketActionChange={(newAction) => setMarketAction(newAction)}
          onOrderTypeChange={(newOrder) => setOrderType(newOrder)}
        />
        {market &&
          match(marketAction)
            .with("LONG", () => (
              <LongPositionForm order={orderType} market={market} />
            ))
            .with("SHORT", () => (
              <ShortPositionForm order={orderType} market={market} />
            ))
            .with("LP", () => <LpPositionForm />)
            .exhaustive()}
      </div>
    </div>
  );
}
