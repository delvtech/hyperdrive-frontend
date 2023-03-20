import classNames from "classnames";
import { ReactNode, ReactElement } from "react";

interface StatProps {
  text: string;
  subtext: string;
  icon?: ReactNode;
  alignment?: "left" | "right" | "center";
}

export function Stat({
  subtext,
  text,
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
        className={classNames("flex shrink-0 flex-col", {
          "text-start": alignment === "left",
          "text-center": alignment === "center",
          "text-end": alignment === "right",
        })}
      >
        <div className="text-h4 font-bold leading-body text-white">{text}</div>
        <div className="text-body leading-sm text-secondaryText">{subtext}</div>
      </div>
    </div>
  );
}
