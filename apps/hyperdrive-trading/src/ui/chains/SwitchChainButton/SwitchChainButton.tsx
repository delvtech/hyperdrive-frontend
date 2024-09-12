import classNames from "classnames";
import { ReactElement } from "react";
import { useSwitchChain } from "wagmi";

export function SwitchNetworksButton({
  targetChainId,
  targetChainName,
}: {
  targetChainId: number;
  targetChainName: string;
}): ReactElement {
  const { switchChain, status: switchChainStatus } = useSwitchChain();
  return (
    <button
      disabled={switchChainStatus === "loading"}
      className={classNames(
        "daisy-btn daisy-btn-warning w-full rounded-full disabled:bg-warning disabled:text-base-100 disabled:opacity-30",
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
