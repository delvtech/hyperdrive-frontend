import classNames from "classnames";
import { ReactElement } from "react";
import ErrFace from "src/ui/base/icons/ErrFace";

export function UnexpectedErrorMessage({
  className,
}: {
  className?: string;
}): ReactElement | undefined {
  return (
    <div className={classNames("flex flex-col items-center gap-10", className)}>
      <ErrFace className="fill-neutral-content" />
      <div className="flex max-w-lg flex-col items-center gap-4">
        <h1 className="text-h2 font-bold text-white">Unexpected Error</h1>
        <p className="leading-normal text-center text-lg text-neutral-content">
          We&rsquo;re sorry, but an error occurred while loading the app.
          Refresh the page or try again later.
        </p>
      </div>
    </div>
  );
}
