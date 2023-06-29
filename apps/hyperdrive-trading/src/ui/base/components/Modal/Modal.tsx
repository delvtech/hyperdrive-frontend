import { ReactElement, ReactNode, useRef } from "react";

interface ModalProps {
  modalId: string;
  modalContent: ReactNode;
  children: (options: ModalChildrenOptions) => ReactNode;
}

interface ModalChildrenOptions {
  showModal: () => void;
}

export function Modal({
  modalId,
  modalContent,
  children,
}: ModalProps): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showModal = () => modalRef.current?.showModal();

  return (
    <>
      {children({ showModal })}

      <dialog id={modalId} className="daisy-modal" ref={modalRef}>
        <form method="dialog" className="daisy-modal-box bg-base-300">
          {modalContent}
        </form>
        <form method="dialog" className="daisy-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
