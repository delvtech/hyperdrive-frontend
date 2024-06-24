import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useAccount } from "wagmi";
import useAddressScreen from "./hooks/useAddressScreen";

export function VpnDetectedMessage({
  className,
  show,
}: {
  className?: string;
  show?: boolean;
}): ReactElement | undefined {
  const { address } = useAccount();
  const { isIneligible } = useAddressScreen(address);
  const navigate = useNavigate();
  const isVoid = !!useMatchRoute()({ to: "/void" });

  // Redirect to void if ineligible
  useEffect(() => {
    if (isIneligible && !isVoid) {
      navigate({ to: "/void" });
    }
  }, [isIneligible, isVoid, navigate]);

  return isIneligible || show ? (
    <div
      className={classNames(
        "flex w-screen flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <h2 className="flex items-center gap-4">
        <ExclamationTriangleIcon className="text-red-500 size-10 stroke-error" />
        VPN detected
      </h2>
      <p>We&lsquo;re sorry but this app is not accessible for VPN users.</p>
    </div>
  ) : undefined;
}
