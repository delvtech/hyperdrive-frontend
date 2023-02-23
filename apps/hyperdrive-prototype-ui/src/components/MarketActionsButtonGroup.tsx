import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { MarketAction, OrderType } from "hyperdrive/types";
import { ReactElement } from "react";

interface MarketActionButtonGroupProps {
  selectedAction: MarketAction;
  selectedOrderType: OrderType;
  onMarketActionChange: (action: MarketAction) => void;
  onOrderTypeChange: (order: OrderType) => void;
}

export function MarketActionButtonGroup({
  selectedAction,
  selectedOrderType,
  onMarketActionChange,
  onOrderTypeChange,
}: MarketActionButtonGroupProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LONG",
            },
          )}
          onClick={() => onMarketActionChange("LONG")}
        >
          <ArrowTrendingUpIcon className="w-5 mr-1" />
          <span>Long</span>
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "SHORT",
            },
          )}
          onClick={() => onMarketActionChange("SHORT")}
        >
          <ArrowTrendingDownIcon className="w-5 mr-1" />
          <span>Short</span>
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LP",
            },
          )}
          onClick={() => onMarketActionChange("LP")}
        >
          <CubeIcon className="w-5 mr-1" />
          <span>LP</span>
        </button>
      </div>

      <div className="grid grid-cols-2 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "OPEN",
            },
          )}
          onClick={() => onOrderTypeChange("OPEN")}
        >
          Open
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "CLOSE",
            },
          )}
          onClick={() => onOrderTypeChange("CLOSE")}
        >
          Close
        </button>
      </div>
    </div>
  );
}
