import { HyperdriveConfig, TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";

export function WithdrawTokenPicker({
  sharesToken,
  hyperdrive,
  baseToken,
  activeWithdrawToken,
  onChange,
}: {
  sharesToken: TokenConfig;
  hyperdrive: HyperdriveConfig;
  baseToken: TokenConfig;
  activeWithdrawToken: TokenConfig;
  onChange: (tokenAddress: string) => void;
}): ReactElement {
  const tokens: TokenChoice[] = [{ tokenConfig: sharesToken }];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift({ tokenConfig: baseToken });
  }

  return (
    <TokenPicker
      tokens={tokens}
      activeTokenAddress={activeWithdrawToken.address}
      onChange={onChange}
    />
  );
}
