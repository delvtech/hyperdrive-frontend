import classNames from "classnames";
import type { ReactElement } from "react";
import type { Status } from "src/registry/data";

export function StatusCell({ status }: { status: Status }): ReactElement {
  return (
    <span
      className={classNames({
        "text-success": status === "active",
        "text-error": status === "sunset",
      })}
    >
      {status}
    </span>
  );
}
