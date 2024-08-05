import classNames from "classnames";
import type { ReactElement, ReactNode } from "react";

interface ChecklistItemProps {
  readOnly?: boolean;
  checked?: boolean;
  variant?: "primary" | "secondary" | "accent" | "success";
  children: ReactNode;
}

export function ChecklistItem({
  children,
  checked,
  readOnly,
  variant,
}: ChecklistItemProps): ReactElement {
  return (
    <div className="flex items-start gap-2 md:items-center">
      <input
        type="checkbox"
        checked={checked}
        readOnly={readOnly}
        tabIndex={readOnly ? -1 : undefined}
        className={classNames("daisy-checkbox daisy-checkbox-xs m-1", {
          "daisy-checkbox-success": variant === "success",
          "daisy-checkbox-primary": variant === "primary",
          "daisy-checkbox-secondary": variant === "secondary",
          "daisy-checkbox-accent": variant === "accent",
        })}
      />
      <span>{children}</span>
    </div>
  );
}
