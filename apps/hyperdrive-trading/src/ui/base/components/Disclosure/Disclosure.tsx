import { ReactElement, ReactNode } from "react";

interface DisclosureProps {
  title: ReactNode;
  description: ReactNode;
}

export function Disclosure({
  title,
  description,
}: DisclosureProps): ReactElement {
  return (
    <div className="group daisy-collapse-plus daisy-collapse border border-neutral-content/30">
      <input type="checkbox" />
      <div className="text-xl daisy-collapse-title font-medium opacity-70 group-hover:opacity-100">
        {title}
      </div>
      <div className="daisy-collapse-content">{description}</div>
    </div>
  );
}
