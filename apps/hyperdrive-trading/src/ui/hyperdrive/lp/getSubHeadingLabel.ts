import { HyperdriveConfig, TokenConfig } from "@delvtech/hyperdrive-appconfig";

export function getSubHeadingLabel(
  baseToken: TokenConfig,
  hyperdrive: HyperdriveConfig,
  sharesToken: TokenConfig,
): string {
  if (
    hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
    hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled
  ) {
    return `Redeem your LP shares for ${baseToken.symbol} or ${sharesToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    return `Redeem your LP shares for ${baseToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    return `Redeem your LP shares for ${sharesToken.symbol}`;
  }

  // This should never happen and is just to prevent typescript from complaining
  throw new Error("Cannot create subheading label");
}
