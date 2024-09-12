import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";

export function InvalidTransactionButton({
  children,
  wide,
}: PropsWithChildren<{ wide?: boolean }>): ReactElement {
  return (
    <button
      disabled
      className={classNames(
        "daisy-btn daisy-btn-error rounded-full disabled:bg-error disabled:text-base-100 disabled:opacity-70",
        { "w-full": wide },
      )}
    >
      {children}
    </button>
  );
}
