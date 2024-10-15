import classNames from "classnames";
import { ReactElement } from "react";
import { useSwitchChain } from "wagmi";

export function SwitchNetworksButton({
  targetChainId,
  targetChainName,
  wide = true,
}: {
  targetChainId: number;
  targetChainName: string;
  wide?: boolean;
}): ReactElement {
  const { switchChain, status: switchChainStatus } = useSwitchChain();
  return (
    <button
      disabled={switchChainStatus === "loading"}
      className={classNames(
        "daisy-btn daisy-btn-warning rounded-full disabled:bg-warning disabled:text-base-100 disabled:opacity-30",
        { "w-full": wide },
      )}
      onClick={() => {
        switchChain({ chainId: targetChainId });
      }}
    >
      {switchChainStatus === "loading"
        ? "Changing networks..."
        : `Switch to ${targetChainName}`}
    </button>
  );
}
