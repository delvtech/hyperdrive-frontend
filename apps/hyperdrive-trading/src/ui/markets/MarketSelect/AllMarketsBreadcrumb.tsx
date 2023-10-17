import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { MarketsTable } from "src/ui/markets/MarketsTable/MarketsTable";

export const MARKETS_MODAL_KEY = "MARKETS_MODAL";

export function AllMarketsBreadcrumb(): ReactElement {
  return (
    <Modal
      className={"w-[50vw] max-w-[70vw]"}
      modalId={MARKETS_MODAL_KEY}
      modalContent={<MarketsTable />}
    >
      {({ showModal }) => (
        <label
          onClick={showModal}
          htmlFor={MARKETS_MODAL_KEY}
          className="daisy-link-hover daisy-link"
        >
          All Markets
        </label>
      )}
    </Modal>
  );
}
