import { fixed } from "@delvtech/fixed-point-wasm";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalOpenLongsValueTwo } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { useAccount } from "wagmi";

export function TotalOpenLongsValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { totalOpenLongsValue, isLoading } = useTotalOpenLongsValueTwo({
    account,
    longs: openLongs,
    enabled: openLongsStatus === "success",
    hyperdrive,
  });
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const chainInfo = appConfig.chains[hyperdrive.chainId];

  const { fiatPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: baseToken.address,
  });
  const isFiatPriceEnabled = !isTestnetChain(hyperdrive.chainId);

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
            decimals: hyperdrive.decimals,
            places: 2,
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
