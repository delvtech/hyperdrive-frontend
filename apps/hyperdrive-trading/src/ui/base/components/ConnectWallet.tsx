import { ConnectButton } from "@rainbow-me/rainbowkit";
export function ConnectWalletButton(): JSX.Element {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;
        return (
          <div
            aria-hidden={!mounted}
            className={
              !mounted ? "pointer-events-none invisible select-none" : ""
            }
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary w-full px-8"
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-error w-32"
                    onClick={openChainModal}
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div className="flex items-center gap-4">
                  <button
                    onClick={openChainModal}
                    className="daisy-btn daisy-btn-outline rounded-full"
                  >
                    {chain.name}
                  </button>
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary mx-0 w-32"
                    onClick={openAccountModal}
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
