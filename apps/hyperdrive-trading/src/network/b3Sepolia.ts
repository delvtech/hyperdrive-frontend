import { defineChain } from "viem";
import { chainConfig } from "viem/op-stack";

export const sourceId = 1155111;
export const b3Sepolia = /*#__PURE__*/ defineChain({
  ...chainConfig,
  id: 1993,
  network: "b3-sepolia",
  name: "B3 Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://b3sepolia-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Sepolia B3 Explorer",
      url: "https://sepolia.explorer.b3.fun/",
      apiUrl: "https://sepolia-explorer.b3.fun/api/v2/",
    },
  },
  contracts: {
    ...chainConfig.contracts,
  },
  testnet: true,
  sourceId,
});
