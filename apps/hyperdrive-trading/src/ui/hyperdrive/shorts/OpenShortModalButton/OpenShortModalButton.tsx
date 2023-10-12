import { BoltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

const OPEN_SHORT_MODAL_ID = "openShortModal";
export function OpenShortModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });
  return (
    <Modal
      modalId={OPEN_SHORT_MODAL_ID}
      modalContent={<OpenShortForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well interactive variant="accent" onClick={() => showModal()}>
          <div className="flex w-[272px] flex-col justify-between gap-2 p-4">
            <BoltIcon className="mb-2 h-16" />
            <p className="text-h5">Open a short</p>
            <p className="font-bold">
              Earn <span>{vaultRate?.formatted}% APY</span> on{" "}
              {hyperdrive.baseToken.symbol}
            </p>
            <div className="mt-4 ml-4 flex flex-col gap-2 ">
              <ChecklistItem readOnly checked>
                Variable rate yield
              </ChecklistItem>
              <ChecklistItem readOnly checked>
                Profit from rising fixed rates
              </ChecklistItem>
              <ChecklistItem readOnly checked>
                Redeemable before term ends
              </ChecklistItem>
            </div>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-neutral daisy-btn-sm daisy-btn mt-4 justify-between gap-0 hover:daisy-btn-ghost">
              <span className="ml-4 flex-1 text-center">Open short</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
