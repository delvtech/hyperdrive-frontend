import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

/**
 *
 * @deprecated use `AccordionSection2`, which is built with Headless UI
 */
export function AccordionSection({
  heading,
  children,
  isExpanded,
  onChange,
}: PropsWithChildren<{
  heading: ReactNode;
  isExpanded?: boolean;
  onChange?: () => void;
}>): ReactElement {
  return (
    <div className="group daisy-collapse justify-normal rounded-none text-sm">
      <input
        onChange={onChange}
        type="checkbox"
        checked={isExpanded}
        className="min-h-0"
      />
      <div className="daisy-collapse-title mb-3 min-h-0 p-0 font-medium">
        <div className="flex items-center gap-4">{heading}</div>
      </div>
      <div className="daisy-collapse-content space-y-2 px-0">{children}</div>
    </div>
  );
}

export function AccordionSection2({
  heading,
  children,
}: PropsWithChildren<{
  heading: ReactNode;
  isExpanded?: boolean;
  onChange?: () => void;
}>): ReactElement {
  return (
    <Disclosure>
      <DisclosureButton className="group flex justify-between border-b border-base-content/10 p-0 pb-2">
        {heading}
        <ChevronDownIcon className="w-5 text-neutral-content transition-transform group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="mb-4 px-0">{children}</DisclosurePanel>
    </Disclosure>
  );
}
