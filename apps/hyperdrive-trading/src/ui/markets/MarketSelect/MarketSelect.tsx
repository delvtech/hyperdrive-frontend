import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { MarketsTable } from "src/ui/markets/MarketsTable/MarketsTable";

const MARKETS_MODAL_KEY = "MARKETS_MODAL";

// TODO: Refactor to new Modal component
export function MarketSelect({
  markets,
}: {
  markets: Hyperdrive[];
}): ReactElement {
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={MARKETS_MODAL_KEY}
          className="glass daisy-btn-xs daisy-btn w-full"
        >
          <span className="inline-flex items-center gap-2 text-sm">
            Select market <ChevronDownIcon className="h-5" />
          </span>
        </label>
      </div>
      {/* Markets modal */}
      <input
        type="checkbox"
        id={MARKETS_MODAL_KEY}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={MARKETS_MODAL_KEY}
        className="daisy-modal flex cursor-pointer items-center justify-center px-8"
      >
        <div className="flex max-h-[70vh] flex-col items-center overflow-auto rounded bg-base-100 p-4">
          <h3 className="font-lato">Markets</h3>

          <MarketsTable />
        </div>
      </label>
    </>
  );
}
