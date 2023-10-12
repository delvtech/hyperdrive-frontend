import { BoltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
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
        <Well
          interactive
          variant="accent"
          onClick={() => {
            setSearchParams({
              ...searchParams,
              position: "Shorts",
              openOrClosed: "Open",
            });
            return showModal();
          }}
        >
          <div className="flex h-full w-[300px] flex-col justify-between gap-2 p-3">
            <BoltIcon className="mb-2 h-16" />
            <p className="text-h5">Short hy{hyperdrive.baseToken.symbol}</p>
            <p className="font-bold">
              Earn <span>{vaultRate?.formatted}% APY</span> on{" "}
              {hyperdrive.baseToken.symbol}
            </p>
            <p className="daisy-label-text">
              Profit when the price of hy{hyperdrive.baseToken.symbol} drops,
              and also earn the yield source rate.
            </p>
            <div className="mt-4 ml-2 flex flex-col gap-2 ">
              <ChecklistItem readOnly checked>
                Fixed rate up, hy{hyperdrive.baseToken.symbol} price down
              </ChecklistItem>
              <ChecklistItem readOnly checked>
                Maximize exposure to yield source
              </ChecklistItem>
              <ChecklistItem readOnly checked>
                Redeemable before term ends
              </ChecklistItem>
            </div>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-neutral daisy-btn-sm daisy-btn mt-4 justify-between gap-0 hover:daisy-btn-ghost">
              <span className="ml-4 flex-1 text-center">Short</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
