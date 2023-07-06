import { ChevronRightIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Well } from "src/ui/base/components/Well/Well";

export function AddLiquidityModalButton(): ReactElement {
  return (
    <Well interactive variant="primary">
      <div className="flex w-52 flex-col gap-2 py-4 text-center">
        <CircleStackIcon className="mb-2 h-16 text-primary" />
        <p className="font-lato text-h5 font-light text-primary">
          Add liquidity
        </p>
        <p className="font-light">
          Earn trading fees when users open longs or shorts
        </p>
        <div className="daisy-btn-primary daisy-btn-sm daisy-btn mt-2 justify-between gap-0 normal-case">
          <span className="ml-4 flex-1 text-center">Add LP</span>
          <ChevronRightIcon className="h-3 text-right" />
        </div>
      </div>
    </Well>
  );
}
