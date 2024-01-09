import { ReactNode } from "react";

export function PreviewTransactionRow({
  label: label,
  value: value,
}: {
  label: ReactNode;
  value: ReactNode;
}): JSX.Element {
  return (
    <div className="flex justify-between text-md">
      <div className="text-neutral-content">{label}</div>
      <div>{value}</div>
    </div>
  );
}
