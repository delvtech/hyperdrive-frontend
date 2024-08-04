import type { TokenConfig } from "@hyperdrive/appconfig";

export function getIsMetaMorpho(token: TokenConfig<any>): boolean {
  return token.extensions["protocol"] === "morpho";
}
