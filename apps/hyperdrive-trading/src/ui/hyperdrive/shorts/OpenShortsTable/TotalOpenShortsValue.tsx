import { fixed } from "@delvtech/fixed-point-wasm";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { useTotalOpenShortsValue } from "src/ui/hyperdrive/shorts/hooks/useTotalOpenShortsValue";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrices";
import { sepolia } from "viem/chains";
import { useAccount } from "wagmi";

export function TotalOpenShortValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  {
    const { address: account } = useAccount();
    const appConfig = useAppConfig();
    const { openShorts, openShortsStatus } = useOpenShorts({
      account,
      hyperdriveAddress: hyperdrive.address,
    });
    const { totalOpenShortsValue, isLoading } = useTotalOpenShortsValue({
      hyperdrive,
      account,
      shorts: openShorts,
      enabled: openShortsStatus === "success",
    });
    const baseToken = findBaseToken({
      hyperdriveAddress: hyperdrive.address,
      appConfig,
    });
    const chainInfo = appConfig.chains[hyperdrive.chainId];

    const { fiatPrice } = useTokenFiatPrice({
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
              decimals: hyperdrive.decimals,
              places: 2,
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
}
