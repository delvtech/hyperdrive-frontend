import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";
export function SlippageSettings({
  slippage,
  setSlippage,
  activeToken,
  activeTab,
  setActiveTab,
}: {
  slippage: bigint;
  setSlippage: (slippage: bigint) => void;
  activeToken: TokenConfig<any>;
  activeTab: "auto" | "custom";
  setActiveTab: (activeTab: "auto" | "custom") => void;
}): JSX.Element {
  return (
    <>
      <div className="flex items-center">
        <span className="ml-1">Max. Slippage</span>
        <div
          className="daisy-tooltip ml-1 before:w-48 before:border before:text-xs"
          data-tip={
            "Your transaction will revert if the price changes unfavorably by more than this percentage."
          }
        >
          <InformationCircleIcon className="size-4" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="daisy-tabs daisy-tabs-xs my-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("auto");
              setSlippage(dnum.from("0.5", activeToken.decimals)[0]);
            }}
            className={classNames("daisy-tab text-sm", {
              "font-bold": activeTab === "auto",
            })}
          >
            Auto
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("custom");
            }}
            className={classNames("daisy-tab text-sm", {
              "font-bold": activeTab === "custom",
            })}
          >
            Custom
          </button>
        </div>
        <div className="relative">
          <input
            min={0}
            placeholder="0.5"
            step="any"
            type="number"
            value={dnum.format([slippage, activeToken.decimals])}
            onChange={(e) => {
              setActiveTab("custom");
              setSlippage(dnum.from(e.target.value, activeToken.decimals)[0]);
            }}
            className={classNames(
              "daisy-input daisy-input-bordered h-8 max-w-24 text-sm",
              HIDE_NUMERIC_INPUT_ARROWS_CLASS,
            )}
          />
          <span className="absolute right-2 top-2 text-neutral-content">%</span>
        </div>
      </div>
    </>
  );
}
