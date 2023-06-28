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
    <div className="daisy-collapse daisy-collapse-plus border border-base-500">
      <input type="checkbox" />
      <div className="text-xl daisy-collapse-title font-medium">{title}</div>
      <div className="daisy-collapse-content">{description}</div>
    </div>
  );
}
