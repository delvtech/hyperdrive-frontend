import classNames from "classnames";
import { ReactElement, ReactNode, useRef } from "react";

interface ModalProps {
  modalId: string;
  modalContent: ReactNode;
  children?: (options: ModalChildrenOptions) => ReactNode;
  className?: string;
}

interface ModalChildrenOptions {
  showModal: () => void;
}

export function Modal({
  modalId,
  modalContent,
  children,
  className,
}: ModalProps): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showModal = () => modalRef.current?.showModal();

  return (
    <>
      {children?.({ showModal })}

      <dialog id={modalId} className="daisy-modal" ref={modalRef}>
        <form
          method="dialog"
          className={classNames("daisy-modal-box bg-base-200", className)}
        >
          {modalContent}
        </form>
        <form method="dialog" className="daisy-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
