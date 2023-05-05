import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { Well } from "src/ui/base/Well/Well";

interface ClosePositionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClosePositionModal({
  isOpen,
  onClose,
}: ClosePositionModalProps): ReactElement {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md  overflow-hidden rounded-2xl bg-inputBg px-8 py-7 text-left align-middle shadow-xl ring-1 ring-dawn transition-all">
              <Dialog.Title
                as="h4"
                className="font-semi mb-4 font-bold text-lightText"
              >
                Close coverage?
              </Dialog.Title>
              <div className="space-y-6">
                <p className="text-h6 text-lightText">
                  Debt that is covered by this position will automatically
                  switch back to variable rate exposure when you close coverage
                  or it expires.
                </p>
                <Well>
                  <div className="flex flex-col gap-4 bg-midnight ">
                    <div className={"flex justify-between font-bold"}>
                      <span className=" text-h6 font-semibold uppercase text-secondaryText">
                        Expiration
                      </span>
                      <span className=" text-h6 text-lightText">
                        {"December 14, 2023"}
                      </span>
                    </div>
                    <div className={"flex justify-between font-bold"}>
                      <span className=" text-h6 font-semibold uppercase text-secondaryText">
                        Coverage Amount
                      </span>
                      <span className=" text-h6 text-lightText">
                        {"23,00.23 DAI"}
                      </span>
                    </div>
                    <div className={"flex justify-between font-bold"}>
                      <span className=" text-h6 font-semibold uppercase text-secondaryText">
                        Fixed Rate
                      </span>
                      <span className=" text-h6 text-lightText">
                        {"1.1% APY"}
                      </span>
                    </div>
                  </div>
                </Well>
                <div className="flex w-full justify-center gap-4 pt-2">
                  <Button size="md" variant="sun" onClick={onClose} block>
                    Close coverage
                  </Button>
                  <Button size="md" variant="dark" onClick={onClose} block>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
