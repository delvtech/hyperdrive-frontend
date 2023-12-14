import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

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
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        readOnly={readOnly}
        tabIndex={readOnly ? -1 : undefined}
        className={classNames("daisy-checkbox daisy-checkbox-xs", {
          "daisy-checkbox-success": variant === "success",
          "daisy-checkbox-primary": variant === "primary",
          "daisy-checkbox-secondary": variant === "secondary",
          "daisy-checkbox-accent": variant === "accent",
        })}
      />
      <span className="text-p2">{children}</span>
    </div>
  );
}
