import type { OpenShort } from "@delvtech/hyperdrive-viem";
import type { HyperdriveConfig } from "@hyperdrive/appconfig";
import type { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
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
  const { marketState } = useMarketState(hyperdrive.address);
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
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (openShortsStatus === "loading") {
    return (
      <LoadingState
        heading="Loading your Shorts..."
        text="Searching for Short events, calculating current value and PnL..."
      />
    );
  }

  if (!openShorts?.length && openShortsStatus === "success") {
    if (marketState?.isPaused) {
      return (
        <div className="my-28">
          <NonIdealState
            heading="Market Paused"
            text="This market is currently paused. You cannot open new positions but you may close existing ones."
          />
        </div>
      );
    }
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Short positions"
          text="Open a Short, switch wallets, or view your closed Short positions"
          action={
            <OpenShortModalButton
              modalId="open-short"
              hyperdrive={hyperdrive}
            />
          }
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
