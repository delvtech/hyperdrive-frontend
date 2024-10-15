import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { useMintToken } from "src/ui/token/hooks/useMintToken";
import { sepolia } from "viem/chains";
import { useAccount, useChainId } from "wagmi";

export function MintView(): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const chainId = useChainId();
  const isTestnet = isTestnetChain(chainId);
  return (
    <div className="flex flex-col items-center gap-4 lg:w-[900px]">
      <Hero />
      <div className="flex w-full flex-col items-center">
        {!isTestnet ? (
          <div>
            <SwitchNetworksButton
              targetChainId={sepolia.id}
              targetChainName={"Sepolia"}
            />
          </div>
        ) : (
          <div className="flex w-full flex-wrap gap-4">
            {appConfig.tokens
              .filter((t) => t.address !== ETH_MAGIC_NUMBER)
              .map((token) => (
                <div key={token.address}>
                  <MintButton token={token} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MintButton({ token }: { token: TokenConfig }) {
  const { address: account } = useAccount();
  const chainId = useChainId();
  const isTestnet = isTestnetChain(chainId);
  const { mint } = useMintToken({
    token,
    destination: account,
    amount: MAX_UINT256,
  });
  return (
    <button
      key={token.address}
      onClick={mint}
      disabled={!isTestnet}
      className={classNames("daisy-btn", { "daisy-btn-disabled": !isTestnet })}
    >
      <div className="flex items-center justify-start gap-4">
        <img
          src={token.iconUrl}
          className={classNames("size-6 rounded-full", {
            "opacity-50": !isTestnet,
          })}
        />
        <span className="w-20 text-left">Mint {token.symbol}</span>
      </div>
    </button>
  );
}

export function Hero(): ReactElement {
  return (
    <div className="daisy-hero">
      <div className={"daisy-hero-content"}>
        <div className="max-w-4xl">
          <h1
            className={classNames(
              "gradient-text mb-4 text-h3 font-medium md:text-h2",
            )}
          >
            Mint Tokens
          </h1>
          <h5
            className={classNames(
              "font-inter text-lg leading-bodyText text-neutral-content",
            )}
          >
            Mint tokens to use with the testnet Hyperdrive pools.
          </h5>
        </div>
      </div>
    </div>
  );
}
