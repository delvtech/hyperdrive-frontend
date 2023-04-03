import { PropsWithChildren, ReactElement, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { PositionForm } from "src/ui/trading/components/PositionForm";
import { OrderType, PositionType } from "src/ui/trading/types";

function PositionFormContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex flex-col w-full md:max-w-md col-span-1 border-r bg-base-100 border-hyper-blue-300 shrink-0 basis=[500px]">
      {children}
    </div>
  );
}

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as HyperdriveMarket;
  const [position] = useState<PositionType>("Long");
  const [order] = useState<OrderType>("Open");

  return (
    <div className="flex border-t grow border-hyper-blue-300">
      <PositionFormContainer>
        <PositionForm market={market} position={position} order={order} />
      </PositionFormContainer>
    </div>
  );
}
