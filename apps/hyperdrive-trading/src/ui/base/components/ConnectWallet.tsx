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
                <div className="daisy-join flex items-center rounded-full">
                  <button
                    className="daisy-btn daisy-btn-circle daisy-join-item flex size-12 bg-base-300"
                    onClick={openChainModal}
                  >
                    <img className="w-6 hover:scale-105" src={chain.iconUrl} />
                  </button>
                  <button
                    className="daisy-btn daisy-btn-circle daisy-join-item mx-0 w-24 md:w-32"
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
