import { ReactElement, ReactNode, useRef } from "react";

interface ModalClassNames {
  dialog?: string;
  form?: string;
  backdrop?: string;
}

interface ModalProps {
  modalId: string;
  modalContent: ReactNode;
  children: (options: ModalChildrenOptions) => ReactNode;
  className?: ModalClassNames; // Use ModalClassNames here
}

interface ModalChildrenOptions {
  showModal: () => void;
}

export function Modal({
  modalId,
  modalContent,
  children,
  className = {}, // Default is an empty object if no classes are provided
}: ModalProps): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showModal = () => modalRef.current?.showModal();

  return (
    <>
      {children({ showModal })}

      <dialog
        id={modalId}
        className={`daisy-modal ${className.dialog || ""}`}
        ref={modalRef}
      >
        <form
          method="dialog"
          className={`daisy-modal-box bg-base-300 ${className.form || ""}`}
        >
          {modalContent}
        </form>
        <form
          method="dialog"
          className={`daisy-modal-backdrop ${className.backdrop || ""}`}
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
