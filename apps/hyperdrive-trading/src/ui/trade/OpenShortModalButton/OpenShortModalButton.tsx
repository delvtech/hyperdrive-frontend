import { BoltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { OpenShortForm } from "src/ui/trade/OpenShortForm/OpenShortForm";

const OPEN_SHORT_MODAL_ID = "openShortModal";
export function OpenShortModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <Modal
      modalId={OPEN_SHORT_MODAL_ID}
      modalContent={<OpenShortForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well interactive variant="accent" onClick={() => showModal()}>
          <div className="flex w-52 flex-col gap-2 py-4 text-center">
            <BoltIcon className="mb-2 h-16 text-accent" />
            <p className="font-lato text-h5 font-light text-accent">
              Open a short
            </p>
            <p className="font-light ">
              Maximize your exposure to the DAI Savings Rate (DSR)
            </p>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-accent daisy-btn-sm daisy-btn mt-2 justify-between gap-0 normal-case">
              <span className="ml-4 flex-1 text-center">Short</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
