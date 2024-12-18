import classNames from "classnames";
import { ReactNode } from "react";

export default function CustomBanner({
  icon,
  description,
  className,
}: {
  icon?: ReactNode;
  description: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={classNames("daisy-alert", className)}>
      {icon}
      {description}
    </div>
  );
}
