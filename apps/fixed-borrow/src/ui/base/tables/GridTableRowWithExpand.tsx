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
          "grid w-full cursor-pointer auto-cols-fr grid-flow-col transition-all last:rounded-b-lg odd:bg-midnight hover:bg-inputBg ui-open:border-b ui-open:border-[#272F49] ui-open:bg-inputBg [&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:p-4",
          className,
        )}
      >
        {children}
      </Disclosure.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="last:rounded-b-lg ui-open:bg-inputBg ">
          {detailsElement}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
