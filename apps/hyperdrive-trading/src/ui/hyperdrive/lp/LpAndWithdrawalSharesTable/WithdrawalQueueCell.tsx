import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { getWithdrawalSharesCurrentValue } from "src/ui/hyperdrive/withdrawalShares/getWithdrawalSharesCurrentValue";
import { useAccount } from "wagmi";

export function WithdrawalQueueCell({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): JSX.Element {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
    chainId: hyperdrive.chainId,
  });

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
    chainId: hyperdrive.chainId,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    decimals: hyperdrive.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares: balanceOfWithdrawalShares,
    baseProceedsFromPreview,
    withdrawalSharesRedeemedFromPreview,
  });

  return (
    <div className="flex flex-col">
      <p>
        {formatBalance({
          balance:
            // If there are no withdrawal shares, return 0 for both values
            balanceOfWithdrawalShares === 0n
              ? 0n
              : withdrawalSharesCurrentValue || 0n,
          decimals: hyperdrive?.decimals,
          places: baseToken?.places,
        })}{" "}
      </p>
      <p className="text-neutral-content">
        {formatBalance({
          balance:
            balanceOfWithdrawalShares === 0n
              ? 0n
              : baseProceedsFromPreview || 0n,
          decimals: baseToken?.decimals || 18,
          places: baseToken?.places,
        })}{" "}
        {baseToken?.symbol}
      </p>
    </div>
  );
}
