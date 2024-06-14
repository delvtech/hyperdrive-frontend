import classNames from "classnames";
import { ReactElement, ReactNode, useRef } from "react";

interface ModalProps {
  modalId: string;
  modalContent: ReactNode;
  modalHeader?: ReactNode;
  children?: (options: ModalChildrenOptions) => ReactNode;
  className?: string;
  forceOpen?: boolean;
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
}: ModalProps): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const showModal = () => modalRef.current?.showModal();

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
            <div className="h-30 flex items-center bg-base-100 bg-[url('/sine-wave.svg')] bg-cover bg-no-repeat px-8 pb-4 pt-8">
              {modalHeader}
            </div>
            <div className="px-2 pb-6 pt-0 sm:px-10">{modalContent}</div>
          </div>
        </form>
        <form method="dialog" className="daisy-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
