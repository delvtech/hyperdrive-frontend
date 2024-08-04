import classNames from "classnames";
import { type ReactElement, type ReactNode, useState } from "react";

interface DisclosureProps {
  title: ReactNode;
  description: ReactNode;
}

export function Disclosure({
  title,
  description,
}: DisclosureProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group daisy-collapse daisy-collapse-plus items-center border border-neutral-content">
      <input
        type="checkbox"
        onChange={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      <div
        className={classNames(
          "text-xl daisy-collapse-title font-medium text-neutral-content group-hover:opacity-100",
          isOpen ? "opacity-100" : "opacity-80",
        )}
      >
        {title}
      </div>
      <div className="daisy-collapse-content">{description}</div>
    </div>
  );
}
