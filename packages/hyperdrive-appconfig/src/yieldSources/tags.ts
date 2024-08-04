import type { Tag } from "src/tags";

export const yieldSourceTag: Tag = {
  id: "yieldSource",
  description: "A hyperdrive market's yield source",
};
export const erc4626Tag: Tag = {
  id: "erc4626",
  description: "A vault standard for yield sources",
};
export const stethTag: Tag = {
  id: "steth",
  description:
    "The stETH yield source, which conforms to no ERC standard, and must be treated as a special case",
};
