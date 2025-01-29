import { fixed } from "@delvtech/fixed-point-wasm";
import { getBaseToken, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { OpenLongPositionReceived } from "@delvtech/hyperdrive-js";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useTotalOpenLongsValueTwo } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address } from "viem";

export function TotalOpenLongsValue({
  hyperdrives,
  openLongs,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
  openLongs:
    | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
    | undefined;
}): ReactElement {
  const { totalOpenLongsValue, isLoading } = useTotalOpenLongsValueTwo({
    account,
    longs: openLongs,
    enabled: !!openLongs,
  });
  const appConfig = useAppConfigForConnectedChain();
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
  const isFiatPriceEnabled = !isTestnetChain(hyperdrives[0].chainId);

  return (
    <div className="flex items-center gap-2">
      <img src={chainInfo.iconUrl} className="size-7 rounded-full" />
      {isFiatPriceEnabled ? (
        <p className="font-dmMono text-h4">
          {`$${formatBalance({
            balance:
              totalOpenLongsValue && !isLoading && fiatPrice
                ? fixed(totalOpenLongsValue || 0n, baseToken?.decimals).mul(
                    fiatPrice,
                    baseToken?.decimals,
                  ).bigint
                : 0n,
            decimals: baseToken?.decimals,
            places: baseToken?.places,
            includeCommas: true,
          })}`}{" "}
        </p>
      ) : (
        <p className="font-dmMono text-h4">
          {formatBalance({
            balance: totalOpenLongsValue || 0n,
            decimals: baseToken?.decimals || 18,
            places: baseToken?.places || 2,
            includeCommas: true,
          })}{" "}
          {baseToken?.symbol}
        </p>
      )}
    </div>
  );
}
