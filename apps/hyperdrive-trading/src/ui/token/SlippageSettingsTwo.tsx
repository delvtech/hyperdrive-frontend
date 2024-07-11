import { Cog8ToothIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { PercentInput } from "src/ui/base/components/PercentInput";

export const DEFAULT_SLIPPAGE_AMOUNT = "0.5";

export function SlippageSettingsTwo({
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
    <div className="daisy-dropdown daisy-dropdown-bottom flex justify-end">
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="daisy-btn daisy-btn-ghost daisy-btn-sm flex flex-row items-center justify-end gap-2 text-xs text-neutral-content"
      >
        {`${slippage || "0.5"}%`} slippage
        <Cog8ToothIcon className="h-4 text-base-content" />
      </button>
      <div className="daisy-menu daisy-dropdown-content absolute right-0 z-[1] min-w-64 justify-evenly rounded-lg border bg-base-100 p-4 shadow">
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
            onChange={(e) => {
              onActiveOptionChange("custom");
              onSlippageChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
