import { SupportedChainId } from "src/chains/supportedChains";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address } from "viem";

export const ETH_ICON_URL =
  "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029";
export const SDAI_ICON_URL =
  "https://etherscan.io/token/images/Badgedai_32.svg";
export const STETH_ICON_URL =
  "https://cryptologos.cc/logos/steth-steth-logo.png?v=029";

const DAI_ICON_URL =
  "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029";
const DEFAULT_TOKEN_ICON_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==";

const localChainTokenIconUrls = {
  [ETH_MAGIC_NUMBER]: ETH_ICON_URL,
  "0x5FbDB2315678afecb367f032d93F642f64180aa3": DAI_ICON_URL,
};
const tokenIconUrls: Record<SupportedChainId, Record<Address, string>> = {
  31337: localChainTokenIconUrls,
  42069: localChainTokenIconUrls,
};

/**
 *
 * @deprecated use @hyperdrive/appconfig instead
 */
export function getTokenIconUrl({
  address,
  chainId,
}: {
  address: Address;
  chainId: SupportedChainId;
}): string {
  return tokenIconUrls[chainId][address] || DEFAULT_TOKEN_ICON_URL;
}
