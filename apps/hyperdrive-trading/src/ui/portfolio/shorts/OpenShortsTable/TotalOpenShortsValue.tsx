import { fixed } from "@delvtech/fixed-point-wasm";
import { getBaseToken, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
import { ReactElement } from "react";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useTotalOpenShortsValue } from "src/ui/hyperdrive/shorts/hooks/useTotalOpenShortsValue";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address } from "viem";
import { sepolia } from "viem/chains";

export function TotalOpenShortsValue({
  account,
  hyperdrives,
  openShorts,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
  openShorts: (OpenShort & { hyperdrive: HyperdriveConfig })[] | undefined;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();

  const { totalOpenShortsValue, isLoading } = useTotalOpenShortsValue({
    account,
    shorts: openShorts,
    enabled: !!openShorts,
  });
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrives[0].chainId,
    hyperdriveAddress: hyperdrives[0].address,
    appConfig,
  });
  const chainInfo = appConfig.chains[hyperdrives[0].chainId];

  const { fiatPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: baseToken.address,
  });
  const isFiatPriceEnabled = chainInfo.id !== sepolia.id;

  return (
    <div className="flex items-center gap-2">
      <img src={chainInfo.iconUrl} className="size-7 rounded-full" />
      {isFiatPriceEnabled ? (
        <p className="font-dmMono text-h4">
          {`$${formatBalance({
            balance:
              totalOpenShortsValue && !isLoading && fiatPrice
                ? fixed(totalOpenShortsValue, baseToken.decimals).mul(
                    fiatPrice,
                    baseToken.decimals,
                  ).bigint
                : 0n,
            decimals: baseToken.decimals,
            places: 2, // fiat is always 2 decimals for display
            includeCommas: true,
          })}`}{" "}
        </p>
      ) : (
        <p className="font-dmMono text-h4">
          {formatBalance({
            balance: totalOpenShortsValue || 0n,
            decimals: baseToken.decimals || 18,
            places: baseToken.places || 2,
            includeCommas: true,
          })}{" "}
          {baseToken.symbol}
        </p>
      )}
    </div>
  );
}
