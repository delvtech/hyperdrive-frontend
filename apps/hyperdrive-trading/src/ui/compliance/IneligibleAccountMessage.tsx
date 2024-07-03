import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useAccount } from "wagmi";
import useAddressScreen from "./hooks/useAddressScreen";

export function IneligibleAccountMessage({
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
      <h2>Ineligible Wallet Address</h2>
      <p>This wallet address is not eligible to use this website.</p>
    </div>
  ) : undefined;
}
