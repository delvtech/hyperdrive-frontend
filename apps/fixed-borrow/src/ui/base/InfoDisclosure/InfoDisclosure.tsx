import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

export function InfoDisclosure({
  heading,
  children,
}: PropsWithChildren<{ heading: string }>): ReactElement {
  return (
    <Disclosure>
      <Disclosure.Button
        className={classNames(
          "flex w-full cursor-pointer justify-between rounded-lg border-b border-dawn p-6 text-h6 text-lightText hover:bg-inputBg ui-open:rounded-b-none ui-open:border-b ui-open:bg-inputBg ui-not-open:border-dawn",
        )}
      >
        {heading} <ExpandIcon />
      </Disclosure.Button>

      <Transition
        enter="transition ease-in duration-100 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <Disclosure.Panel className="last:rounded-b-lg ">
          <div className="rounded-b-lg border-b border-b-dawn p-8 text-h6 text-lightText">
            {children}
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}

function ExpandIcon(): ReactElement {
  return (
    <div className="flex h-full shrink-0 items-center justify-center">
      <div>
        <ChevronDownIcon
          className="transition duration-500 ui-open:rotate-180 "
          width={24}
        />
      </div>
    </div>
  );
}
