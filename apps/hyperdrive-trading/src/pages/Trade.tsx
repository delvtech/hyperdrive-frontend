import { PropsWithChildren, ReactElement, useState } from "react";
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
  const [position] = useState<PositionType>("Long");
  const [order] = useState<OrderType>("Open");

  return (
    <div className="flex border-t grow border-hyper-blue-300">
      <PositionFormContainer>
        <PositionForm position={position} order={order} />
      </PositionFormContainer>
    </div>
  );
}
