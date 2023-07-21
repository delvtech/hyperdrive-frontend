import { ReactElement, ReactNode } from "react";

interface StatProps {
  label: string;
  value: ReactNode;
  description?: string;
  className?: string;
}

export function Stat({
  label,
  value,
  description,
  className,
}: StatProps): ReactElement {
  return (
    <div className={className}>
      <p
        data-tip={description}
        className="daisy-tooltip mb-1 whitespace-nowrap font-light text-neutral-content"
      >
        {label}
      </p>
      <div className="whitespace-nowrap text-base-content">{value}</div>
    </div>
  );
}
