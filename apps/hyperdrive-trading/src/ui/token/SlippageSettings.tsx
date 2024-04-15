import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import * as dnum from "dnum";
import { PercentInput } from "src/ui/base/components/PercentInput";
export function SlippageSettings({
  slippage,
  setSlippage,
  decimals,
  activeOption: activeTab,
  onActiveOptionChange: setActiveOption,
}: {
  slippage: bigint;
  setSlippage: (slippage: bigint) => void;
  decimals: number;
  activeOption: "auto" | "custom";
  onActiveOptionChange: (activeTab: "auto" | "custom") => void;
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
              setActiveOption("auto");
              setSlippage(dnum.from("0.5", decimals)[0]);
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
              setActiveOption("custom");
            }}
            className={classNames("daisy-tab text-sm", {
              "font-bold": activeTab === "custom",
            })}
          >
            Custom
          </button>
        </div>
        <PercentInput
          value={dnum.format([slippage, decimals])}
          onChange={(e) => {
            setActiveOption("custom");
            setSlippage(dnum.from(e.target.value, decimals)[0]);
          }}
        />
      </div>
    </>
  );
}
