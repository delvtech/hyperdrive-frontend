import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";

import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { useAccount } from "wagmi";
import { sepolia } from "wagmi/chains";

export function TotalLpValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const chainInfo = appConfig.chains[hyperdrive.chainId];
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { baseValue, openLpPositionStatus } = useOpenLpPosition({
    hyperdriveAddress: hyperdrive.address,
    account,
    chainId: hyperdrive.chainId,
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
        {openLpPositionStatus === "loading" ? (
          <Skeleton className="w-24" />
        ) : isFiatPriceEnabled ? (
          `$${formatBalance({
            balance: fiatPrice
              ? fixed(baseValue, baseToken.decimals).mul(
                  fiatPrice,
                  baseToken.decimals,
                ).bigint
              : 0n,
            decimals: hyperdrive.decimals,
            places: baseToken?.places,
          })}`
        ) : (
          `${formatBalance({
            balance: baseValue,
            decimals: hyperdrive.decimals,
            places: baseToken?.places,
          })} ${baseToken.symbol}`
        )}{" "}
      </p>
    </div>
  );
}
