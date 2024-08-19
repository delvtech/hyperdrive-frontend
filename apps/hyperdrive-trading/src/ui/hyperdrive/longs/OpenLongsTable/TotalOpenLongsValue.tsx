import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalOpenLongsValueTwo } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { useTokenFiatPrices } from "src/ui/token/hooks/useTokenFiatPrices";
import { Address } from "viem";
import { useAccount, useChainId } from "wagmi";

export function TotalOpenLongsValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const chainId = useChainId();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });

  const { totalOpenLongsValue, isLoading } = useTotalOpenLongsValueTwo({
    account,
    longs: openLongs,
    enabled: openLongsStatus === "success",
    hyperdrive,
  });
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const tokenPrices = useTokenFiatPrices([baseToken?.address as Address]);

  const baseTokenPrice =
    tokenPrices?.[baseToken?.address.toLowerCase() as Address];
  return !isTestnetChain(chainId) ? (
    <p className="font-dmMono text-h4">
      {`$${formatBalance({
        balance:
          totalOpenLongsValue && !isLoading && baseTokenPrice
            ? fixed(totalOpenLongsValue || 0n, baseToken?.decimals).mul(
                baseTokenPrice,
                baseToken?.decimals,
              ).bigint
            : 0n,
        decimals: baseToken?.decimals || 18,
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
  );
}
