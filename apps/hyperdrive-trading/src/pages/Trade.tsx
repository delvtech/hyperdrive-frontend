import { PropsWithChildren, ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { useConfig } from "src/config/hooks/useConfig";
import { PositionForm } from "src/ui/trading/components/PositionForm";
import { OrderType, PositionType } from "src/ui/trading/types";

function PositionFormContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex flex-col w-full md:max-w-md col-span-1 border-r bg-base-100 border-hyper-blue-300 shrink-0 basis=[500px]">
      {children}
    </div>
  );
}

function getMarketByAddress(address: string) {}

export function Trade(): ReactElement {
  const [position] = useState<PositionType>("Long");
  const [order] = useState<OrderType>("Open");

  const config = useConfig();

  const { address } = useParams();
  const market = config.markets.find((market) => market.address === address);

  if (!market) {
    // TODO: handle this
    throw Error("could not find market from address.");
  }

  return (
    <div className="flex border-t grow border-hyper-blue-300">
      <PositionFormContainer>
        <PositionForm market={market} position={position} order={order} />
      </PositionFormContainer>
    </div>
  );
}
