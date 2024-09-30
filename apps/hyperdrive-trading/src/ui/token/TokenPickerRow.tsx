import { TokenConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address } from "viem";
import { useAccount } from "wagmi";
import { useTokenBalance } from "./hooks/useTokenBalance";

export function TokenPickerRow({
  tokenConfig,
  tokenBalance,
  onChange,
}: {
  tokenConfig: TokenConfig;
  tokenBalance: bigint | undefined;
  onChange: (tokenAddress: Address) => void;
}): ReactElement {
  const { address: account } = useAccount();
  const { balance: tokenBalanceData } = useTokenBalance({
    account: account,
    tokenAddress: tokenConfig.address,
    decimals: tokenConfig.decimals,
    tokenChainId: tokenConfig.chainId,
    enabled: !!account && !!tokenBalance,
  });

  return (
    <li key={tokenConfig?.address}>
      <button
        onClick={(e) => {
          onChange(tokenConfig?.address);
          e.preventDefault();
        }}
        className="gap-2"
      >
        <img src={tokenConfig?.iconUrl} className="h-5 rounded-full" />{" "}
        {tokenConfig?.symbol}
        <label className="flex w-32 flex-1 cursor-pointer items-end justify-end text-neutral-content">
          {formatBalance({
            balance: tokenBalanceData?.value || 0n,
            decimals: tokenConfig?.decimals,
            places: tokenConfig?.places,
          })}
        </label>
      </button>
    </li>
  );
}
