import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ZERO_ADDRESS } from "src/base/constants";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalOpenLongsValueTwo } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrices";
import { sepolia } from "viem/chains";
import { useAccount } from "wagmi";

export function TotalOpenLongsValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { chains, tokens } = useAppConfig();
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
  const baseToken = tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const chainInfo = chains[hyperdrive.chainId];

  const { fiatPrice } = useTokenFiatPrice({ tokenAddress: baseToken?.address });
  const isFiatPriceEnabled =
    hyperdrive.poolConfig.baseToken !== ZERO_ADDRESS &&
    chainInfo.id !== sepolia.id;

  return isFiatPriceEnabled ? (
    <p className="font-dmMono text-h4">
      {`$${formatBalance({
        balance:
          totalOpenLongsValue && !isLoading && fiatPrice
            ? fixed(totalOpenLongsValue || 0n, baseToken?.decimals).mul(
                fiatPrice,
                baseToken?.decimals,
              ).bigint
            : 0n,
        decimals: hyperdrive.decimals || 18,
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
