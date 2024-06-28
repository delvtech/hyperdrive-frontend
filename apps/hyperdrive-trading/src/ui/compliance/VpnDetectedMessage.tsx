import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement } from "react";

export function VpnDetectedMessage({
  className,
}: {
  className?: string;
}): ReactElement | undefined {
  return (
    <div
      className={classNames(
        "flex w-screen flex-col items-center justify-center gap-8",
        className,
      )}
    >
      <div className="space-y-3">
        <h2 className="flex items-center justify-center gap-4">
          <ExclamationTriangleIcon className="text-red-500 size-10 stroke-error" />{" "}
          VPN detected
        </h2>
        <p>We&lsquo;re sorry but this app is not accessible for VPN users.</p>
      </div>
      <a href="https://hyperdrive.box" className="daisy-link-primary">
        Hyperdrive Website
      </a>
    </div>
  );
}
