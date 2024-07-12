import classNames from "classnames";
import { ReactElement } from "react";
import { Status } from "src/registry/data";

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
