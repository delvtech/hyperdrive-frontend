import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement, ReactNode } from "react";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  modalId: string;
  icon: ReactNode;
  modalContent: ReactNode;
  checklist: string[];
  buttonText: string;
}

export function ActionModalButton({
  modalId,
  title,
  subtitle,
  description,
  icon,
  modalContent,
  checklist,
  buttonText,
}: Props): ReactElement {
  return (
    <Modal modalId={modalId} modalContent={modalContent}>
      {({ showModal }) => (
        <Well
          interactive
          onClick={() => {
            return showModal();
          }}
        >
          <div className="flex h-full w-[300px] flex-col justify-between gap-2 p-3">
            {icon}
            <p className="text-h5 font-bold">{title}</p>
            <p className="font-bold">{subtitle}</p>
            <p className="daisy-label-text">{description}</p>
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
