import { fixed } from "@delvtech/fixed-point-wasm";
import { getBaseToken, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";

import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useTotalOpenLpPositions } from "src/ui/hyperdrive/lp/hooks/useTotalOpenLpPositions";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { Address } from "viem";
import { sepolia } from "wagmi/chains";

export function TotalLpValue({
  hyperdrive,
  account,
  openLpPositions,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  openLpPositions:
    | {
        hyperdrive: HyperdriveConfig;
        lpShares: bigint;
        withdrawalShares: bigint;
      }[]
    | undefined;
}): ReactElement {
  const { totalOpenLpPositions, isLoading: isLoadingTotalOpenLpPositions } =
    useTotalOpenLpPositions({
      account,
      openLpPositions,
      enabled: !!openLpPositions,
    });
  const appConfig = useAppConfigForConnectedChain();
  const chainInfo = appConfig.chains[hyperdrive.chainId];
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { fiatPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: baseToken.address,
  });
  const isFiatPriceEnabled = chainInfo.id !== sepolia.id;
  return (
    <div className="flex items-center gap-2">
      <img src={chainInfo.iconUrl} className="size-7 rounded-full" />
      <p className="flex gap-2 font-dmMono text-h4">
        {isLoadingTotalOpenLpPositions ? (
          <Skeleton className="w-24" />
        ) : isFiatPriceEnabled ? (
          `$${formatBalance({
            balance: fiatPrice
              ? fixed(totalOpenLpPositions ?? 0n, baseToken.decimals).mul(
                  fiatPrice,
                  baseToken.decimals,
                ).bigint
              : 0n,
            decimals: hyperdrive.decimals,
            places: baseToken?.places,
          })}`
        ) : (
          `${formatBalance({
            balance: totalOpenLpPositions ?? 0n,
            decimals: hyperdrive.decimals,
            places: baseToken?.places,
          })} ${baseToken.symbol}`
        )}{" "}
      </p>
    </div>
  );
}
