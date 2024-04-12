import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
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
      <span className="ml-1">Max. Slippage</span>
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
            type="number"
            value={dnum.format([slippage, activeToken.decimals])}
            onChange={(e) => {
              setActiveTab("custom");
              setSlippage(dnum.from(e.target.value, activeToken.decimals)[0]);
            }}
            className="daisy-input daisy-input-bordered h-8 max-w-24 text-sm"
          />
          <span className="absolute right-2 top-2 text-neutral-content">%</span>
        </div>
      </div>
    </>
  );
}
