import { ChevronRightIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";

const ADD_LIQUIDITY_MODAL_ID = "addLpModal";

export function AddLiquidityModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Modal
      modalId={ADD_LIQUIDITY_MODAL_ID}
      modalContent={<AddLiquidityForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well
          interactive
          onClick={() => {
            setSearchParams({
              ...searchParams,
              position: "LP",
              openOrClosed: "Open",
            });
            return showModal();
          }}
        >
          <div className="flex h-full w-[300px] flex-col justify-between gap-2 p-3">
            <SquaresPlusIcon className="mb-2 h-16" />
            <p className="text-h5">Add Liquidity</p>
            <p className="font-bold">
              Earn trading fees <span>and</span> interest
            </p>
            <p className="daisy-label-text">
              Take the other side of every Buy and Short. Earn fees and the
              yield source rate.
            </p>
            <div className="mt-4 ml-4 flex flex-col gap-2 ">
              <ChecklistItem checked readOnly>
                Single-sided deposit with {hyperdrive.baseToken.symbol}
              </ChecklistItem>
              <ChecklistItem checked readOnly>
                Idle capital earns yield source rate
              </ChecklistItem>
              <ChecklistItem checked readOnly>
                No terms or rollovers, easy-to-use
              </ChecklistItem>
            </div>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-neutral daisy-btn-sm daisy-btn mt-4 justify-between gap-0 hover:daisy-btn-ghost">
              <span className="ml-4 flex-1 text-center">Add liquidity</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
