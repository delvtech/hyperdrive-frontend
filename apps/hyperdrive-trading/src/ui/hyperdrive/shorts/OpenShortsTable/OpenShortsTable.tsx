/* eslint-disable react/jsx-key */
import { OpenShort } from "@delvtech/hyperdrive-viem";
import { WalletIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { OpenShortsTableDesktop } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTableDesktop";
import { OpenShortsTableMobile } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTableMobile";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { useAccount } from "wagmi";

export function OpenShortsTable({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();

  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { openShorts, openShortsStatus } = useOpenShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Shorts."
          icon={<WalletIcon height="64" />}
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (openShortsStatus === "loading") {
    return <LoadingState />;
  }

  if (!openShorts?.length && openShortsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Short positions"
          text="Open a Short, switch wallets, or view your closed short positions"
        />
      </div>
    );
  }

  if (isTailwindSmallScreen) {
    return (
      <OpenShortsTableMobile
        hyperdrive={hyperdrive}
        openShorts={
          openShorts as OpenShort[] // safe to cast since we don't reach this if it's undefined
        }
      />
    );
  }

  return (
    <OpenShortsTableDesktop
      hyperdrive={hyperdrive}
      openShorts={
        openShorts as OpenShort[] // safe to cast since we don't reach this if it's undefined
      }
    />
  );
}
