import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { publicClient } from "../client";

const registry = new ReadRegistry({
  address: "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  publicClient,
});

const result = await registry.getFactoryAddresses();

console.log(result);
