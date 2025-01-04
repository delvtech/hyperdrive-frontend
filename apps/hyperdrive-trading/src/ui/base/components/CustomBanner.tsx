import classNames from "classnames";
import { ReactNode } from "react";

export default function CustomBanner({
  description,
  className,
}: {
  description: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={classNames("flex w-full gap-1 p-4", className)}>
      {description}
    </div>
  );
}
