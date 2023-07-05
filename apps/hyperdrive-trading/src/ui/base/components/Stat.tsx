import { ReactElement, ReactNode } from "react";

interface StatProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export function Stat({ label, value, className }: StatProps): ReactElement {
  return (
    <div className={className}>
      <p className="mb-1 whitespace-nowrap font-light text-neutral-content">
        {label}
      </p>
      <div className="whitespace-nowrap text-base-content">{value}</div>
    </div>
  );
}
