import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { MarketsTableLarge } from "src/ui/markets/MarketsTableLarge";

const MARKETS_MODAL_KEY = "MARKETS_MODAL";

export function MarketSelect({
  markets,
}: {
  markets: Hyperdrive[];
}): ReactElement {
  return (
    <>
      <div className="flex w-full justify-between">
        <label
          htmlFor={MARKETS_MODAL_KEY}
          className="daisy-btn-ghost daisy-btn-lg daisy-btn w-full justify-between"
        >
          <span className="inline-flex items-center gap-2 text-sm">
            Select market <ChevronDownIcon className="h-8" />
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
        className="daisy-modal cursor-pointer px-8"
      >
        <div className="flex max-h-[70vh] flex-col items-center overflow-auto rounded bg-base-100 p-4">
          <h3 className="font-akira">Markets</h3>

          <MarketsTableLarge />
        </div>
      </label>
    </>
  );
}
