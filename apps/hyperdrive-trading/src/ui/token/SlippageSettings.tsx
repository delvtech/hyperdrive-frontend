import {
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { PercentInput } from "src/ui/base/components/PercentInput";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";

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
}): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="daisy-dropdown daisy-dropdown-bottom flex justify-end">
      <button
        type="button"
        aria-expanded={isDropdownOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsDropdownOpen((prevState) => !prevState);
        }}
        className={
          "daisy-btn daisy-btn-md mb-1 h-9 min-h-9 rounded-full text-xs font-normal text-neutral-content"
        }
      >
        {`${slippage || DEFAULT_SLIPPAGE_AMOUNT}%`} slippage
        <Cog6ToothIcon
          className={classNames("h-4 stroke-2", "test-neutral-content")}
        />
      </button>
      {isDropdownOpen && (
        <div className="daisy-menu daisy-dropdown-content absolute right-0 z-[1] min-w-64 justify-evenly rounded-lg border bg-base-100 p-4 shadow">
          <div className="flex items-center">
            <span className="ml-1">Max. Slippage</span>
            <Tooltip className="ml-1 before:text-start" tooltip={tooltip}>
              <InformationCircleIcon className="size-4" />
            </Tooltip>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="daisy-tabs daisy-tabs-xs my-4">
              <button
                type="button"
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
                type="button"
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
        </div>
      )}
    </div>
  );
}
