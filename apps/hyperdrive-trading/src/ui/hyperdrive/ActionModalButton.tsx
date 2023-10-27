import {
  BoltIcon,
  ChevronRightIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";

interface ActionConfig {
  title: string;
  description: string;
  modalId: string;
  icon: ReactElement;
  content: (hyperdrive: Hyperdrive) => ReactElement;
  checklist: string[];
  buttonText: string;
}

const ACTIONS: { [key: string]: ActionConfig } = {
  OpenLong: {
    title: "Long hy",
    description: "It's a predictable fixed rate yield.",
    modalId: "openLongModal",
    icon: <ClockIcon className="mb-2 h-16" />,
    content: (hyperdrive: Hyperdrive) => (
      <OpenLongForm hyperdrive={hyperdrive} />
    ),
    checklist: [
      "Fixed rate included in the price",
      "Minimal risk and maintenance",
      "Redeemable before term ends",
    ],
    buttonText: "Long",
  },
  OpenShort: {
    title: "Short hy",
    description:
      "Profit when hy price drops, while maximizing exposure to the yield source.",
    modalId: "openShortModal",
    icon: <BoltIcon className="mb-2 h-16" />,
    content: (hyperdrive: Hyperdrive) => <OpenShortForm market={hyperdrive} />,
    checklist: [
      "Fixed rate up, hy price down",
      "Maximize exposure to yield source",
      "Redeemable before term ends",
    ],
    buttonText: "Short",
  },
  AddLiquidity: {
    title: "Add Liquidity",
    description:
      "Take the other side of every Long and Short. Earn fees and the yield source rate.",
    modalId: "addLpModal",
    icon: <SquaresPlusIcon className="mb-2 h-16" />,
    content: (hyperdrive: Hyperdrive) => (
      <AddLiquidityForm market={hyperdrive} />
    ),
    checklist: [
      "Single-sided deposit with ",
      "Idle liquidity earns yield source rate",
      "No terms or manual LP rollovers",
    ],
    buttonText: "Add liquidity",
  },
};

interface Props {
  action: "OpenLong" | "OpenShort" | "AddLiquidity";
  hyperdrive: Hyperdrive;
}

export function ActionModalButton({ action, hyperdrive }: Props): ReactElement {
  const actionConfig = ACTIONS[action];
  const { modalId, title, description, icon, content, checklist, buttonText } =
    actionConfig;

  return (
    <Modal modalId={modalId} modalContent={content(hyperdrive)}>
      {({ showModal }) => (
        <Well
          interactive
          onClick={() => {
            return showModal();
          }}
        >
          <div className="flex h-full w-[300px] flex-col justify-between gap-2 p-3">
            {icon}
            <p className="text-h5 font-bold">
              {title}
              {hyperdrive.baseToken.symbol}
            </p>
            <p className="font-bold">{description}</p>
            <div className="mt-4 ml-4 flex flex-col gap-2 ">
              {checklist.map((item, idx) => (
                <ChecklistItem key={idx} checked readOnly>
                  {item}
                </ChecklistItem>
              ))}
            </div>
            <div className="daisy-btn-neutral daisy-btn-sm daisy-btn mt-4 justify-between gap-0 hover:daisy-btn-ghost">
              <span className="ml-4 flex-1 text-center">{buttonText}</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
