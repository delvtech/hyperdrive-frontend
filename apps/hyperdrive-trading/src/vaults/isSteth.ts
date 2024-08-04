import type { TokenConfig } from "@hyperdrive/appconfig";

export function getIsSteth(token: TokenConfig<any>): boolean {
  return token.tags.includes("steth");
}
