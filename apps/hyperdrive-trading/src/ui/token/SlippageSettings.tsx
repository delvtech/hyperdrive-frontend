import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { PercentInput } from "src/ui/base/components/PercentInput";

export const DEFAULT_SLIPPAGE_AMOUNT = "0.5";

export function SlippageSettings({
  slippage,
  onSlippageChange,
  activeOption,
  onActiveOptionChange,
  tooltip,
}: {
  slippage: string;
  onSlippageChange: (slippage: string) => void;
  activeOption: "auto" | "custom";
  onActiveOptionChange: (activeTab: "auto" | "custom") => void;
  tooltip?: string;
}): JSX.Element {
  return (
    <>
      <div className="flex items-center">
        <span className="ml-1">Max. Slippage</span>
        <div
          className="daisy-tooltip ml-1 before:w-48 before:border before:text-xs"
          data-tip={tooltip}
        >
          <InformationCircleIcon className="size-4" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="daisy-tabs daisy-tabs-xs my-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              onActiveOptionChange("auto");
              onSlippageChange(DEFAULT_SLIPPAGE_AMOUNT);
            }}
            className={classNames("daisy-tab text-sm", {
              "font-bold": activeOption === "auto",
            })}
          >
            Auto
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onActiveOptionChange("custom");
            }}
            className={classNames("daisy-tab text-sm", {
              "font-bold": activeOption === "custom",
            })}
          >
            Custom
          </button>
        </div>
        <PercentInput
          value={slippage}
          onChange={(value) => {
            onActiveOptionChange("custom");
            onSlippageChange(value);
          }}
        />
      </div>
    </>
  );
}
