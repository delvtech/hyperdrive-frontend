import { ChevronRightIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { OpenLongForm } from "src/ui/trade/OpenLongForm/OpenLongForm";

const OPEN_LONG_MODAL_ID = "openLongModal";

export function OpenLongModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <Modal
      modalId={OPEN_LONG_MODAL_ID}
      modalContent={<OpenLongForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well interactive variant="secondary" onClick={() => showModal()}>
          <div className="flex w-44 flex-col gap-2 py-4 text-center">
            <PlusCircleIcon className="mb-2 h-16 text-secondary" />
            <p className="text-h5 font-thin text-secondary">Open a long</p>
            <p>Earn a simple fixed rate on your DAI holdings</p>
            <div className="daisy-btn-secondary daisy-btn-sm daisy-btn mt-2 justify-between gap-0 border-secondary normal-case">
              <span className="ml-4 flex-1 text-center">Long</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
