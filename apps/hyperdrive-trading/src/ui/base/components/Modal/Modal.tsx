import classNames from "classnames";
import { type ReactElement, type ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  modalId: string;
  modalContent: ReactNode | ReactNode[];
  modalHeader?: ReactNode | ReactNode[];
  children?: (options: ModalChildrenOptions) => ReactNode;
  className?: string;
  forceOpen?: boolean;
  activeIndex?: number;
  onClose?: () => void;
}

interface ModalChildrenOptions {
  showModal: () => void;
}

export function Modal({
  modalId,
  modalContent,
  modalHeader,
  children,
  className,
  forceOpen = false,
  activeIndex,
  onClose,
}: ModalProps): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  function showModal() {
    return modalRef.current?.showModal();
  }

  const isMultiModal = getIsMultiModal(modalContent, modalHeader, activeIndex);

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal || !onClose) {
      return;
    }

    if (onClose) {
      modal.addEventListener("close", onClose);
    }

    return () => {
      modal.removeEventListener("close", onClose);
    };
  }, [onClose, modalRef]);

  return (
    <>
      {children?.({ showModal })}

      <dialog
        id={modalId}
        className={classNames("daisy-modal", { "daisy-modal-open": forceOpen })}
        ref={modalRef}
      >
        <form
          method="dialog"
          className={classNames("daisy-modal-box bg-base-200 p-0", className)}
        >
          <div className="flex flex-col gap-4">
            {isMultiModal && Array.isArray(modalHeader)
              ? modalHeader[activeIndex!]
              : modalHeader}
            <div className="px-2 pt-0 pb-8 sm:px-10">
              {isMultiModal && Array.isArray(modalContent)
                ? modalContent[activeIndex!]
                : modalContent}
            </div>
          </div>
        </form>
        <form method="dialog" className="daisy-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

function getIsMultiModal(
  modalContent: ReactNode | ReactNode[],
  modalHeader?: ReactNode | ReactNode[],
  activeIndex?: number,
): boolean {
  if (activeIndex === undefined) {
    return false;
  }

  if (
    Array.isArray(modalContent) === false ||
    Array.isArray(modalHeader) === false
  ) {
    return false;
  }

  if (modalContent.length !== modalHeader.length) {
    return false;
  }

  return true;
}
