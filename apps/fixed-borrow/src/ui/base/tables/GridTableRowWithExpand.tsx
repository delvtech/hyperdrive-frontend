import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

/**
 * A table row with an expandable section for when you need to show more
 * information about a row
 * @returns
 */
export function ExpandableGridTableRow({
  detailsElement,
  className,
  children,
}: PropsWithChildren<{
  detailsElement: ReactNode;
  className?: string;
}>): ReactElement {
  return (
    <Disclosure>
      <Disclosure.Button
        className={classNames(
          "grid w-full cursor-pointer auto-cols-fr grid-flow-col rounded-lg odd:bg-midnight hover:bg-inputBg ui-open:rounded-b-none ui-open:border-b ui-open:border-dawn ui-open:bg-inputBg ui-not-open:border-none [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:p-4",
          className,
        )}
      >
        {children}
      </Disclosure.Button>

      <Transition
        enter="transition ease-in duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <Disclosure.Panel className="last:rounded-b-lg ui-open:bg-inputBg ">
          {detailsElement}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
