import { TokenConfig } from "@hyperdrive/appconfig";

export function getIsReth(token: TokenConfig<any>): boolean {
  return token.tags.includes("reth");
}
