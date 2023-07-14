import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { MarketsTable } from "src/ui/markets/MarketsTable/MarketsTable";

const MARKETS_MODAL_KEY = "MARKETS_MODAL";

export function MarketSelect(): ReactElement {
  return (
    <Modal
      className={{ form: "w-[90vw] max-w-[90vw] md:w-[70vw] md:max-w-[70vw]" }}
      modalId={MARKETS_MODAL_KEY}
      modalContent={<MarketsModalContent />}
    >
      {({ showModal }) => (
        <label
          onClick={showModal}
          htmlFor={MARKETS_MODAL_KEY}
          className="glass daisy-btn-xs daisy-btn w-auto px-4 "
        >
          <span className="inline-flex items-center text-sm">
            Select market
          </span>
        </label>
      )}
    </Modal>
  );
}

function MarketsModalContent() {
  return (
    <div className="no-scrollbar flex max-h-[70vh] flex-col items-center overflow-auto rounded bg-base-300 p-4">
      <h3 className="mb-4 font-lato">Markets</h3>

      <MarketsTable />
    </div>
  );
}
