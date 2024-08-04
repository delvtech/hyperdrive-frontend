import classNames from "classnames";
import type { ReactElement } from "react";

export function PausedCell({ isPaused }: { isPaused: boolean }): ReactElement {
  return (
    <span
      className={classNames({
        "text-error": isPaused,
      })}
    >
      {isPaused.toString()}
    </span>
  );
}
