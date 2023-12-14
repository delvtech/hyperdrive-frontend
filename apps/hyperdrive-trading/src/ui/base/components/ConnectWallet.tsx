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
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="daisy-btn-primary daisy-btn daisy-btn-circle w-32"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="daisy-btn-primary daisy-btn daisy-btn-circle w-32"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <button
                  className="daisy-btn-primary daisy-btn daisy-btn-circle mx-0 w-32"
                  onClick={openAccountModal}
                  type="button"
                >
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
