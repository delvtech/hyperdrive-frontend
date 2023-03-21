import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { autoUpdate, flip, useFloating } from "@floating-ui/react";
import classNames from "classnames";

export interface TooltipProps {
  content: ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  isOpen?: boolean;
}

export function Tooltip({
  children,
  content,
  placement = "top",
  isOpen,
}: PropsWithChildren<TooltipProps>): ReactElement {
  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  return (
    <span className="group">
      <span ref={refs.setReference}>{children}</span>
      <div
        ref={refs.setFloating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        className={classNames("relative w-max max-w-sm p-4 transition-all", {
          "pointer-events-auto opacity-100": context.open,
          "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100":
            !context.open,
        })}
      >
        <p className="shadow-l relative rounded-lg bg-midnight px-4 pt-2 pb-3 text-lg leading-lg text-white">
          {content}
        </p>
        <div
          className={classNames(
            "absolute h-5 w-5 rotate-45 rounded-sm bg-midnight shadow-lg",
            {
              // placement
              "bottom-2 left-1/2 -translate-x-1/2": context.placement === "top",
              "left-2 top-1/2 -translate-y-1/2": context.placement === "right",
              "top-2 left-1/2 -translate-x-1/2": context.placement === "bottom",
              "right-2 top-1/2 -translate-y-1/2": context.placement === "left",
            },
          )}
        ></div>
      </div>
    </span>
  );
}
