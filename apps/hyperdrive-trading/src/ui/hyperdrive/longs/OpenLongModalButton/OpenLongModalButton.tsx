import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";

const OPEN_LONG_MODAL_ID = "openLongModal";

export function OpenLongModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  return (
    <Modal
      modalId={OPEN_LONG_MODAL_ID}
      modalContent={<OpenLongForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well interactive variant="secondary" onClick={() => showModal()}>
          <div className="flex w-[272px] flex-col gap-2 p-4">
            <ClockIcon className="mb-2 h-16 text-secondary" />
            <p className="text-h5 ">Open a long</p>
            <p className="font-bold">
              Earn{" "}
              <span className="text-secondary">
                {fixedAPR?.formatted || "-"}% APR
              </span>{" "}
              on {hyperdrive.baseToken.symbol}
            </p>
            <div className="mt-4 ml-4 flex flex-col gap-2">
              <ChecklistItem checked readOnly variant="secondary">
                Guaranteed fixed rate yield
              </ChecklistItem>
              <ChecklistItem checked readOnly variant="secondary">
                Minimal risk and maintenance
              </ChecklistItem>
              <ChecklistItem checked readOnly variant="secondary">
                Redeemable before term ends
              </ChecklistItem>
            </div>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-secondary daisy-btn-sm daisy-btn mt-4 justify-between gap-0 border-secondary">
              <span className="ml-4 flex-1 text-center">Open long</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
