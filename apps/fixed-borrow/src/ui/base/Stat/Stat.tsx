import classNames from "classnames";
import { ReactNode, ReactElement } from "react";

interface StatProps {
  stat: ReactNode;
  label: string;
  icon?: ReactNode;
  alignment?: "left" | "right" | "center";
}

export function Stat({
  label,
  stat,
  alignment = "left",
  icon,
}: StatProps): ReactElement {
  return (
    <div
      className={classNames("flex w-full items-center gap-3", {
        "justify-start": alignment === "left",
        "justify-center": alignment === "center",
        "justify-end": alignment === "right",
      })}
    >
      {icon}
      <div
        className={classNames("flex flex-col", {
          "text-start": alignment === "left",
          "text-center": alignment === "center",
          "text-end": alignment === "right",
        })}
      >
        <div className="text-h4 font-bold text-white">{stat}</div>
        <div className="text-h6 text-secondaryText">{label}</div>
      </div>
    </div>
  );
}
