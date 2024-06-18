import classNames from "classnames";
import { ReactNode } from "react";

export function LabelValue({
  size = "medium",
  label: label,
  value: value,
}: {
  size?: "small" | "medium";
  label: ReactNode;
  value: ReactNode;
}): JSX.Element {
  return (
    <div
      className={classNames(
        "flex w-full justify-between border-b border-dotted border-neutral-content/30 pb-1 ",
        {
          "text-md": size === "medium",
          "text-sm": size === "small",
        },
      )}
    >
      <div className="text-neutral-content">{label}</div>
      <div>{value}</div>
    </div>
  );
}
