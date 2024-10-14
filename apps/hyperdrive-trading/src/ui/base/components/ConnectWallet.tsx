import { XCircleIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { useIsReadOnlyRegion } from "src/ui/compliance/hooks/useIsReadOnlyRegion";

export function ConnectWalletButton({ wide }: { wide?: boolean }): JSX.Element {
  if (wide) {
    return (
      <div className="flex w-full flex-col gap-2 [&>div>button]:w-full [&>div>button]:!text-center [&>div]:w-full">
        <RegionAwareConnectButton wide={wide} />
      </div>
    );
  }

  return <RegionAwareConnectButton />;
}

function RegionAwareConnectButton({ wide }: { wide?: boolean }) {
  const isReadOnlyRegion = useIsReadOnlyRegion();

  if (isReadOnlyRegion) {
    return (
      <button
        type="button"
        disabled
        className={classNames(
          "daisy-btn daisy-btn-outline flex gap-2 rounded-full border-error/50 !text-error/75",
          {
            "w-full": wide,
          },
        )}
      >
        <XCircleIcon className="size-6" />
        This feature is not available in your region
      </button>
    );
  }

  return <ConnectButton showBalance={false} />;
}
